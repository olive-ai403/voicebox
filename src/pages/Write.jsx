import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import PhotoUpload from '../components/PhotoUpload'
import { CATEGORIES } from '../data/posts'
import { createPost, updatePost, uploadPhoto, fetchPostById } from '../lib/posts'
import { useAuth } from '../lib/AuthContext'
import styles from './Write.module.css'

export default function Write() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()
  const { user } = useAuth()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [photoFile, setPhotoFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [existingPhoto, setExistingPhoto] = useState(null)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(isEdit)

  const authorName = user.user_metadata?.full_name || user.user_metadata?.name || user.email

  useEffect(() => {
    if (!isEdit) return
    fetchPostById(id)
      .then((post) => {
        if (post.userId !== user.id) {
          navigate('/mypage')
          return
        }
        setTitle(post.title)
        setContent(post.content)
        setCategory(post.category)
        setExistingPhoto(post.photo)
      })
      .catch(() => navigate('/mypage'))
      .finally(() => setLoading(false))
  }, [id])

  function handleSelectPhoto(file) {
    setPhotoFile(file)
    setPreviewUrl(URL.createObjectURL(file))
    setExistingPhoto(null)
  }

  function handleRemovePhoto() {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPhotoFile(null)
    setPreviewUrl(null)
    setExistingPhoto(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = {}
    if (!title.trim()) nextErrors.title = '제목을 입력해주세요'
    if (!content.trim()) nextErrors.content = '내용을 입력해주세요'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    try {
      const photoUrl = photoFile ? await uploadPhoto(photoFile) : existingPhoto

      if (isEdit) {
        await updatePost(id, { title: title.trim(), content: content.trim(), category, photoUrl })
        navigate(`/post/${id}`)
      } else {
        await createPost({
          title: title.trim(),
          content: content.trim(),
          author: authorName,
          userId: user.id,
          category,
          photoUrl,
        })
        navigate('/')
      }
    } catch (err) {
      setErrors({ submit: '저장에 실패했어요. 잠시 후 다시 시도해주세요.' })
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <main className={`container ${styles.page}`}>
        <p>불러오는 중...</p>
      </main>
    )
  }

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.heading}>{isEdit ? '의견 수정' : '의견 쓰기'}</h1>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="title">
            제목
          </label>
          <input
            id="title"
            type="text"
            className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="어떤 불편이나 제안인가요?"
          />
          {errors.title && <p className={styles.errorMessage}>{errors.title}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="content">
            내용
          </label>
          <textarea
            id="content"
            className={`${styles.textarea} ${errors.content ? styles.inputError : ''}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="언제, 어디서, 어떤 일이 있었는지 알려주세요."
          />
          {errors.content && <p className={styles.errorMessage}>{errors.content}</p>}
        </div>

        <div className={styles.field}>
          <span className={styles.label}>작성자</span>
          <p className={styles.readonlyField}>{authorName}</p>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="category">
            분야
          </label>
          <select
            id="category"
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <span className={styles.label}>사진 (선택)</span>
          <PhotoUpload
            previewUrl={previewUrl || existingPhoto}
            onSelect={handleSelectPhoto}
            onRemove={handleRemovePhoto}
          />
        </div>

        {errors.submit && <p className={styles.errorMessage}>{errors.submit}</p>}

        <div className={styles.actions}>
          <Link to="/" className={styles.cancelButton}>
            취소
          </Link>
          <button type="submit" className={styles.submitButton} disabled={submitting}>
            {submitting ? '저장 중...' : isEdit ? '수정하기' : '저장하기'}
          </button>
        </div>
      </form>
    </main>
  )
}
