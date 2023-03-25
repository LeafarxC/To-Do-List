import styles from './Contentbox.module.css';

export function Contentbox() {
  return (
    <div>
      <form className={styles.commentForm}>
                <textarea
                    name= "comment"
                    placeholder='Adicione uma nova tarefa'
                    required
                />
                    <button type='submit'>
                      Criar
                    </button>
            </form>
    </div>

  )
}
