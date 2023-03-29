import { Circle, Trash } from "phosphor-react";
import styles from './Task.module.css';

export function Task() {
  return (
    <div>
      <div className={styles.task}>
        <Circle />
        
        <Trash />
      </div>
      <div className={styles.task}>
        <Circle />
        
        <Trash />
      </div>
      <div className={styles.task}>
        <Circle />
        
        <Trash />
      </div>
    </div>
  )
}
