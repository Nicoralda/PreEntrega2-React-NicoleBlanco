import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <div className="app-container" >
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer greeting="¡Hola! Gracias por estar aquí" /> } />
          <Route path="/category/:idCategory" element={ <ItemListContainer greeting="¡Hola! Gracias por estar aquí" /> } />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

          <Route path="*" element={<div>Error: 404, la ruta no existe</div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
