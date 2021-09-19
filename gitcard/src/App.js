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

export default App;
