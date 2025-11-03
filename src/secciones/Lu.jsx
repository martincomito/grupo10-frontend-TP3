import { Tarjeta } from '../componentes/Card';

export const Lu = () => (
  <Tarjeta
    nombre="Lu"
    imagen="/imagenes/lu.png"
    ubicacion="CABA, Argentina"
    edad="34 años"
    habilidades={[
      "Cantar conciertos en la ducha",
      "Hacer el Moonwalk",
      "Aumentar la entropía del Universo",
      "Uso de micropipeta automática"
    ]}
    peliculas={[
      "Orgullo y Prejuicio",
      "Diario de una Pasión",
      "Jurassic Park"
    ]}
    musica={[
      "Radiohead",
      "Frank Sinatra",
      "Luis Miguel"
    ]}
  />
);