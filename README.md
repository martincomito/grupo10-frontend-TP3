# Museo Grupazo - Single Page Application

[Link](https://github.com/lucre-ph/reactG10) a la versión anterior del proyecto en GitHub con su README.

[Link al proyecto en Vercel](https://grupo10-frontend-tp-3.vercel.app/)

## 📁 Estructura del Proyecto luego de los últimos cambios

```
/
├── .gitignore
├── .prettierrc.json
├── eslint.config.js
├── index.html
├── museo.ico
├── package-lock.json
├── package.json
├── project-structure.txt
├── public
│   └── imagenes
│       ├── licha.png
│       ├── lu.png
│       ├── mila.png
│       ├── museo.jpg
│       ├── museodark.jpg
│       ├── pablo.png
│       └── tincho.png
├── README.md
├── src
│   ├── App.jsx
│   ├── componentes
│   │   ├── BuscadorFiltros.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx
│   ├── data
│   │   └── pintores.json
│   ├── diagramaHorizontal.png
│   ├── estilos
│   │   └── Estilos.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── rutas
│   │   └── rutas.jsx
│   └── secciones
│       ├── Bitacora.jsx
│       ├── Galeria.jsx
│       ├── Inicio.jsx
│       ├── Licha.jsx
│       ├── Lu.jsx
│       ├── Mila.jsx
│       ├── Nosotros.jsx
│       ├── Pablo.jsx
│       ├── Pintores.jsx
│       └── Tincho.jsx
├── vercel.json
└── vite.config.js

```

## Cambios implementados en esta entrega según requerimientos:

(links a videos en Google Drive)

### 1. Animaciones suaves utilizando CSS

Utilizando CSS puro, se agregaron animaciones y transiciones a páginas y elementos de la interfaz, haciendo la navegación mucho más atractiva.

#### Antes:

- [Animaciones](https://drive.google.com/file/d/1swiQSnwmaufszY_FrmzZVY29Rd8s39cr/view?usp=drive_link)
- [Transiciones](https://drive.google.com/file/d/1JWIKNZPeqlCNL6dg4k7qwkwtrsDjxYye/view?usp=drive_link)

#### Después:

- [Animaciones](https://drive.google.com/file/d/1aec-kq1Lrz6NQbex7uwGp8V7IrI8wZ2N/view?usp=drive_link)
- [Transiciones](https://drive.google.com/file/d/1_b4CoiIM43inTmt-R4YAmpAVWoK8eJYV/view?usp=drive_link)

### 2. Búsqueda/Filtrado en JSON local

Implementación de búsqueda y filtrado en los valores del archivo `pintores.json`, agregando el campo período a cada objeto para permitir el filtrado desde los dropdowns según nombre, edad, período y obras de los artistas.

- [Filtrado y búsqueda](https://drive.google.com/file/d/1PIW_q_7lBGqPGTt3J6_tgcBcpB2bmXNL/view?usp=drive_link)

### 3. Paginación de la API

Se implementó paginación del lado del cliente: primero se obtienen todos los IDs, luego se paginan de a 5 elementos. Los botones se deshabilitan en la primera y última página para evitar errores. La paginación se muestra solo cuando hay datos cargados y no hay errores.

- [Antes](https://drive.google.com/file/d/1x3xg6pMKSzqLCVJ853WloZDDM0wbG21v/view?usp=drive_link)

- [Después](https://drive.google.com/file/d/1du13JcB-FFx9AlD9jAt507_lvkB4F-1_/view?usp=drive_link)

### 4. Barras de progreso de habilidades en las Cards

Se agregaron barras de progreso a la card de cada integrante del equipo, en la cual el valor de cada habilidad depende del objeto que recibe el componente `Tarjeta` por medio de la prop `habilidades`

- [Antes](https://drive.google.com/file/d/1gDTw8A4mNGcvT2oGN8Gyhgjybj602AD4/view?usp=drive_link)

- [Después](https://drive.google.com/file/d/1XGr1qO-ZXM6whTktoypuXjNYVfiwkxHv/view?usp=drive_link)

### 5. Botones de Redes Sociales Animados

En la Card de cada integrante se declararon y animaron los elementos SVG de los íconos con transiciones y filtros para darles más interactividad.

- [Antes](https://drive.google.com/file/d/1gDTw8A4mNGcvT2oGN8Gyhgjybj602AD4/view?usp=drive_link)
- [Después](https://drive.google.com/file/d/1bk2Jz0YlHR_wkeOp6cuX7GVifTzbxp42/view?usp=drive_link)

## 🚀 Tecnologías Utilizadas

```json
{
  "frontend": ["React", "React Router", "Styled Components"],
  "http": "Axios",
  "deployment": "Vercel",
  "versionControl": "GitHub",
  "apis": ["Metropolitan Museum Collection API"]
}
```

⚙️ JavaScript / Funcionalidades Dinámicas

| Sección                       | Componente / Archivo                 | Funcionalidad                                           |
| ----------------------------- | ------------------------------------ | ------------------------------------------------------- |
| **Home**                      | `Home.jsx`                           | Renderiza introducción del museo y tarjetas principales |
| **Galería**                   | `Gallery.jsx`                        | Muestra obras obtenidas desde JSON o API externa        |
| **Detalle de Obra / Artista** | `CardIntegrante.jsx` / `Artista.jsx` | Render dinámico con props o datos del JSON              |
| **API Pública**               | `ApiMetMuseum.jsx`                   | Consumo de API del Met Museum usando **Axios**          |
| **Tema claro/oscuro**         | `ThemeContext.jsx` + `Botón de tema` | Alterna dinámicamente entre temas mediante Context      |
| **Sidebar y Navegación**      | `Sidebar.jsx`                        | Controla rutas, animaciones y estados de expansión      |
| **Responsividad**             | CSS + styled-components              | Cambia disposición según el tamaño de pantalla          |

## 📱 Responsividad

El proyecto implementa 3 puntos de quiebre:

| Mobile | < 400px |
| Tablet | 400px - 800px |
| Desktop | > 800px |

## 🔧 Instalación y Uso

### Requisitos previos

- Node.js (v14+)
- npm o yarn

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/[usuario]/museo-grupazo.git
cd museo-grupazo

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

## 🌐 Deploy

La aplicación está deployada en **Vercel** y es accesible públicamente en:

https://react-g10.vercel.app/

## 🤝 Equipo de Desarrollo

| Licha | Frontend / Hardware
| Lu | Frontend
| Mila | Frontend / QA |
| Pablo | Lead Developer |
| Tincho | Full Stack |

## 📝 Licencia

Este proyecto es parte de un trabajo académico. Todos los derechos reservados © 2025 Grupazo.
