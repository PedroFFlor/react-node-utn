import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Ofertas from './pages/Ofertas';
import Carpeta from './pages/Carpeta';
import Condiciones from './pages/Condiciones';
import Mapa from './pages/Mapa';
import Panel from './pages/Panel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Ofertas" element={<Ofertas />} />
        <Route path="/Carpeta" element={<Carpeta />} />
        <Route path="/Condiciones" element={<Condiciones />} />
        <Route path="/Mapa" element={<Mapa />} />
        <Route path="/Panel" element={<Panel />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
