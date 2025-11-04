import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './componentes/Sidebar';
import { Rutas } from './rutas/rutas';
import { Footer } from './componentes/Footer';
import { ScrollAlInicio } from './componentes/ScrollAlInicio';
import { Light, Dark } from './estilos/Estilos';
import { ThemeProvider, styled } from 'styled-components';

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const estiloTheme = theme === 'light' ? Light : Dark;
  const cambiarTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const toggleSidebar = () => setSidebarAbierto(!sidebarAbierto);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={estiloTheme}>
          <BrowserRouter>
            {/* Scroll al inicio de la página cada vez que se navega a una nueva página */}
            <ScrollAlInicio />
            <Overlay sidebarAbierto={sidebarAbierto} onClick={toggleSidebar} />
            <Contenedor sidebarAbierto={sidebarAbierto}>
              <Sidebar
                sidebarAbierto={sidebarAbierto}
                toggleSidebar={toggleSidebar}
                cambiarTheme={cambiarTheme}
                theme={theme}
              />
              <Main>
                <Rutas />
              </Main>
              <Footer />
            </Contenedor>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Overlay = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'sidebarAbierto',
})`
  display: ${({ sidebarAbierto }) => (sidebarAbierto ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.3s ease;

  @media (min-width: 500px) {
    left: 80px;
    width: calc(100% - 80px);
  }
`;

const Contenedor = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'sidebarAbierto',
})`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  background-image: ${({ theme }) => theme.backgroundImage || 'none'};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  margin-left: 80px;
  width: calc(100% - 80px);

  @media (max-width: 499px) {
    margin-left: 70px;
    width: calc(100% - 70px);
    padding: clamp(1rem, 3vw, 1.5rem);
    padding-right: clamp(1rem, 2vw, 1.2rem);
    padding-left: clamp(1rem, 2vw, 1.2rem);
  }

  @media (max-width: 399px) {
    margin-left: 60px;
    width: calc(100% - 60px);
    padding: clamp(0.8rem, 2vw, 1rem);
    padding-right: clamp(0.8rem, 1.5vw, 1rem);
    padding-left: clamp(0.8rem, 1.5vw, 1rem);
  }
`;

const Main = styled.main`
  transition: all 0.3s ease;
  width: 100%;
  max-width: 1000px;
  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  flex-shrink: 0;

  @media (max-width: 499px) {
    padding: 0;
  }
`;

export default App;
