import styles from './Tasksquare.module.css';

export function Tasksquare() {
  return (
    <div>
      <div className={styles.info}>


        <div className={styles.taskcreated}>
         <p>Taferas Criadas </p>
          <div> 5 </div>
        </div>
         
      
        <div className={styles.done}>
         <p>Concluidas</p>
          <div> 2 de 5 </div>
        </div>

      </div>
    </div>
  )
}

