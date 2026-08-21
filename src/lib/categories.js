import { supabase } from './supabaseClient'

export async function fetchCategories() {
  const { data, error } = await supabase.from('categories').select('*').order('id', { ascending: true })
  if (error) throw error
  return data
}

export async function addCategory(name) {
  const { error } = await supabase.from('categories').insert({ name })
  if (error) throw error
}

export async function deleteCategory(id) {
  const { error } = await supabase.from('categories').delete().eq('id', id)
  if (error) throw error
}
