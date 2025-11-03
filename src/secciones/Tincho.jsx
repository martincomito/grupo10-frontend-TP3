import { Tarjeta } from '../componentes/Card';

export const Tincho = () => (
  <Tarjeta
    nombre="Tincho"
    imagen="/imagenes/tincho.png"
    ubicacion="La Plata, Buenos Aires"
    edad="36 años"
    habilidades={[
      "Programación",
      "Hacer malabares con tres pelotas",
      "Tocar instrumentos",
      "Saltar de aviones sin paracaídas (demostrable solo una vez)"
    ]}
    peliculas={[
      "El Jockey",
      "Fantastic Planet",
      "Mulholland Drive"
    ]}
    musica={[
      "Daft Punk",
      "Dillom",
      "Tame Impala"
    ]}
  />
);