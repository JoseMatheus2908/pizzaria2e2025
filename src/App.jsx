import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

const Formulario = ()=>{
  return (
    <div>
      <input
      className="Nome"
      onChange={(e)=>{setNome(e.target.value)}}
      type="text" />

      <button
        className="botao"
        onClick={()=>{alert(nome)}}
      >
        Enviar
      </button>
    </div>    
  )
}


  return(
    <div>
      <h3>Pizzaria 2E Let's Go!!!</h3>

      <Formulario />
      <Formulario />
      <Formulario />
      <Formulario />

    </div>
  )
}

export default App