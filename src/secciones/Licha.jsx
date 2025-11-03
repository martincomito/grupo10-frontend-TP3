import { Tarjeta } from '../componentes/Card';

export const Licha = () => (
  <Tarjeta
    nombre="Licha"
    imagen="/imagenes/licha.png"
    ubicacion="Avellaneda, Buenos Aires"
    edad="26 años"
    habilidades={[
      "Programación",
      "Armado y reparación de hardware de PC",
      "Edición de video",
      "Acariciador profesional de gatutus ad honorem"
    ]}
    peliculas={[
      "Parasite",
      "5 Centímetros por Segundo",
      "La Gran Estafa (Trilogía)",
      "Nueve Reinas",
      "Puente a Terabithia"
    ]}
    musica={[
      "Muse",
      "The Beatles",
      "Oasis"
    ]}
  />
);