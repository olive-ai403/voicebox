import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.orgName}>오늘도가게 (협동상회협동조합)</span>
        <span className={styles.orgIntro}>
          지역 먹거리와 생활상품을 함께 구매하는 마을 협동조합입니다.
        </span>
      </div>
    </footer>
  )
}
