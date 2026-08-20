import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PhotoUpload from '../components/PhotoUpload'
import { CATEGORIES } from '../data/posts'
import styles from './Write.module.css'

export default function Write() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [photoFile, setPhotoFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [errors, setErrors] = useState({})

  function handleSelectPhoto(file) {
    setPhotoFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  function handleRemovePhoto() {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPhotoFile(null)
    setPreviewUrl(null)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = {}
    if (!title.trim()) nextErrors.title = '제목을 입력해주세요'
    if (!content.trim()) nextErrors.content = '내용을 입력해주세요'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      navigate('/')
    }
  }

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.heading}>의견 쓰기</h1>

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
            previewUrl={previewUrl}
            onSelect={handleSelectPhoto}
            onRemove={handleRemovePhoto}
          />
        </div>

        <div className={styles.actions}>
          <Link to="/" className={styles.cancelButton}>
            취소
          </Link>
          <button type="submit" className={styles.submitButton}>
            저장하기
          </button>
        </div>
      </form>
    </main>
  )
}
