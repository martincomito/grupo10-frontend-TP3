import styled from 'styled-components';
import { Light } from '../estilos/Estilos';
import { Link } from 'react-router-dom';

const BitacoraContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 799px) {
    padding: 1.5rem 0.8rem;
    max-width: 90%;
  }

  @media (max-width: 399px) {
    padding: 1rem 0.6rem;
    max-width: 95%;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.fontColor};
  text-shadow: ${({ theme }) => theme === Light ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none'};
`;

const Section = styled.section`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  border-left: 4px solid ${({ theme }) => theme.accent};
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: ${({ theme }) => theme.accent};
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 799px) {
    padding: 1.2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 399px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const TeamMember = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;

  h3 {
    color: ${({ theme }) => theme.accent};
    margin-top: 0;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.95rem;
  }

  @media (max-width: 799px) {
    padding: 0.8rem;
  }

  @media (max-width: 399px) {
    padding: 0.6rem;
  }
`;

const BotonVolver = styled(Link)`
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  transition: all 0.3s ease;
  text-align: center;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.body};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  @media (max-width: 799px) {
    margin: 0.8rem auto;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 399px) {
    margin: 0.6rem auto;
    padding: 0.3rem 0.6rem;
  }
`;

export const Bitacora = () => {
  return (
    <BitacoraContainer>
      <Title>Bitácora de Trabajo</Title>

      <Section>
        <h2>Descripción General</h2>
        <p>
          Este documento documenta el trabajo colaborativo del grupo 10 en el desarrollo 
          de una Single Page Application (SPA) en React. La aplicación es un museo virtual 
          dedicado a artistas famosos y obras de arte, incorporando datos locales (JSON) 
          y consumo de una API pública (Metropolitan Museum).
        </p>
      </Section>

      <Section>
        <h2>Equipo de Trabajo</h2>
        <TeamMember>
          <h3>Licha</h3>
          <p><strong>Rol:</strong> Desarrollo Frontend / Hardware</p>
          <p><strong>Contribuciones:</strong> Diseño de componentes, edición de video, integraciones</p>
        </TeamMember>
        <TeamMember>
          <h3>Lu</h3>
          <p><strong>Rol:</strong> Desarrollo Frontend</p>
          <p><strong>Contribuciones:</strong> Componentes de UI, testeo, correcciones</p>
        </TeamMember>
        <TeamMember>
          <h3>Mila</h3>
          <p><strong>Rol:</strong> Desarrollo Frontend / QA</p>
          <p><strong>Contribuciones:</strong> Debug, documentación, calidad del código</p>
        </TeamMember>
        <TeamMember>
          <h3>Pablo</h3>
          <p><strong>Rol:</strong> Lead Developer / Arquitectura</p>
          <p><strong>Contribuciones:</strong> Estructura del proyecto, rutas, integración de APIs</p>
        </TeamMember>
        <TeamMember>
          <h3>Tincho</h3>
          <p><strong>Rol:</strong> Desarrollo Full Stack</p>
          <p><strong>Contribuciones:</strong> Componentes, styling, optimizaciones</p>
        </TeamMember>
      </Section>

      <Section>
        <h2>Tecnologías Utilizadas</h2>
        <ul>
          <li><strong>React</strong> - Librería para construir la interfaz</li>
          <li><strong>React Router</strong> - Navegación entre secciones (SPA)</li>
          <li><strong>Styled Components</strong> - Estilos CSS-in-JS con temas</li>
          <li><strong>Axios</strong> - Cliente HTTP para consumir APIs</li>
          <li><strong>Vercel</strong> - Plataforma de deploy</li>
          <li><strong>GitHub</strong> - Control de versiones</li>
        </ul>
      </Section>

      <Section>
        <h2>Funcionalidades Implementadas</h2>
        <ul>
          <li>Página de inicio con presentación del grupo</li>
          <li>Sección "Nosotros" con tarjetas individuales de integrantes</li>
          <li>Sistema de tema claro/oscuro con toggle</li>
          <li>Sidebar collapsible con navegación</li>
          <li>Componentes reutilizables (Card, Tarjeta)</li>
          <li>Carga de datos desde archivo JSON local (Pintores)</li>
          <li>Consumo de API pública (Metropolitan Museum)</li>
          <li>Responsividad (móvil, tablet, desktop)</li>
          <li>Deploy en Vercel</li>
        </ul>
      </Section>

      <Section>
        <h2>Mejoras Implementadas Durante el Desarrollo</h2>
        <ul>
          <li>Rediseño del sidebar con mejor UX en dispositivos móviles</li>
          <li>Limpieza de CSS global - fondo de página correcto</li>
          <li>Galería con estado de carga y manejo de errores</li>
          <li>Iconos en menú para mejor identificación visual</li>
          <li>Sistema de colores consistente (#00bfff primario)</li>
          <li>Mejor accesibilidad con aria-labels</li>
          <li>Optimización de media queries para responsive</li>
        </ul>
      </Section>

      <Section>
        <h2>Puntos de Quiebre Responsive</h2>
        <ul>
          <li><strong>Desktop:</strong> 1024px y mayores - Layout completo</li>
          <li><strong>Tablet:</strong> 768px a 1023px - Sidebar reducido, grid adaptado</li>
          <li><strong>Mobile:</strong> Menos de 768px - Sidebar colapsado, single column</li>
        </ul>
      </Section>

      <Section>
        <h2>Flujo de Trabajo y Commits</h2>
        <p>
          El equipo ha utilizado Git para versionado colaborativo, realizando commits 
          frecuentes y organizados que reflejan cada cambio significativo en el proyecto.
        </p>
        <ul>
          <li>Estructura organizada en ramas por features</li>
          <li>Commits descriptivos y atómicos</li>
          <li>Revisión de código entre integrantes</li>
          <li>Testing antes de merge a main</li>
        </ul>
      </Section>

      <Section>
        <h2>Desafíos Encontrados y Soluciones</h2>
        <div>
          <h3 style={{marginTop: 0}}>Problema: Fondo de imagen en todos los elementos</h3>
          <p>
            <strong>Solución:</strong> Mover el background solo a #root y al body, 
            no aplicarlo globalmente a todos los divs.
          </p>
        </div>
        <div>
          <h3>Problema: Sidebar deficiente en móvil</h3>
          <p>
            <strong>Solución:</strong> Implementar media queries específicas y cambiar 
            comportamiento del sidebar en pantallas pequeñas.
          </p>
        </div>
        <div>
          <h3>Problema: API requests excesivos</h3>
          <p>
            <strong>Solución:</strong> Optimizar la galería con lazy loading y 
            manejo de errores mejorado.
          </p>
        </div>
      </Section>

      <Section>
        <h2>Estructura del Proyecto</h2>
        <p>
          Consulta el diagrama de organización de carpetas en la documentación 
          para una visualización clara de la estructura del proyecto.
        </p>
        <ul>
          <li>/src/componentes - Componentes reutilizables</li>
          <li>/src/secciones - Páginas/secciones principales</li>
          <li>/src/rutas - Configuración de rutas</li>
          <li>/src/estilos - Temas y estilos globales</li>
          <li>/src/data - Archivos JSON locales</li>
        </ul>
      </Section>

      <Section>
        <h2>Aprendizajes Clave</h2>
        <ul>
          <li>Importancia de la modularización en React</li>
          <li>Manejo de estado global con Context API</li>
          <li>Consumo de APIs asincrónicas con try-catch</li>
          <li>Diseño responsive-first</li>
          <li>Styled-components para manejo dinámico de estilos</li>
          <li>Ventajas de trabajar en equipo con Git</li>
          <li>Testing y debugging en aplicaciones React</li>
        </ul>
      </Section>

      <Section>
        <h2>Mejoras Futuras Sugeridas</h2>
        <ul>
          <li>Implementar paginación en la galería del Met</li>
          <li>Agregar filtros por artista/período en datos JSON</li>
          <li>Crear formulario de contacto</li>
          <li>Integrar más APIs públicas (OMDb, OpenWeather, etc.)</li>
          <li>Agregar animaciones de entrada en componentes</li>
          <li>Implementar localStorage para preferencias de usuario</li>
          <li>Agregar PWA capabilities</li>
        </ul>
      </Section>

      <Section>
        <h2>Checklist de Requerimientos</h2>
        <ul>
          <li>Sidebar con logo y menú vertical</li>
          <li>Sección Portada (Inicio)</li>
          <li>Sección Bitácora</li>
          <li>Secciones individuales por integrante</li>
          <li>Datos desde archivo JSON (Pintores)</li>
          <li>Datos desde API pública (Galería Met)</li>
          <li>Árbol de renderizado documentado</li>
          <li>Diagrama de carpetas</li>
          <li>React Router implementado</li>
          <li>Responsividad (3 puntos de quiebre)</li>
          <li>Componentización adecuada</li>
          <li>Deploy en Vercel</li>
          <li>Repositorio en GitHub</li>
          <li>README.md actualizado</li>
        </ul>
      </Section>

      <BotonVolver to="/">⬅️ Volver al Inicio</BotonVolver>
    </BitacoraContainer>
  );
};