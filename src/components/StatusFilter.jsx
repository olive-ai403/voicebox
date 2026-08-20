import styles from './Filters.module.css'
import { STATUS, STATUSES } from '../data/posts'

const ALL = '전체'

const ACTIVE_CLASS = {
  [STATUS.RECEIVED]: styles.activeReceived,
  [STATUS.IN_PROGRESS]: styles.activeInProgress,
  [STATUS.DONE]: styles.activeDone,
}

export default function StatusFilter({ value, onChange }) {
  return (
    <div className={styles.group}>
      <span className={styles.label}>처리 상태</span>
      <div className={`${styles.row} ${styles.noWrap}`} role="group" aria-label="처리 상태 필터">
        {[ALL, ...STATUSES].map((status) => {
          const isActive = value === status
          const activeClass = status === ALL ? styles.activeNeutral : ACTIVE_CLASS[status]
          return (
            <button
              key={status}
              type="button"
              className={`${styles.chip} ${isActive ? activeClass : ''}`}
              onClick={() => onChange(status)}
            >
              {status}
            </button>
          )
        })}
      </div>
    </div>
  )
}
