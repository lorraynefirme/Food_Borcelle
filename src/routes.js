import PaginaPadrao from './components/PaginaPadrao'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cateogira from './pages/Categoria'
import Carrinho from './pages/Carrinho'


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path='/' element={<PaginaPadrao />}>
                <Route index element={<Home />}/>
                <Route path='/categoria/:nomeCategoria' element={<Cateogira />}/>
                <Route path='/carrinho' element={<Carrinho />}/>
            </Route>
        </Routes>   
    </BrowserRouter>
  )
}
