import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'
import StatusBadge from './StatusBadge'
import CategoryChip from './CategoryChip'
import PhotoPlaceholder from './PhotoPlaceholder'

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className={styles.card}>
      <div className={styles.row}>
        {post.photo ? (
          <img src={post.photo} alt="" className={styles.photo} />
        ) : (
          <PhotoPlaceholder className={`photo-placeholder ${styles.photo}`} />
        )}
        <div className={styles.body}>
          <div className={styles.toprow}>
            <StatusBadge status={post.status} />
            <CategoryChip category={post.category} />
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.excerpt}>{post.content}</p>
          <div className={styles.meta}>
            {post.author} · {post.date}
          </div>
        </div>
      </div>
    </Link>
  )
}
