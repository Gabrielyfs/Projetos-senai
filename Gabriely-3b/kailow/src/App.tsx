import './App.css'
import { Cards } from './components/cards'
import { Nav } from './components/navbar'
import style from "./components/navbar.module.css"



function App() {
 return (
  <div className={style.container}>
    <Nav />
    <Cards />
  </div>
 )
}

export default App