import { useState } from "react"
import poke from './assets/pokeapi_256.png'
 
function App(){
 
  const [nome, setNome] = useState('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState('Santos FC')
  const [pi] = useState(3.14)
 
  //var idade = 18;
  //let time = 'Santos FC';
  //const pi = 3.14;
 
  const Formulario = (props) => {
    const [valor, setValor] = useState()
   
    return (
      <div>
        <input
          className = "nome"
          placeholder= {props.sombra}
          onChange={(e)=>{setValor(e.target.value)}}
          type="text" />
 
        <button
          className="botao"
          onClick={()=>{
            if(valor.length > 0){
              alert(valor);
            }
            else{
              alert(props.nome + ' idade é ' + props.idade);
            }
            }}      
        >
          CLIQUE AQUI
        </button>
      </div>
    )
  }
 
 
  return (
    <div>
      <h3>Pizzaria Lets's Goooooooo</h3>

      <img src={poke} style={{width:130}} />
 
      <Formulario nome="Matheus"
          idade={16}
          sombra="Digite nome..." />
      <Formulario nome="Matheus" sombra="Digite sua idade..."/>
      <Formulario nome="São Paulo FC" sombra="Digite seu time..." />
      <Formulario nome="3.14" sombra="valor de pi" />
      <Formulario/>
      <Formulario/>
      <Formulario/>
 
    </div>
  )
}
 
export default App
 