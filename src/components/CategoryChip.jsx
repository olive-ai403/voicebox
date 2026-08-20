import styles from './CategoryChip.module.css'

export default function CategoryChip({ category }) {
  return <span className={styles.chip}>{category}</span>
}
