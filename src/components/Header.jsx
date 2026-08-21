import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useAuth } from '../lib/AuthContext'

export default function Header() {
  const { user, isAdmin } = useAuth()
  const avatarUrl = user?.user_metadata?.avatar_url
  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || '내 정보'

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          <img src="/icons/icon-192.png" alt="" className={styles.icon} />
          <span className={styles.orgName}>
            오늘도가게
            <small className={styles.orgSubtitle}>협동상회협동조합</small>
          </span>
        </Link>

        {user ? (
          <div className={styles.userArea}>
            {isAdmin && (
              <Link to="/admin" className={styles.adminLink}>
                관리자
              </Link>
            )}
            <Link to="/mypage" className={styles.avatarLink} aria-label="마이페이지">
              {avatarUrl ? (
                <img src={avatarUrl} alt="" className={styles.avatar} />
              ) : (
                <span className={styles.avatarFallback}>{displayName.slice(0, 1)}</span>
              )}
            </Link>
          </div>
        ) : (
          <div className={styles.authButtons}>
            <Link to="/login" className={styles.loginButton}>
              로그인
            </Link>
            <Link to="/signup" className={styles.signupButton}>
              회원가입
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
