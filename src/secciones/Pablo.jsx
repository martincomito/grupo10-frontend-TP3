import { Tarjeta } from '../componentes/Card';

export const Pablo = () => (
  <Tarjeta
    nombre="Pablo"
    imagen="/imagenes/pablo.png"
    ubicacion="CABA, Argentina"
    edad="+40 años"
    habilidades={[
      "Programación (lenguajes varios)",
      "Desarrollo de videojuegos",
      "Cocina",
      "Running"
    ]}
    peliculas={[
      "Blade Runner",
      "Pulp Fiction",
      "Nueve Reinas"
    ]}
    musica={[
      "Metallica",
      "Guns N' Roses",
      "Imagine Dragons"
    ]}
  />
);