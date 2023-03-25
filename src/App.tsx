import { Header } from './components/Header';
import styles from './App.module.css';
import { Contentbox } from './components/Contentbox';

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <Contentbox />
    </div>
       
    
  )
}