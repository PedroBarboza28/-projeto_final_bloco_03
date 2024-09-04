import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./components/home/Home"
import FormCategoria from "./components/categorias/formcategorias/FormCategorias"
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategorias"
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias"

function App() {
 
  return (

    <>
    
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias/" element={<ListarCategorias />} />
              <Route path="/cadastrar/" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App