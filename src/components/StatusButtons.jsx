import styles from './StatusButtons.module.css'
import { STATUS, STATUSES } from '../data/posts'

const ACTIVE_CLASS = {
  [STATUS.RECEIVED]: styles.activeReceived,
  [STATUS.IN_PROGRESS]: styles.activeInProgress,
  [STATUS.DONE]: styles.activeDone,
}

export default function StatusButtons({ status, onChange, disabled }) {
  return (
    <div className={styles.row} role="group" aria-label="처리 상태 변경">
      {STATUSES.map((s) => {
        const isActive = status === s
        return (
          <button
            key={s}
            type="button"
            className={`${styles.button} ${isActive ? ACTIVE_CLASS[s] : ''}`}
            onClick={() => onChange(s)}
            disabled={disabled}
          >
            {s}
          </button>
        )
      })}
    </div>
  )
}
