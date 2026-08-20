import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
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
      </div>
    </header>
  )
}
