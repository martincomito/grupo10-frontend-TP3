import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1rem;
  animation: ${fadeInUp} 0.6s ease-out;

  img {
    border: 15px solid ${({ theme }) => theme.accent};
    border-radius: 8px;
    margin: 0 0 1rem 0;
    max-width: 100%;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h3 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.accent};
    transition: color 0.3s ease;
  }

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.accent};

    img {
      transform: scale(1.05);
      border-color: ${({ theme }) => theme.accent};
    }
  }

  @media (max-width: 799px) {
    margin: clamp(1rem, 3vh, 1.5rem) auto;
    max-width: clamp(300px, 80vw, 350px);
    padding: clamp(0.6rem, 2vw, 0.8rem);
  }

  @media (max-width: 399px) {
    margin: clamp(0.8rem, 2vh, 1rem) auto;
    max-width: clamp(250px, 85vw, 300px);
    padding: clamp(0.5rem, 1.5vw, 0.6rem);
  }
`;

const ItemHabilidad = styled.li`
  margin: 0.8rem 0;
`;

const NombreHabilidad = styled.span`
  display: block;
  margin-bottom: 0.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColor};
`;

const ContenedorBarraProgreso = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;
`;

const RellenoBarraProgreso = styled.div`
  height: 100%;
  width: ${({ value }) => `${Math.min(Math.max(value, 0), 100)}%`};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.accent}dd
  );
  border-radius: 10px;
  transition: width 0.6s ease-out;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ValorProgreso = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.body};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const BotonVolver = styled(Link)`
  display: block;
  margin: 1.5rem auto 0 auto;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.accent};
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 799px) {
    margin: clamp(0.8rem, 2vh, 1rem) auto 0 auto;
    padding: clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.6rem, 2vw, 0.8rem);
  }

  @media (max-width: 399px) {
    margin: clamp(0.6rem, 1.5vh, 0.8rem) auto 0 auto;
    padding: clamp(0.2rem, 1vw, 0.3rem) clamp(0.4rem, 1.5vw, 0.6rem);
  }
`;

const IconoSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
`;

const LinkIconoSocial = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${({ theme }) => theme.fontColor};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-5px) scale(1.15);
    svg {
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    }
  }

  &.instagram:hover {
    color: #e4405f;
    background-color: rgba(228, 64, 95, 0.1);
  }

  &.linkedin:hover {
    color: #0077b5;
    background-color: rgba(0, 119, 181, 0.1);
  }

  &.github:hover {
    color: #181717;
    background-color: rgba(24, 23, 23, 0.1);
  }

  @media (max-width: 799px) {
    width: 36px;
    height: 36px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 399px) {
    width: 32px;
    height: 32px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const Tarjeta = ({ ...data }) => (
  <Card>
    <img src={data.imagen} alt={data.nombre} />
    <h2>🎨 {data.nombre}</h2>
    <IconoSocialContainer>
      <LinkIconoSocial
        href="https://instagram.com/ejemplo"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
        aria-label="Instagram"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </LinkIconoSocial>
      <LinkIconoSocial
        href="https://linkedin.com/in/ejemplo"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
        aria-label="LinkedIn"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </LinkIconoSocial>
      <LinkIconoSocial
        href="https://github.com/ejemplo"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
        aria-label="GitHub"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </LinkIconoSocial>
    </IconoSocialContainer>
    <p>📍 {data.ubicacion}</p>
    <p>🎂 {data.edad}</p>
    <h3>🎯 Habilidades</h3>
    <ul>
      {data.habilidades.map((h, i) => {
        // Support both old format (string) and new format (object with nombre and valor)
        const habilidad = typeof h === 'string' ? { nombre: h, valor: 50 } : h;
        const valor = Math.min(Math.max(habilidad.valor || 0, 0), 100);

        return (
          <ItemHabilidad key={i}>
            <NombreHabilidad>{habilidad.nombre || h}</NombreHabilidad>
            <ContenedorBarraProgreso>
              <RellenoBarraProgreso value={valor}>
                {valor >= 15 && <ValorProgreso>{valor}%</ValorProgreso>}
              </RellenoBarraProgreso>
            </ContenedorBarraProgreso>
            {valor < 15 && (
              <ValorProgreso style={{ marginLeft: '8px', color: 'inherit' }}>
                {valor}%
              </ValorProgreso>
            )}
          </ItemHabilidad>
        );
      })}
    </ul>
    <h3>🎬 Películas favoritas</h3>
    <ul>
      {data.peliculas.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
    <h3>🎵 Música favorita</h3>
    <ul>
      {data.musica.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
    <BotonVolver to="/nosotros">Volver a Nosotros</BotonVolver>
  </Card>
);
