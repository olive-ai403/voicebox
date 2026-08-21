import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth'
import Home from './pages/Home'
import Write from './pages/Write'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MyPage from './pages/MyPage'
import { ToastProvider } from './lib/ToastContext'
import { AuthProvider } from './lib/AuthContext'

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/write"
                element={
                  <RequireAuth>
                    <Write />
                  </RequireAuth>
                }
              />
              <Route
                path="/write/:id"
                element={
                  <RequireAuth>
                    <Write />
                  </RequireAuth>
                }
              />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/mypage"
                element={
                  <RequireAuth>
                    <MyPage />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  )
}
