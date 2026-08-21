import { useEffect, useMemo, useState } from 'react'
import Hero from '../components/Hero'
import StatusFilter from '../components/StatusFilter'
import CategoryFilter from '../components/CategoryFilter'
import PostCard from '../components/PostCard'
import { CATEGORIES } from '../data/posts'
import { fetchPosts } from '../lib/posts'
import styles from './Home.module.css'

const ALL = '전체'

export default function Home() {
  const [status, setStatus] = useState(ALL)
  const [category, setCategory] = useState(ALL)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(
    () =>
      posts.filter(
        (post) =>
          (status === ALL || post.status === status) &&
          (category === ALL || post.category === category)
      ),
    [posts, status, category]
  )

  return (
    <main>
      <Hero />

      <section className={`container ${styles.filterSection}`}>
        <StatusFilter value={status} onChange={setStatus} />
        <CategoryFilter value={category} onChange={setCategory} categories={CATEGORIES} />
        <p className={styles.resultCount}>총 {filtered.length}건</p>
      </section>

      <section className={`container ${styles.listSection}`}>
        {loading ? (
          <p className={styles.empty}>불러오는 중...</p>
        ) : filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>조건에 맞는 글이 없어요.</p>
        )}
      </section>
    </main>
  )
}
