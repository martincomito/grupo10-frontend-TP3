import { Tarjeta } from '../componentes/Card';

export const Licha = () => (
  <Tarjeta
    nombre="Licha"
    imagen="/imagenes/licha.png"
    ubicacion="Avellaneda, Buenos Aires"
    edad="26 años"
    habilidades={[
      { nombre: 'Programación', valor: 85 },
      { nombre: 'Armado y reparación de hardware de PC', valor: 90 },
      { nombre: 'Edición de video', valor: 75 },
      { nombre: 'Acariciador profesional de gatutus ad honorem', valor: 100 },
    ]}
    peliculas={[
      'Parasite',
      '5 Centímetros por Segundo',
      'La Gran Estafa (Trilogía)',
      'Nueve Reinas',
      'Puente a Terabithia',
    ]}
    musica={['Muse', 'The Beatles', 'Oasis']}
  />
);
