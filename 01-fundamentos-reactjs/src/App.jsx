import { Post } from "./Post"

function App() {
  return (
    <>
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
