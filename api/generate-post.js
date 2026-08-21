import { createClient } from '@supabase/supabase-js'

const GEMINI_MODEL = 'gemini-3.5-flash-lite'

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return {}
    }
  }
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf-8')
  return raw ? JSON.parse(raw) : {}
}

async function fetchCategoryNames() {
  const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY)
  const { data, error } = await supabase.from('categories').select('name').order('id', { ascending: true })
  if (error) throw error
  return data.map((c) => c.name)
}

function buildPrompt(input, categoryNames) {
  return `당신은 "우리 동네 목소리함"이라는 동네 생활 제보 서비스의 민원 작성 도우미입니다.
주민이 짧게 남긴 메모를 정식 민원 글로 다듬어주세요.

규칙:
- title: 무엇이 문제인지 한눈에 알 수 있는 15자 내외의 제목
- content: 정중한 존댓말 3~5문장으로, 언제·어디서·무엇이 문제인지와 필요한 조치를 포함
- category: 다음 목록 중 내용과 가장 잘 맞는 것을 정확히 하나만 고르세요 — ${categoryNames.join(', ')}
- 메모에 없는 사실을 지어내지 말고, 주어진 내용만 다듬으세요

주민이 남긴 메모:
"""
${input}
"""`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 지원합니다.' })
    return
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: '서버에 GEMINI_API_KEY가 설정되어 있지 않습니다.' })
    return
  }

  let body
  try {
    body = await readJsonBody(req)
  } catch {
    res.status(400).json({ error: '요청 본문을 읽을 수 없습니다.' })
    return
  }

  const input = typeof body.input === 'string' ? body.input.trim().slice(0, 2000) : ''
  if (!input) {
    res.status(400).json({ error: '다듬을 내용을 입력해주세요.' })
    return
  }

  let categoryNames
  try {
    categoryNames = await fetchCategoryNames()
    if (categoryNames.length === 0) throw new Error('no categories')
  } catch (err) {
    console.error('fetchCategoryNames error:', err)
    res.status(500).json({ error: '분야 목록을 불러오지 못했어요.' })
    return
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: buildPrompt(input, categoryNames) }] }],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 500,
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'OBJECT',
              properties: {
                title: { type: 'STRING' },
                content: { type: 'STRING' },
                category: { type: 'STRING', enum: categoryNames },
              },
              required: ['title', 'content', 'category'],
            },
          },
        }),
      }
    )

    if (!geminiRes.ok) {
      const errText = await geminiRes.text()
      console.error('Gemini API error:', geminiRes.status, errText)
      res.status(502).json({ error: 'AI 작성 도우미 요청에 실패했어요.' })
      return
    }

    const data = await geminiRes.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (!text) {
      res.status(502).json({ error: 'AI 응답을 이해할 수 없어요.' })
      return
    }

    const parsed = JSON.parse(text)
    if (!parsed.title || !parsed.content || !categoryNames.includes(parsed.category)) {
      res.status(502).json({ error: 'AI 응답 형식이 올바르지 않아요.' })
      return
    }

    res.status(200).json({
      title: parsed.title,
      content: parsed.content,
      category: parsed.category,
    })
  } catch (err) {
    console.error('generate-post handler error:', err)
    res.status(500).json({ error: 'AI 작성 도우미 처리 중 오류가 발생했어요.' })
  }
}
