import { useRef, useState } from 'react'
import styles from './PhotoUpload.module.css'

export default function PhotoUpload({ previewUrl, onSelect, onRemove }) {
  const inputRef = useRef(null)
  const [dragOver, setDragOver] = useState(false)

  function handleFiles(fileList) {
    const file = fileList?.[0]
    if (file && file.type.startsWith('image/')) {
      onSelect(file)
    }
  }

  if (previewUrl) {
    return (
      <div className={styles.thumbRow}>
        <img src={previewUrl} alt="첨부한 사진 미리보기" className={styles.thumb} />
        <button type="button" className={styles.removeButton} onClick={onRemove}>
          사진 삭제
        </button>
      </div>
    )
  }

  return (
    <div
      className={`${styles.dropzone} ${dragOver ? styles.dragOver : ''}`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragOver(false)
        handleFiles(e.dataTransfer.files)
      }}
      role="button"
      tabIndex={0}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
        <path
          d="M12 16V4M12 4L7 9M12 4l5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span>사진 추가 (선택, 최대 1장)</span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.input}
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  )
}
