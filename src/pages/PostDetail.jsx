import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import CategoryChip from '../components/CategoryChip'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { fetchPostById } from '../lib/posts'
import styles from './PostDetail.module.css'

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchPostById(id)
      .then(setPost)
      .catch(() => setPost(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <main className={`container ${styles.page}`}>
        <p className={styles.notFound}>불러오는 중...</p>
      </main>
    )
  }

  if (!post) {
    return (
      <main className={`container ${styles.page}`}>
        <p className={styles.notFound}>글을 찾을 수 없어요.</p>
        <Link to="/" className={styles.backLink}>
          ← 목록으로
        </Link>
      </main>
    )
  }

  return (
    <main className={`container ${styles.page}`}>
      <Link to="/" className={styles.backLink}>
        ← 목록으로
      </Link>

      {post.photo ? (
        <img src={post.photo} alt="" className={styles.photo} />
      ) : (
        <PhotoPlaceholder className={`photo-placeholder ${styles.photo}`} />
      )}

      <div className={styles.toprow}>
        <StatusBadge status={post.status} />
        <CategoryChip category={post.category} />
      </div>

      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>
        {post.author} · {post.date}
      </p>
      <p className={styles.content}>{post.content}</p>
    </main>
  )
}
