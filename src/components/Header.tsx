import styles from './Header.module.css';
import todologofrom from '../assets/todologo.svg';


export function Header() {
  return (
    <header className={styles.header}>
        <img src={todologofrom} alt="Logotipo To-Do" />
    </header>
  )
}

export {}
