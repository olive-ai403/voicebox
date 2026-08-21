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
    userId: row.user_id,
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

export async function fetchPostsByUser(userId) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data.map(mapPost)
}

export async function uploadPhoto(file) {
  const ext = file.name.split('.').pop()
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
  const { error } = await supabase.storage.from('photos').upload(path, file)
  if (error) throw error
  const {
    data: { publicUrl },
  } = supabase.storage.from('photos').getPublicUrl(path)
  return publicUrl
}

export async function createPost({ title, content, author, userId, category, photoUrl }) {
  const { error } = await supabase.from('posts').insert({
    title,
    content,
    author,
    user_id: userId,
    category,
    photo_urls: photoUrl ? [photoUrl] : [],
  })
  if (error) throw error
}

export async function updatePost(id, { title, content, category, photoUrl }) {
  const { error } = await supabase
    .from('posts')
    .update({ title, content, category, photo_urls: photoUrl ? [photoUrl] : [] })
    .eq('id', id)
  if (error) throw error
}

export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) throw error
}

export async function updatePostStatus(id, status) {
  const { error } = await supabase.from('posts').update({ status }).eq('id', id)
  if (error) throw error
}
