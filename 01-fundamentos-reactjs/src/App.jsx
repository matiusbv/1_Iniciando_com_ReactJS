import { Post } from "./components/Post"
import { Header } from "./components/Header"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import './global.css'

function App() {
  return (
    <>
      <Header />
  <div className={styles.wrapper}>
    <Sidebar />
    <main>
    <Post 
        author="Márcio Bezerra"
        content="conteúdo do autor Márcio"
      />

      <Post 
        author="Diego Fernandes"
        content="Conteúdo do autor Diego"
      />
    </main>
  </div>
    
    </>
  )
}
export default App
