
import './App.css';
import Card from './components/Card';


function App() {
  return (
    <div className="App">

    <navbar>
      
    </navbar>
      <div className="containerda-loja">

        <Card nomeProduto={"computador"} precoProduto={"r$ 20,00"}/>
        <Card nomeProduto={"celular"} precoProduto={"r$ 2000,00"}/>
        <Card nomeProduto={"televisão"} precoProduto={"r$ 4000,00"}/>

      </div>
    </div>
  );
}

export default App;
