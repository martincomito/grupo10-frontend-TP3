import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Sidebar = ({ sidebarAbierto, toggleSidebar, cambiarTheme, theme }) => {
  return (
    <SidebarStyled sidebarAbierto={sidebarAbierto}>
      <Logo onClick={() => (window.location.href = '/')} style={{ cursor: 'pointer' }}>
        <LogoImagen src="/museo.ico" alt="Museo Grupazo" />
        {sidebarAbierto && <LogoTexto>Museo Grupazo</LogoTexto>}
      </Logo>
      <Menu>
        <MenuItem sidebarAbierto={sidebarAbierto}>
          <NavLink to="/">🏠 {sidebarAbierto && 'Inicio'}</NavLink>
        </MenuItem>
        <MenuItem sidebarAbierto={sidebarAbierto}>
          <NavLink to="/bitacora">📖 {sidebarAbierto && 'Bitácora'}</NavLink>
        </MenuItem>
        <MenuItem sidebarAbierto={sidebarAbierto}>
          <NavLink to="/nosotros">👥 {sidebarAbierto && 'Nosotros'}</NavLink>
        </MenuItem>
        <MenuItem sidebarAbierto={sidebarAbierto}>
          <NavLink to="/pintores">🖌️ {sidebarAbierto && 'Pintores'}</NavLink>
        </MenuItem>
        <MenuItem sidebarAbierto={sidebarAbierto}>
          <NavLink to="/galeria">🖼️ {sidebarAbierto && 'Galería'}</NavLink>
        </MenuItem>
      </Menu>

      <BottomSection>
        <Button onClick={toggleSidebar}>{sidebarAbierto ? '⬅️' : '➡️'}</Button>
        <Button onClick={cambiarTheme}>{theme === 'light' ? '🌙' : '☀️'}</Button>
      </BottomSection>
    </SidebarStyled>
  );
};

// Estilos
const SidebarStyled = styled.aside.withConfig({
  shouldForwardProp: prop => prop !== 'sidebarAbierto',
})`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${({ sidebarAbierto }) => (sidebarAbierto ? '250px' : '80px')};
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.border};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;

  @media (min-width: 500px) {
    z-index: ${({ sidebarAbierto }) => (sidebarAbierto ? '1001' : '1000')};
  }

  @media (max-width: 499px) {
    width: ${({ sidebarAbierto }) => (sidebarAbierto ? '220px' : '70px')};
  }

  @media (max-width: 399px) {
    width: ${({ sidebarAbierto }) => (sidebarAbierto ? '180px' : '60px')};
  }
`;

const Logo = styled.h2`
  text-align: center;
  margin: 1.5rem 0;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.accent};
  }
`;

const LogoImagen = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
`;

const LogoTexto = styled.span`
  white-space: nowrap;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li.withConfig({
  shouldForwardProp: prop => prop !== 'sidebarAbierto',
})`
  margin: 1rem 0;
  text-align: ${({ sidebarAbierto }) => (sidebarAbierto ? 'left' : 'center')};
  padding-left: ${({ sidebarAbierto }) => (sidebarAbierto ? '1.5rem' : '0')};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
    padding: 0.5rem 0;
    border-radius: 6px;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.accent};
      transform: translateX(5px);
      padding-left: 0.5rem;
    }

    &.active {
      color: ${({ theme }) => theme.accent};
      font-weight: 600;
    }
  }

  @media (max-width: 799px) {
    margin: clamp(0.6rem, 2vh, 0.8rem) 0;
    padding-left: ${({ sidebarAbierto }) => (sidebarAbierto ? '1rem' : '0')};
  }

  @media (max-width: 399px) {
    margin: clamp(0.4rem, 1.5vh, 0.6rem) 0;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.9rem;
  font-weight: 500;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.accent};
  }

  &:active {
    transform: translateY(-1px) scale(1);
  }

  @media (max-width: 799px) {
    padding: clamp(0.5rem, 2vw, 0.6rem) clamp(0.8rem, 3vw, 1rem);
    font-size: clamp(0.7rem, 2.5vw, 0.8rem);
  }

  @media (max-width: 399px) {
    padding: clamp(0.4rem, 1.5vw, 0.5rem) clamp(0.6rem, 2vw, 0.8rem);
    font-size: clamp(0.6rem, 2vw, 0.7rem);
  }
`;
