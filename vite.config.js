import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function apiDevMiddleware() {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/generate-post', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method Not Allowed')
          return
        }
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        }
        try {
          const { default: handler } = await import('./api/generate-post.js')
          await handler(req, res)
        } catch (err) {
          console.error(err)
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'Internal Server Error' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.GEMINI_API_KEY = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY

  return {
    plugins: [react(), apiDevMiddleware()],
  }
})
