import { Tarjeta } from '../componentes/Card';

export const Mila = () => (
  <Tarjeta
    nombre="Mila"
    imagen="/imagenes/mila.png"
    ubicacion="General Deheza, Córdoba"
    edad="27 años"
    habilidades={[
      { nombre: 'Redacción', valor: 88 },
      { nombre: 'Debug', valor: 82 },
      { nombre: 'Jugar al R.E.P.O', valor: 75 },
      { nombre: 'Reírse como un globo desinflándose', valor: 100 },
    ]}
    peliculas={['Sing', 'Rave', 'Malala']}
    musica={['Rock', 'Cumbia', 'Cuartetazo']}
  />
);
