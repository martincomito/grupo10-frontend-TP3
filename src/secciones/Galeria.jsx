import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 0.5rem;

  @media (max-width: 799px) {
    padding: 1.5rem 0.8rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 399px) {
    padding: 1rem 0.6rem;
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: ${({ theme }) => theme.accent};
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  p {
    margin: 0.25rem 0;
    font-size: 0.9rem;
  }

  @media (max-width: 799px) {
    padding: 0.8rem;
  }

  @media (max-width: 399px) {
    padding: 0.6rem;
  }
`;

const Titulo = styled.h1`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem 2rem;
  background-color: ${({ theme }) =>
    theme.body === "#f8f6f0"
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(0, 0, 0, 0.6)"};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 799px) {
    font-size: 1.5rem;
    padding: 0.8rem 1.5rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 399px) {
    font-size: 1.2rem;
    padding: 0.6rem 1rem;
    margin: 1rem 0;
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
  transition: all 0.3s ease;
  text-align: center;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const MetGallery = () => {
  const [pinturas, setPinturas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const idsPinturas = [438815, 438011, 437432, 438014, 437430];

  useEffect(() => {
    const traerDatos = async () => {
      try {
        setCargando(true);
        setError(null);

        // Hacer requests individuales para cada ID de pintura
        const resultados = await Promise.all(
          idsPinturas.map(async (id) => {
            const respuesta = await axios.get(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            );
            return respuesta.data;
          })
        );

        // Actualizar estado directamente
        setPinturas(resultados);
        setCargando(false);
      } catch (e) {
        console.error("Error cargando pinturas:", e);
        setError("Error al cargar las pinturas");
        setCargando(false);
      }
    };

    traerDatos();
  }, []);

  return (
    <div>
      <Titulo>Obras del pintor August Renoir</Titulo>
      {cargando && (
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            color: "black",
            fontSize: "2rem",
          }}
        >
          <p>Cargando pinturas...</p>
        </div>
      )}

      {error && (
        <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          <p>{error}</p>
        </div>
      )}

      {!cargando && !error && pinturas.length > 0 && (
        <Gallery>
          {pinturas.map((art) => (
            <Card key={art.objectID}>
              <img
                src={art.primaryImageSmall || art.primaryImage || ""}
                alt={art.title || "Obra del MET"}
              />
              <h3>{art.title || "Sin título"}</h3>
              <p>
                <strong>Artista:</strong>{" "}
                {art.artistDisplayName || "Desconocido"}
              </p>
              <p>
                <strong>Año:</strong> {art.objectDate || "Sin fecha"}
              </p>
            </Card>
          ))}
        </Gallery>
      )}

      {!cargando && !error && pinturas.length === 0 && (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>No se encontraron pinturas</p>
        </div>
      )}

      <BotonVolver to="/">⬅️ Volver al Inicio</BotonVolver>
    </div>
  );
};

export default MetGallery;
