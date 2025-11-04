import { useState } from 'react';
import styled from 'styled-components';

const ContenedorFiltros = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 799px) {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  @media (max-width: 399px) {
    padding: 1rem;
    gap: 0.6rem;
  }
`;

const InputBusqueda = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  border: 2px solid ${({ theme }) => theme.inputBorder};
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
    opacity: 0.6;
  }

  @media (max-width: 799px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 399px) {
    padding: 0.5rem 0.6rem;
    font-size: 0.85rem;
  }
`;

const FiltrosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 799px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  @media (max-width: 399px) {
    gap: 0.6rem;
  }
`;

const SelectFiltro = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1);
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 799px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 399px) {
    padding: 0.5rem 0.6rem;
    font-size: 0.85rem;
  }
`;

const BotonLimpiar = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: fit-content;
  align-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.accent};
  }

  &:active {
    transform: translateY(0) scale(1);
  }

  @media (max-width: 799px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 399px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

/**
 * Hook personalizado para búsqueda y filtrado genérico
 * @param {Array} datos - Array de objetos a filtrar
 * @param {Array} camposBusqueda - Array de campos o funciones para buscar
 * @param {Array} configuracionFiltros - Configuración de filtros
 * @returns {Object} Objeto con datos filtrados, estados y funciones
 */
export const useBuscadorFiltros = (datos, camposBusqueda, configuracionFiltros) => {
  // Estados para búsqueda
  const [textoBusqueda, setTextoBusqueda] = useState('');

  // Estados para filtros (dinámicos según configuración)
  // Función para obtener estados iniciales (sin useMemo ya que es una operación simple)
  const obtenerEstadosIniciales = () => {
    const estados = {};
    configuracionFiltros.forEach(filtro => {
      estados[filtro.id] = filtro.valorPredeterminado || 'Todos';
    });
    return estados;
  };

  const [filtros, setFiltros] = useState(() => obtenerEstadosIniciales());

  // Función para actualizar un filtro específico
  const actualizarFiltro = (id, valor) => {
    setFiltros(prev => ({ ...prev, [id]: valor }));
  };

  // Función para limpiar todos los filtros
  const limpiarFiltros = () => {
    setTextoBusqueda('');
    setFiltros(obtenerEstadosIniciales());
  };

  // Función para buscar en un campo específico
  const buscarEnCampo = (item, campo) => {
    if (typeof campo === 'function') {
      // Si es una función, ejecutarla (útil para arrays o lógica compleja)
      const valor = campo(item);
      if (Array.isArray(valor)) {
        return valor.some(v => String(v).toLowerCase().includes(textoBusqueda.toLowerCase()));
      }
      return String(valor).toLowerCase().includes(textoBusqueda.toLowerCase());
    }

    // Si es un string, acceder a la propiedad directamente
    const valor = item[campo];
    if (Array.isArray(valor)) {
      return valor.some(v => String(v).toLowerCase().includes(textoBusqueda.toLowerCase()));
    }
    return String(valor).toLowerCase().includes(textoBusqueda.toLowerCase());
  };

  // Función para aplicar filtro personalizado
  const aplicarFiltro = (item, configFiltro) => {
    if (configFiltro.funciónFiltro) {
      // Si tiene función personalizada, usarla
      return configFiltro.funciónFiltro(item, filtros[configFiltro.id]);
    }

    // Filtro por defecto: comparación directa o por función campo
    const valorFiltro = filtros[configFiltro.id];
    if (valorFiltro === 'Todos' || valorFiltro === 'Todas' || valorFiltro === '') {
      return true;
    }

    if (typeof configFiltro.campo === 'function') {
      const valorItem = configFiltro.campo(item);
      return valorItem === valorFiltro;
    }

    return item[configFiltro.campo] === valorFiltro;
  };

  // Datos filtrados
  const datosFiltrados = datos.filter(item => {
    // Filtro por búsqueda de texto
    if (textoBusqueda) {
      const coincideTexto = camposBusqueda.some(campo => buscarEnCampo(item, campo));
      if (!coincideTexto) return false;
    }

    // Filtros por categorías
    const pasanTodosLosFiltros = configuracionFiltros.every(configFiltro =>
      aplicarFiltro(item, configFiltro)
    );

    return pasanTodosLosFiltros;
  });

  return {
    datosFiltrados,
    textoBusqueda,
    setTextoBusqueda,
    filtros,
    actualizarFiltro,
    limpiarFiltros,
  };
};

/**
 * Componente UI de búsqueda y filtrado (sin lógica, solo UI)
 * @param {Object} props
 * @param {string} props.textoBusqueda - Valor del input de búsqueda
 * @param {Function} props.setTextoBusqueda - Función para actualizar el texto de búsqueda
 * @param {Object} props.filtros - Objeto con los valores de los filtros
 * @param {Function} props.actualizarFiltro - Función para actualizar un filtro
 * @param {Function} props.limpiarFiltros - Función para limpiar todos los filtros
 * @param {Array} props.configuracionFiltros - Configuración de filtros
 * @param {Array} props.datos - Datos originales (para generar opciones dinámicas)
 * @param {string} props.placeholderBusqueda - Placeholder del input de búsqueda
 * @param {boolean} props.mostrarLimpiar - Si se muestra el botón limpiar (default: true)
 * @param {string} props.textoLimpiar - Texto del botón limpiar (default: "Limpiar filtros")
 */
export const UIdeBuscadorFiltros = ({
  textoBusqueda,
  setTextoBusqueda,
  filtros,
  actualizarFiltro,
  limpiarFiltros,
  configuracionFiltros,
  datos,
  placeholderBusqueda = 'Buscar...',
  mostrarLimpiar = true,
  textoLimpiar = 'Limpiar filtros',
}) => {
  // Generar opciones para cada filtro
  const obtenerOpciones = configFiltro => {
    if (typeof configFiltro.opciones === 'function') {
      return configFiltro.opciones(datos);
    }
    return configFiltro.opciones || [];
  };

  return (
    <ContenedorFiltros>
      <InputBusqueda
        type="text"
        placeholder={placeholderBusqueda}
        value={textoBusqueda}
        onChange={e => setTextoBusqueda(e.target.value)}
      />

      {configuracionFiltros.length > 0 && (
        <FiltrosGrid>
          {configuracionFiltros.map(configFiltro => {
            const opciones = obtenerOpciones(configFiltro);
            return (
              <div key={configFiltro.id}>
                <label
                  htmlFor={`filtro-${configFiltro.id}`}
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'inherit',
                    fontSize: '0.9rem',
                  }}
                >
                  {configFiltro.etiqueta}:
                </label>
                <SelectFiltro
                  id={`filtro-${configFiltro.id}`}
                  value={filtros[configFiltro.id]}
                  onChange={e => actualizarFiltro(configFiltro.id, e.target.value)}
                >
                  {opciones.map(opcion => {
                    const valor = typeof opcion === 'object' ? opcion.valor : opcion;
                    const etiqueta = typeof opcion === 'object' ? opcion.etiqueta : opcion;
                    return (
                      <option key={valor} value={valor}>
                        {etiqueta}
                      </option>
                    );
                  })}
                </SelectFiltro>
              </div>
            );
          })}
        </FiltrosGrid>
      )}

      {mostrarLimpiar && <BotonLimpiar onClick={limpiarFiltros}>{textoLimpiar}</BotonLimpiar>}
    </ContenedorFiltros>
  );
};

/**
 * Componente genérico de búsqueda y filtrado (con hook integrado)
 * @param {Object} props
 * @param {Array} props.datos - Array de objetos a filtrar
 * @param {Array} props.camposBusqueda - Array de campos o funciones para buscar
 * @param {Array} props.configuracionFiltros - Configuración de filtros
 * @param {string} props.placeholderBusqueda - Placeholder del input de búsqueda
 * @param {boolean} props.mostrarLimpiar - Si se muestra el botón limpiar (default: true)
 * @param {string} props.textoLimpiar - Texto del botón limpiar (default: "Limpiar filtros")
 * @param {Function} props.children - Función que recibe { datosFiltrados } como parámetro
 */
export const BuscadorFiltros = ({
  datos,
  camposBusqueda,
  configuracionFiltros,
  placeholderBusqueda = 'Buscar...',
  mostrarLimpiar = true,
  textoLimpiar = 'Limpiar filtros',
  children,
}) => {
  const {
    datosFiltrados,
    textoBusqueda,
    setTextoBusqueda,
    filtros,
    actualizarFiltro,
    limpiarFiltros,
  } = useBuscadorFiltros(datos, camposBusqueda, configuracionFiltros);

  return (
    <>
      <UIdeBuscadorFiltros
        textoBusqueda={textoBusqueda}
        setTextoBusqueda={setTextoBusqueda}
        filtros={filtros}
        actualizarFiltro={actualizarFiltro}
        limpiarFiltros={limpiarFiltros}
        configuracionFiltros={configuracionFiltros}
        datos={datos}
        placeholderBusqueda={placeholderBusqueda}
        mostrarLimpiar={mostrarLimpiar}
        textoLimpiar={textoLimpiar}
      />
      {children && children({ datosFiltrados })}
    </>
  );
};
