
import { useRef } from 'react'
import './App.css'

function App() {
  const ref = useRef(0)

  function handleRef(){
    ref.current = ref.current + 1;
    alert("Ref:" + ref.current)
  }



return(
  <>
  <h1>Exemplo contador useRef</h1>
  <button onClick={handleRef}>Adicionar</button>
  <h3>Contador usando useRef: Count <span>{ref.current}</span></h3>
  </>
)




}

export default App
