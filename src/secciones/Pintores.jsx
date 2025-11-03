import datos from '../data/pintores.json';
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

const Container = styled.div`
  text-align: center;
  padding: 2rem 1rem;

  @media (max-width: 799px) {
    padding: 1.5rem 0.8rem;
  }

  @media (max-width: 399px) {
    padding: 1rem 0.6rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Card = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'delay',
})`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${({ delay }) => delay || 0}s;
  animation-fill-mode: both;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.accent};
  }

  h3 {
    color: ${({ theme }) => theme.accent};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    margin: 0.5rem 0;
    line-height: 1.5;
  }

  @media (max-width: 799px) {
    padding: 1.2rem;
    h3 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 399px) {
    padding: 1rem;
    h3 {
      font-size: 1rem;
    }
  }
`;

const BotonVolver = styled(Link)`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  width: fit-content;
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
    margin: 0.8rem auto;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 399px) {
    margin: 0.6rem auto;
    padding: 0.3rem 0.6rem;
  }
`;

export const Pintores = () => (
  <Container>
    <h1>Pintores famosos</h1>
    <Grid>
      {datos.map((artista, i) => (
        <Card key={i} delay={i * 0.1}>
          <h3>🎨 {artista.Nombre}</h3>
          <p>
            <strong>Edad:</strong> {artista.Edad} años
          </p>
          <p>
            <strong>Obras famosas:</strong>
          </p>
          <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
            {artista.ObrasFamosas.map((obra, j) => (
              <li key={j}>{obra}</li>
            ))}
          </ul>
        </Card>
      ))}
    </Grid>
    <BotonVolver to="/">⬅️ Volver al Inicio</BotonVolver>
  </Container>
);
