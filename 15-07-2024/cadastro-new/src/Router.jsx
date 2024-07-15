import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import CadNew from './pages/CadNew'
import Header from "./Components/Header";
import Sobre from "./pages/Sobre";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastro' element={<CadNew />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;