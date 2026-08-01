# Documento de Requisitos

## Introducción

Transformación de la sección de webinar en la landing page de Konsent. El webinar sobre la Ley 21.719 ya se realizó con éxito y la sección debe pasar de promover el registro a mostrar un mensaje de agradecimiento, métricas de éxito y un texto comercial sobre cómo Konsent apoya a las PYMEs en el cumplimiento de la ley de protección de datos personales.

## Glosario

- **WebinarSection**: Componente React (`src/components/sections/WebinarSection.tsx`) que muestra la sección de webinar en la landing page.
- **Ley_21719**: Ley chilena de protección de datos personales (Ley N° 21.719) cuya vigencia plena es en diciembre de 2026.
- **PYME**: Pequeña y mediana empresa.
- **Landing_Page**: Página principal del sitio web de Konsent (`src/pages/index.tsx`).
- **Paleta_Corporativa**: Colores definidos en el sistema de diseño de Konsent — verde marca (#169d75), azul navy (#262c64), gris grafito (#5f636f), fondo claro (#F0FAF6).
- **Metrics_Display**: Bloque visual que presenta cifras destacadas del webinar (asistentes, satisfacción, etc.).

## Requisitos

### Requisito 1: Transformar sección de registro a post-evento

**Historia de Usuario:** Como visitante del sitio, quiero ver un mensaje de agradecimiento y celebración del webinar realizado, para entender que Konsent es una empresa activa y comprometida con la comunidad.

#### Criterios de Aceptación

1. WHEN la Landing_Page se carga, THE WebinarSection SHALL mostrar un badge con texto "Webinar realizado" en lugar del badge "Webinar en vivo"
2. WHEN la Landing_Page se carga, THE WebinarSection SHALL mostrar un título de agradecimiento a los participantes del webinar
3. WHEN la Landing_Page se carga, THE WebinarSection SHALL mostrar un párrafo celebratorio con tono comercial sobre el éxito del evento

### Requisito 2: Mostrar métricas de éxito del webinar

**Historia de Usuario:** Como visitante del sitio, quiero ver datos concretos sobre el éxito del webinar, para percibir a Konsent como una empresa con tracción y credibilidad.

#### Criterios de Aceptación

1. WHEN la Landing_Page se carga, THE Metrics_Display SHALL presentar al menos dos métricas numéricas destacadas del webinar (por ejemplo: número de asistentes, nivel de satisfacción)
2. WHEN la Landing_Page se carga, THE Metrics_Display SHALL presentar cada métrica con un valor numérico visible y una etiqueta descriptiva
3. WHEN la Landing_Page se visualiza en pantallas menores a 768px, THE Metrics_Display SHALL adaptarse a un diseño apilado verticalmente manteniendo legibilidad

### Requisito 3: Mensaje comercial sobre apoyo a PYMEs

**Historia de Usuario:** Como visitante del sitio, quiero leer cómo Konsent está ayudando a PYMEs a cumplir con la Ley 21.719, para evaluar si la plataforma es relevante para mi empresa.

#### Criterios de Aceptación

1. WHEN la Landing_Page se carga, THE WebinarSection SHALL incluir un texto comercial que destaque el compromiso de Konsent con las PYMEs en el cumplimiento de la Ley_21719
2. WHEN la Landing_Page se carga, THE WebinarSection SHALL comunicar la propuesta de valor de Konsent como facilitador del cumplimiento normativo para PYMEs

### Requisito 4: Eliminar funcionalidad de registro al webinar

**Historia de Usuario:** Como propietario del sitio, quiero que se eliminen los enlaces y botones de registro al webinar, para evitar confusión en los visitantes sobre un evento que ya pasó.

#### Criterios de Aceptación

1. THE WebinarSection SHALL eliminar el botón "Regístrate gratis" y cualquier enlace a la URL del webinar (https://app.konsent.cl/webinar)
2. THE WebinarSection SHALL eliminar el enlace del banner de imagen hacia la URL de registro
3. THE WebinarSection SHALL no contener elementos interactivos que dirijan al usuario a una página de registro de webinar
4. WHEN se revisa el código fuente del componente, THE WebinarSection SHALL no importar ni referenciar la constante WEBINAR_URL

### Requisito 5: Consistencia visual con el resto de la landing page

**Historia de Usuario:** Como visitante del sitio, quiero que la sección post-webinar se integre visualmente con el resto de la página, para percibir una experiencia de marca coherente.

#### Criterios de Aceptación

1. THE WebinarSection SHALL utilizar la Paleta_Corporativa definida (verde #169d75, navy #262c64, gris #5f636f, fondo #F0FAF6)
2. THE WebinarSection SHALL mantener la tipografía Inter con los mismos pesos utilizados en las demás secciones (font-semibold para títulos, texto regular para párrafos)
3. THE WebinarSection SHALL mantener la estructura de contenedor con padding y márgenes consistentes con las demás secciones de la Landing_Page
4. THE WebinarSection SHALL conservar bordes redondeados y sombras acorde al estilo visual existente (rounded-2xl, shadow)
