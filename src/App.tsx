import { Header } from './components/Header';
import styles from './App.module.css';
import { Contentbox } from './components/Contentbox';
import { Tasksquare } from './components/Tasksquare';
import { Task } from './components/Task';

export function App() {

  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <Contentbox />
        <Tasksquare />
        <Task />
      </div>
    </div>
    
   
  )
}