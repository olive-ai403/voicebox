import { useCallback, useEffect, useState } from 'react'
import StatusBadge from '../components/StatusBadge'
import CategoryChip from '../components/CategoryChip'
import StatusButtons from '../components/StatusButtons'
import { deletePost, fetchPosts, updatePostStatus } from '../lib/posts'
import { addCategory, deleteCategory, fetchCategories } from '../lib/categories'
import styles from './Admin.module.css'

const TABS = [
  { key: 'posts', label: '의견 관리' },
  { key: 'categories', label: '분야 관리' },
]

export default function Admin() {
  const [tab, setTab] = useState('posts')

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.heading}>관리자 화면</h1>

      <div className={styles.tabBar} role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            className={`${styles.tabItem} ${tab === t.key ? styles.tabItemActive : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'posts' ? <AdminPosts /> : <AdminCategories />}
    </main>
  )
}

function AdminPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [updatingId, setUpdatingId] = useState(null)

  const load = useCallback(() => {
    setLoading(true)
    fetchPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function handleStatusChange(post, status) {
    if (status === post.status) return
    setUpdatingId(post.id)
    try {
      await updatePostStatus(post.id, status)
      setPosts((prev) => prev.map((p) => (p.id === post.id ? { ...p, status } : p)))
    } finally {
      setUpdatingId(null)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('이 글을 삭제할까요?')) return
    await deletePost(id)
    setPosts((prev) => prev.filter((p) => p.id !== id))
  }

  if (loading) return <p className={styles.empty}>불러오는 중...</p>
  if (posts.length === 0) return <p className={styles.empty}>등록된 의견이 없어요.</p>

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <div key={post.id} className={styles.card}>
          <div className={styles.cardToprow}>
            <StatusBadge status={post.status} />
            <CategoryChip category={post.category} />
          </div>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <p className={styles.cardMeta}>
            {post.author} · {post.date}
          </p>

          <StatusButtons
            status={post.status}
            disabled={updatingId === post.id}
            onChange={(status) => handleStatusChange(post, status)}
          />

          <button type="button" className={styles.deleteButton} onClick={() => handleDelete(post.id)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  )
}

function AdminCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const load = useCallback(() => {
    setLoading(true)
    fetchCategories()
      .then(setCategories)
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function handleAdd(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    setError('')
    try {
      await addCategory(trimmed)
      setName('')
      load()
    } catch {
      setError('추가에 실패했어요. 이미 있는 분야인지 확인해주세요.')
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('이 분야를 삭제할까요?')) return
    await deleteCategory(id)
    load()
  }

  return (
    <div>
      <form className={styles.categoryForm} onSubmit={handleAdd}>
        <input
          type="text"
          className={styles.categoryInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="새 분야 이름"
        />
        <button type="submit" className={styles.categoryAddButton}>
          추가
        </button>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}

      {loading ? (
        <p className={styles.empty}>불러오는 중...</p>
      ) : categories.length === 0 ? (
        <p className={styles.empty}>등록된 분야가 없어요.</p>
      ) : (
        <div className={styles.categoryList}>
          {categories.map((c) => (
            <span key={c.id} className={styles.categoryChip}>
              {c.name}
              <button
                type="button"
                className={styles.categoryRemove}
                onClick={() => handleDelete(c.id)}
                aria-label={`${c.name} 삭제`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
