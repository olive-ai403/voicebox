import styles from './Filters.module.css'

const ALL = '전체'

export default function CategoryFilter({ value, onChange, categories }) {
  return (
    <div className={styles.group}>
      <span className={styles.label}>분야</span>
      <div className={styles.row} role="group" aria-label="분야 필터">
        {[ALL, ...categories].map((category) => {
          const isActive = value === category
          return (
            <button
              key={category}
              type="button"
              className={`${styles.chip} ${isActive ? styles.activeNeutral : ''}`}
              onClick={() => onChange(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}
