import { Routes, Route, useLocation } from 'react-router-dom';
import { Inicio } from '../secciones/Inicio';
import { Nosotros } from '../secciones/Nosotros';
import { Bitacora } from '../secciones/Bitacora';
import { Licha } from '../secciones/Licha';
import { Lu } from '../secciones/Lu';
import { Mila } from '../secciones/Mila';
import { Pablo } from '../secciones/Pablo';
import { Tincho } from '../secciones/Tincho';
import { Pintores } from '../secciones/Pintores';
import MetGallery from '../secciones/Galeria';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContenedorRutasAnimado = styled.div`
  animation: ${fadeIn} 0.4s ease-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Rutas = () => {
  const location = useLocation();

  return (
    <ContenedorRutasAnimado key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/licha" element={<Licha />} />
        <Route path="/lu" element={<Lu />} />
        <Route path="/mila" element={<Mila />} />
        <Route path="/pablo" element={<Pablo />} />
        <Route path="/tincho" element={<Tincho />} />
        <Route path="/galeria" element={<MetGallery />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="/pintores" element={<Pintores />} />
      </Routes>
    </ContenedorRutasAnimado>
  );
};
