import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>동네에서 겪은 불편, 편하게 알려주세요</h1>
        <Link to="/write" className={styles.button}>
          의견 남기기
        </Link>
      </div>
    </section>
  )
}
