import styles from './StatusBadge.module.css'
import { STATUS } from '../data/posts'

const VARIANT_CLASS = {
  [STATUS.RECEIVED]: styles.received,
  [STATUS.IN_PROGRESS]: styles.inProgress,
  [STATUS.DONE]: styles.done,
}

export default function StatusBadge({ status }) {
  return <span className={`${styles.badge} ${VARIANT_CLASS[status] ?? ''}`}>{status}</span>
}
