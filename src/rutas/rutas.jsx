import { Routes, Route } from "react-router-dom";
import { Inicio } from "../secciones/Inicio";
import { Nosotros } from "../secciones/Nosotros";
import { Bitacora } from "../secciones/Bitacora";
import { Licha } from "../secciones/Licha";
import { Lu } from "../secciones/Lu";
import { Mila } from "../secciones/Mila";
import { Pablo } from "../secciones/Pablo";
import { Tincho } from "../secciones/Tincho";
import { Pintores } from "../secciones/Pintores";
import MetGallery from "../secciones/Galeria";

export const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/licha" element={<Licha/>}/>    
            <Route path="/lu" element={<Lu/>}/>    
            <Route path="/mila" element={<Mila/>}/>    
            <Route path="/pablo" element={<Pablo/>}/>    
            <Route path="/tincho" element={<Tincho/>}/>  
            <Route path="/galeria" element={<MetGallery/>}/>
            <Route path="/bitacora" element={<Bitacora/>}/>
            <Route path="/pintores" element={<Pintores/>}/>  
        </Routes>
    )
}