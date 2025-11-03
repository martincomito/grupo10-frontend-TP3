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
  margin: 2rem auto;
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

export const Tarjeta = ({ ...data }) => (
  <Card>
    <img src={data.imagen} alt={data.nombre} />
    <h2>🎨 {data.nombre}</h2>
    <p>📍 {data.ubicacion}</p>
    <p>🎂 {data.edad}</p>
    <h3>🎯 Habilidades</h3>
    <ul>
      {data.habilidades.map((h, i) => (
        <li key={i}>{h}</li>
      ))}
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
