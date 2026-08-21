import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import CategoryChip from '../components/CategoryChip'
import { useAuth } from '../lib/AuthContext'
import { deletePost, fetchPostsByUser } from '../lib/posts'
import styles from './MyPage.module.css'

const TABS = [
  { key: 'posts', label: '내가 쓴 글' },
  { key: 'info', label: '내 정보' },
]

export default function MyPage() {
  const [tab, setTab] = useState('posts')

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.heading}>마이페이지</h1>

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

      {tab === 'posts' ? <MyPosts /> : <MyInfo />}
    </main>
  )
}

function MyPosts() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(() => {
    setLoading(true)
    fetchPostsByUser(user.id)
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [user.id])

  useEffect(() => {
    load()
  }, [load])

  async function handleDelete(id) {
    if (!window.confirm('이 글을 삭제할까요?')) return
    await deletePost(id)
    load()
  }

  if (loading) return <p className={styles.empty}>불러오는 중...</p>
  if (posts.length === 0) return <p className={styles.empty}>아직 작성한 글이 없어요.</p>

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <div key={post.id} className={styles.myPostCard}>
          <Link to={`/post/${post.id}`} className={styles.myPostLink}>
            <div className={styles.myPostToprow}>
              <StatusBadge status={post.status} />
              <CategoryChip category={post.category} />
            </div>
            <h3 className={styles.myPostTitle}>{post.title}</h3>
            <p className={styles.myPostMeta}>{post.date}</p>
          </Link>
          <div className={styles.myPostActions}>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => navigate(`/write/${post.id}`)}
            >
              수정
            </button>
            <button type="button" className={styles.deleteButton} onClick={() => handleDelete(post.id)}>
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function MyInfo() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const name = user.user_metadata?.full_name || user.user_metadata?.name || '이름 없음'
  const avatarUrl = user.user_metadata?.avatar_url

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <div className={styles.infoCard}>
      {avatarUrl && <img src={avatarUrl} alt="" className={styles.infoAvatar} />}
      <div className={styles.infoRow}>
        <span className={styles.infoLabel}>이름</span>
        <span className={styles.infoValue}>{name}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoLabel}>이메일</span>
        <span className={styles.infoValue}>{user.email}</span>
      </div>
      <button type="button" className={styles.signOutButton} onClick={handleSignOut}>
        로그아웃
      </button>
    </div>
  )
}
