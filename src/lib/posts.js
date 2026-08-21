import { supabase } from './supabaseClient'

function formatDate(isoString) {
  const d = new Date(isoString)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}

function mapPost(row) {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    author: row.author,
    category: row.category,
    status: row.status,
    photo: row.photo_urls?.[0] ?? null,
    date: formatDate(row.created_at),
  }
}

export async function fetchPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data.map(mapPost)
}

export async function fetchPostById(id) {
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single()
  if (error) throw error
  return mapPost(data)
}

export async function uploadPhoto(file) {
  const ext = file.name.split('.').pop()
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
  const { error } = await supabase.storage.from('post-photos').upload(path, file)
  if (error) throw error
  const {
    data: { publicUrl },
  } = supabase.storage.from('post-photos').getPublicUrl(path)
  return publicUrl
}

export async function createPost({ title, content, author, category, photoUrl }) {
  const { error } = await supabase.from('posts').insert({
    title,
    content,
    author,
    category,
    photo_urls: photoUrl ? [photoUrl] : [],
  })
  if (error) throw error
}
