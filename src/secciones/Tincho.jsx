import { Tarjeta } from '../componentes/Card';

export const Tincho = () => (
  <Tarjeta
    nombre="Tincho"
    imagen="/imagenes/tincho.png"
    ubicacion="La Plata, Buenos Aires"
    edad="36 años"
    habilidades={[
      { nombre: 'Programación', valor: 88 },
      { nombre: 'Hacer malabares con tres pelotas', valor: 60 },
      { nombre: 'Tocar instrumentos', valor: 78 },
      { nombre: 'Saltar de aviones sin paracaídas (demostrable solo una vez)', valor: 100 },
    ]}
    peliculas={['El Jockey', 'Fantastic Planet', 'Mulholland Drive']}
    musica={['Daft Punk', 'Dillom', 'Tame Impala']}
  />
);
