# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga las siguientes vistas:

**📍 LANDING PAGE |** deberemos crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al Centro Tutorial de Mompox.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de la SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar carreras por nombre.
-  Sector en el que se vea un listado de cards con las carreras. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /carreras`** y deberá mostrar su:
   -  Imagen representativa de la carrera.
   -  Nombre.
   -  Facultad.
-  Cuando se le hace click a una Card deberá redirigir al detalle de esa carrera en específico.


<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de una carrera:

-  ID (Código de tres letras).
-  Nombre.
-  Imagen de la carrera.
-  Facultad
-  Detalles del Programa Académico
-  Tipo de formación
-  Ubicación (CTM)

<br />

