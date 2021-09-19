import './App.css';
import Form from "./Components/Form"
import Conteiner from './Components/container';
import {useState} from "react"

function App() {

  const [lista,setLista]=useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Form lista={lista} setLista={setLista}/>
        {lista && <Conteiner lista={lista}/>}
      </header>
    </div>
  );
}

//1-Criado o formulário;
//2-Pegasse os dados e usa no use Effect;
//3-Devo atribuir os dados do formulário a algum state que ao ser mudado ativa
// o useEffect que tenta fazer o fetch do repo.
//4-Se der erro, devo atribuir o erro a algo que ativará o erro no form.
//5-jogar os dados fo fetch em um array e demonstralo em um conteiner com logo e nome.

export default App;
