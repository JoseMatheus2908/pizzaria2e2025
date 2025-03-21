import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  return(
    <div>
      <h3>Pizzaria 2E Let's Go!!!</h3>

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

export default App