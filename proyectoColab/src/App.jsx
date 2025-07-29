// CSS
import './App.css'
// Importaciones de reac
import { Routes, Route } from 'react-router-dom'
// Páginas
import PaginaPublica from './Pages/Inicio/PaginaPublica'
import IniciarSesion from './Pages/InicioSesion/IniciarSesion'
import PanelAdmin from './Pages/Admin/PanelAdmin'
function App() {

  return (
    <Routes>
      <Route index element={<PaginaPublica />}/>
      <Route path='/ingresar' element={<IniciarSesion />}/>
      <Route path='/admin' element={<PanelAdmin />} />
    </Routes>
  )
}

export default App
