import { Tarjeta } from '../componentes/Card';

export const Mila = () => (
  <Tarjeta
    nombre="Mila"
    imagen="/imagenes/mila.png"
    ubicacion="General Deheza, Córdoba"
    edad="27 años"
    habilidades={[
      "Redacción",
      "Debug",
      "Jugar al R.E.P.O",
      "Reírse como un globo desinflándose"
    ]}
    peliculas={[
      "Sing",
      "Rave",
      "Malala"
    ]}
    musica={[
      "Rock",
      "Cumbia",
      "Cuartetazo"
    ]}
  />
);