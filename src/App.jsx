import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./componentes/Sidebar";
import { Rutas } from "./rutas/rutas";
import { Footer } from "./componentes/Footer";
import { Light, Dark } from "./estilos/Estilos";
import { ThemeProvider, styled } from "styled-components";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const estiloTheme = theme === "light" ? Light : Dark;
  const cambiarTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const toggleSidebar = () => setSidebarAbierto(!sidebarAbierto);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={estiloTheme}>
          <BrowserRouter>
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

const Contenedor = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "sidebarAbierto",
})`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  margin-left: ${({ sidebarAbierto }) => (sidebarAbierto ? "250px" : "80px")};
  background-image: ${({ theme }) => theme.backgroundImage || "none"};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: margin-left 0.3s ease;

  @media (max-width: 799px) {
    margin-left: 0;
    padding: clamp(1rem, 3vw, 1.5rem);
  }

  @media (max-width: 399px) {
    padding: clamp(0.8rem, 2vw, 1rem);
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;

export default App;
