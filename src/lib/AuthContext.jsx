import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import { useToast } from './ToastContext'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const { showToast } = useToast()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)

      if (event === 'SIGNED_IN' && session?.user) {
        const { created_at, last_sign_in_at } = session.user
        const isNewUser =
          created_at &&
          last_sign_in_at &&
          Math.abs(new Date(last_sign_in_at) - new Date(created_at)) < 10000
        showToast(isNewUser ? '가입을 마쳤습니다. 환영해요!' : '로그인되었습니다.')
      }
    })

    return () => subscription.unsubscribe()
  }, [showToast])

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/` },
    })
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
