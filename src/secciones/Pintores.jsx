import datos from '../data/pintores.json';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { UIdeBuscadorFiltros, useBuscadorFiltros } from '../componentes/BuscadorFiltros';

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
  width: 100%;
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

  @media (max-width: 799px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 399px) {
    gap: 0.8rem;
  }
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

const ContadorResultados = styled.p`
  margin: 1rem 0;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;
  font-size: 1rem;
  opacity: 1;

  @media (max-width: 799px) {
    font-size: 0.9rem;
    margin: 0.8rem 0;
  }

  @media (max-width: 399px) {
    font-size: 0.85rem;
    margin: 0.6rem 0;
  }
`;

const MensajeSinResultados = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.fontColor};
  opacity: 1;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.body};
  border-radius: 8px;

  @media (max-width: 799px) {
    padding: 2rem 1rem;
    font-size: 1.1rem;
  }

  @media (max-width: 399px) {
    padding: 1.5rem 1rem;
    font-size: 1rem;
  }
`;

// Obtener períodos únicos (fuera del componente ya que datos es estático)
const periodosUnicos = [...new Set(datos.map(pintor => pintor.Período))].sort();

// Configuración de campos de búsqueda (constante fuera del componente)
const camposBusqueda = [
  'Nombre',
  'Edad',
  'Período',
  pintor => pintor.ObrasFamosas, // Función para buscar en array
];

// Configuración de filtros (constante fuera del componente)
const configuracionFiltros = [
  {
    id: 'edad',
    etiqueta: 'Rango de edad',
    opciones: [
      { valor: 'Todos', etiqueta: 'Todos' },
      { valor: '0-30', etiqueta: '0-30 años' },
      { valor: '31-50', etiqueta: '31-50 años' },
      { valor: '51-70', etiqueta: '51-70 años' },
      { valor: '71+', etiqueta: '71+ años' },
    ],
    valorPredeterminado: 'Todos',
    funciónFiltro: (pintor, valorFiltro) => {
      if (valorFiltro === 'Todos') return true;
      if (valorFiltro.includes('+')) {
        return pintor.Edad >= 71;
      }
      const [min, max] = valorFiltro.split('-').map(s => parseInt(s));
      return pintor.Edad >= min && pintor.Edad <= max;
    },
  },
  {
    id: 'periodo',
    etiqueta: 'Período',
    opciones: [
      { valor: 'Todos', etiqueta: 'Todos' },
      ...periodosUnicos.map(p => ({ valor: p, etiqueta: p })),
    ],
    valorPredeterminado: 'Todos',
    campo: 'Período',
  },
  {
    id: 'obras',
    etiqueta: 'Cantidad de obras',
    opciones: [
      { valor: 'Todas', etiqueta: 'Todas' },
      { valor: '1-2 obras', etiqueta: '1-2 obras' },
      { valor: '3-4 obras', etiqueta: '3-4 obras' },
      { valor: '5+ obras', etiqueta: '5+ obras' },
    ],
    valorPredeterminado: 'Todas',
    funciónFiltro: (pintor, valorFiltro) => {
      if (valorFiltro === 'Todas') return true;
      const cantidadObras = pintor.ObrasFamosas.length;
      if (valorFiltro === '1-2 obras') {
        return cantidadObras >= 1 && cantidadObras <= 2;
      }
      if (valorFiltro === '3-4 obras') {
        return cantidadObras >= 3 && cantidadObras <= 4;
      }
      if (valorFiltro === '5+ obras') {
        return cantidadObras >= 5;
      }
      return true;
    },
  },
];

export const Pintores = () => {
  // Usar el hook de búsqueda y filtrado
  const {
    datosFiltrados,
    textoBusqueda,
    setTextoBusqueda,
    filtros,
    actualizarFiltro,
    limpiarFiltros,
  } = useBuscadorFiltros(datos, camposBusqueda, configuracionFiltros);

  return (
    <Container>
      <h1>Pintores famosos</h1>

      <UIdeBuscadorFiltros
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
        filtros={filtros}
        actualizarFiltro={actualizarFiltro}
        limpiarFiltros={limpiarFiltros}
        configuracionFiltros={configuracionFiltros}
        datos={datos}
        placeholderBusqueda="Buscar por nombre, edad, período u obras..."
      />

      <ContadorResultados>
        Mostrando {datosFiltrados.length} de {datos.length} pintores
      </ContadorResultados>

      {datosFiltrados.length === 0 ? (
        <MensajeSinResultados>
          No se encontraron pintores que coincidan con los filtros seleccionados.
        </MensajeSinResultados>
      ) : (
        <Grid>
          {datosFiltrados.map((artista, i) => (
            <Card key={i} delay={i * 0.1}>
              <h3>🎨 {artista.Nombre}</h3>
              <p>
                <strong>Edad:</strong> {artista.Edad} años
              </p>
              <p>
                <strong>Período:</strong> {artista.Período}
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
      )}

      <BotonVolver to="/">⬅️ Volver al Inicio</BotonVolver>
    </Container>
  );
};
