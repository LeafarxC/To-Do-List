import { Header } from './components/Header';
import styles from './App.module.css';
import { Contentbox } from './components/Contentbox';
import { Tasksquare } from './components/Tasksquare';

export function App() {

  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <Contentbox />
        <Tasksquare />
      </div>
    </div>
    
   
  )
}