import { createContext, useCallback, useContext, useRef, useState } from 'react'
import styles from './Toast.module.css'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [message, setMessage] = useState(null)
  const timerRef = useRef(null)

  const showToast = useCallback((msg) => {
    setMessage(msg)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setMessage(null), 2500)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div className={styles.toast} role="status">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
