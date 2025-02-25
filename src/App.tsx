import './App.css'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListarCategorias from './components/categorias/ListaCategorias'
import FormCategoria from './components/categorias/FormCategoria'
import DeleteCategoria from './components/categorias/DeleteCategoria'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria/>} />
            <Route path="/deletarcategoria/:id" element={<DeleteCategoria />} />
            <Route path="/" element={<Home />} />
            
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
