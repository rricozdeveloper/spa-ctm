# **SPA (Single Page Application)**  - Centro Tutorial Mompox  

## Descripción  

Este repositorio contiene el código fuente y la documentación necesaria para la creación de la Single Page Application (SPA) del Centro Tutorial de Mompox, perteneciente a la Universidad de Cartagena. La SPA tiene como objetivo proporcionar información relevante y recursos a la comunidad vinculada al Centro Tutorial de Mompox. Para acceder a estos recursos, los usuarios deben registrarse e iniciar sesión. Los visitantes podrán ver información acerca de las diferentes carreras ofrecidas por el CTM.  

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** **Sequelize**, **o las escogidas de acuerdo a la necesidad del proyecto.**
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera *Ingeniería de Software*, tales como:  
   - Análisis y Desarrollo de Software
   - Diseño Web
   - Arquitectura de Software
   - Estructuras de Datos
   - Bases de Datos I y II
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

Requisitos
Antes de comenzar con la configuración y ejecución de la SPA, asegúrese de tener instalados los siguientes requisitos:

Node.js: Descargar e instalar Node.js
Gestor de paquetes npm: Por lo general, se instala automáticamente con Node.js.

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

-  **Node**: 18.16.1 o mayor
-  **NPM**: 9.2.0 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

**Versiones usadas en este proyecto**

-  **react**: ^18.2.0
-  **react-dom**: 18.2.0
-  **redux**: 4.2.1
-  **react-redux**: 8.1.2
- **react-router-dom**: 6.16.0
- **tailwindcss**: 3.3.3


A continuación, se detalla brevemente cada una las tecnologías que se usarán para el proyecto: Teniendo en cuenta que la arquitectura que se implementará será :   

### Cliente - Servidor  

La arquitectura Cliente-Servidor es una de las arquitecturas más comunes en el desarrollo de aplicaciones web y sistemas distribuidos. En el contexto de la SPA (Single Page Application) del Centro Tutorial de Mompox, esta arquitectura puede aplicarse de la siguiente manera:

- Client (Frontend):

Utiliza tecnologías como React.js, Vite, Tailwind CSS y Redux para crear la interfaz de usuario y gestionar la lógica del usuario en el navegador web.
Se comunica con el servidor para obtener datos y recursos a través de solicitudes HTTP o WebSocket.
Almacena temporalmente datos y estado en el lado del cliente para una experiencia interactiva y receptiva.  

- Server (Backend):

Puede estar construido utilizando tecnologías como Node.js y Express.js, y puede utilizar una base de datos como MongoDB o PostgreSQL para almacenar datos.
Ofrece una API RESTful o GraphQL que permite al cliente realizar solicitudes para obtener información y recursos.
Gestiona la autenticación y autorización de usuarios, especialmente para las funcionalidades que requieren inicio de sesión.
Puede realizar operaciones de procesamiento de datos y lógica de negocio.

- Base de Datos:

Almacena datos estructurados, como información de usuarios, recursos educativos y publicaciones del Centro Tutorial de Mompox.
Puede utilizarse una base de datos relacional o NoSQL, dependiendo de los requisitos específicos de almacenamiento de datos.  

- Estructura de Datos:

Define cómo se organizan y almacenan los datos en la base de datos.
Puede incluir tablas, documentos, colecciones y relaciones que representan la información relevante para la comunidad del Centro Tutorial de Mompox.
Debe estar diseñada para ser eficiente en cuanto a la recuperación y manipulación de datos, teniendo en cuenta las necesidades de la aplicación.  

En esta arquitectura Cliente-Servidor, el cliente interactúa con el servidor mediante solicitudes y respuestas a través de HTTP o WebSocket. El servidor procesa estas solicitudes, accede a la base de datos según sea necesario y devuelve datos al cliente en un formato que pueda ser utilizado para actualizar la interfaz de usuario de la SPA.

## **📋 PARA COMENZAR...**

 1. Clona el repositorio en tu computadora para comenzar a trabajar. Este repositorio contiene un **`BoilerPlate`** con la estructura general del proyecto, tanto del servidor como del cliente. El boilerplate cuenta con dos carpetas: **`server`** y **`client`**. En estas carpetas estará el código del back-end y el front-end respectivamente.

 2. ✅ En la carpeta **`server`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

3. ✅ Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

4. ✅ Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`ctm`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.

<br />

## **📖 ENUNCIADO GENERAL**  

El propósito central de este proyecto es desarrollar una aplicación web destinada al Centro Tutorial de Mompox, con el objetivo de brindar a la comunidad del mismo y a los usuarios la capacidad de:

- **Explorar Ofertas Académicas**: Acceder a información detallada sobre las carreras académicas ofrecidas en el Centro Tutorial de Mompox, incluyendo descripciones, requisitos y programas de estudio.  

- **Visualizar Información Relevante**: Presentar de manera clara y accesible la información relevante sobre las carreras disponibles en el centro, facilitando la toma de decisiones educativas.  

- **Calendario de Eventos**: Ofrecer un calendario interactivo que muestre eventos y actividades programadas, permitiendo a los usuarios mantenerse actualizados sobre eventos académicos y sociales.

- **Explorar el Entorno**: Proporcionar una galería de imágenes que capturen la belleza y singularidad del Centro Tutorial de Mompox, permitiendo a los visitantes apreciar visualmente el campus y su entorno.

