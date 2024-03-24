import { Post } from "./Post"
import { Header } from "./components/Header"
import './styles.css'

function App() {
  return (
    <>
      <Header />
      <h1>Hello world</h1>
      <Post 
        author="Márcio Bezerra"
        content="conteúdo do autor Márcio"
      />

      <Post 
        author="Diego Fernandes"
        content="Conteúdo do autor Diego"
      />
    
    </>
  )
}
export default App
