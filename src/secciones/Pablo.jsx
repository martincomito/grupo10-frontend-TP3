import { Tarjeta } from '../componentes/Card';

export const Pablo = () => (
  <Tarjeta
    nombre="Pablo"
    imagen="/imagenes/pablo.png"
    ubicacion="CABA, Argentina"
    edad="+40 años"
    habilidades={[
      { nombre: 'Programación (lenguajes varios)', valor: 90 },
      { nombre: 'Desarrollo de videojuegos', valor: 85 },
      { nombre: 'Cocina', valor: 70 },
      { nombre: 'Running', valor: 65 },
    ]}
    peliculas={['Blade Runner', 'Pulp Fiction', 'Nueve Reinas']}
    musica={['Metallica', "Guns N' Roses", 'Imagine Dragons']}
  />
);
