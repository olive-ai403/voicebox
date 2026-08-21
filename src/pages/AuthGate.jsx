import { Navigate, Link } from 'react-router-dom'
import GoogleButton from '../components/GoogleButton'
import { useAuth } from '../lib/AuthContext'
import styles from './AuthGate.module.css'

const COPY = {
  login: { heading: '다시 오셨네요', desc: '구글 계정으로 로그인하고 의견을 남겨보세요.' },
  signup: { heading: '환영해요', desc: '구글 계정으로 간편하게 시작해보세요.' },
}

export default function AuthGate({ mode }) {
  const { user, loading, signInWithGoogle } = useAuth()

  if (!loading && user) return <Navigate to="/" replace />

  const { heading, desc } = COPY[mode]

  function handleGoogleClick() {
    const confirmed = window.confirm(
      '구글 계정으로 계속합니다. 처음이면 회원가입이, 이미 회원이면 로그인이 진행됩니다. 계속할까요?'
    )
    if (confirmed) signInWithGoogle()
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img src="/icons/icon-192.png" alt="" className={styles.icon} />
        <p className={styles.serviceName}>우리 동네 목소리함</p>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.desc}>{desc}</p>
        <GoogleButton onClick={handleGoogleClick} />
        <Link to="/" className={styles.backLink}>
          ← 홈으로
        </Link>
      </div>
    </main>
  )
}
