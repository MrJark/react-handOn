# Prueba técnica con React para crear una aplicación de busqeuda de películas

API a usar: - https://www.omdbapi.com/

Consigue la API Key en la propia página web registrando tu email.

## Requerimientos de la prueba:

- Necesita mostrar un input para buscar la película y un botón para buscar.✅

- Lista las películas y muestra el título, año y poster. ✅

- Que el formulario funcione ✅

- Haz que las películas se muestren en un grid responsive. ✅

- Hacer el fetching de datos a la API ✅

- Primera iteración: 

- Evitar que se haga la misma búsqueda dos veces seguidas.✅

- Haz que la búsqueda se haga automáticamente al escribir. ✅

- Evita que se haga la búsqueda continuamente al escribir **(debounce)** -> para este voy a instalar un just -> **pnpm i just-debounce-it -E** ✅

- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Instalaciones

1. El empaquetador a user es vite pero voy a crearlo con pnpm en vez de npm

2. Para los estilos del css y que no se vea tan mal, puedo usar lo que ya trae vite preintalados o usar los de water.css que son básicos pero que ayudan a la ui y tienen dark mode 😍

3. 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Anotaciones y explicaciones

- Por defecto, en los formularios el último botón es de tipo submit por tanto, se podría omitir el tipo

- **NUNCA** uses console.log() para ver la forma del objeto que te devuelve el fetch, usa el json en chrome y alguna extensión para visualizarlo. También puedes crearte una carpeta y hacer un .json y copiar la respuesta que te da y ver el tipo de formato. Crea tanto el formato con información como cunado no haty información

- El **useRef permite tener un estado inmutable entre renderizados** cosa que no hace el useState por eso son distintos. El uso más típico es para guardar una referencia del DOM

- el **useMemo no se debe abusar**. Solo debería usarsa para aquellos elementos que en su renderizado consuman mucha capacidad de renderizado por ejemplo, el renderiza 1000 películas. 5/12 pelis no merecería la pena, 1000, sí. El useMemo se utiliza para renderizar elementos y no funciones, de eso se encarga el useCallback

- el useCallback es lo mismo que el useMme, está pensado para lo mismo, **pero para funciones** SOLO PARA FUNCIONES
