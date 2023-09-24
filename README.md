# SPA Centro Tutorial Mompox  

## Descripción  

Este repositorio contiene el código fuente y la documentación necesaria para la creación de la Single Page Application (SPA) del Centro Tutorial de Mompox, perteneciente a la Universidad de Cartagena. La SPA tiene como objetivo proporcionar información relevante y recursos a la comunidad vinculada al Centro Tutorial de Mompox. Para acceder a estos recursos, los usuarios deben registrarse e iniciar sesión. Los visitantes podrán ver información acerca de las diferentes carreras ofrecidas por el CTM.  

Requisitos
Antes de comenzar con la configuración y ejecución de la SPA, asegúrese de tener instalados los siguientes requisitos:

Node.js: Descargar e instalar Node.js
Gestor de paquetes npm: Por lo general, se instala automáticamente con Node.js.

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

