import { Tarjeta } from '../componentes/Card';

export const Lu = () => (
  <Tarjeta
    nombre="Lu"
    imagen="/imagenes/lu.png"
    ubicacion="CABA, Argentina"
    edad="34 años"
    habilidades={[
      { nombre: 'Cantar conciertos en la ducha', valor: 95 },
      { nombre: 'Hacer el Moonwalk', valor: 80 },
      { nombre: 'Aumentar la entropía del Universo', valor: 100 },
      { nombre: 'Uso de micropipeta automática', valor: 70 },
    ]}
    peliculas={['Orgullo y Prejuicio', 'Diario de una Pasión', 'Jurassic Park']}
    musica={['Radiohead', 'Frank Sinatra', 'Luis Miguel']}
  />
);
