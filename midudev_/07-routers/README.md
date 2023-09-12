# Crea un React Router desde cero

- Instalar el linter
- Crear una forma de hacer MPAs (Multiple Page Application)✅
- Crea una forma de hacer SPAs (Single Page Applications) ✅
- Poder navegar entre páginas con el botón de atrás✅
- Crear componente Link para hacerlo declarativo✅
- Crear componente Router para hacerlo más declarativo✅
- Soportar ruta por defecto (404)✅
- Soportar rutas con parámetros✅
- Componente <Route /> para hacerlo declarativo✅
- Lazy Loading de las rutas
- Hacer un i18n con las rutas
- Testing
- Publicar el paquete en NPM

## Instalaciones

- He iniciado el proyecto con **pnpm**, para usarlo, instala las dependencias con **pnpm install**

- Para el css voy a usar **[simplecss.org](https://simplecss.org)** e importo en el index.html el link el cual te aporta unos estilos dark sin usar ninguna clase, por default

- Voy a instalar una dependencia para usar los regexp. [Library](https://github.com/pillarjs/path-to-regexp) -> **pnpm install path-to-regexp -E** que es para el uso de las rutas dinámicas. Ej: search/python o search/javascript. Lo que va después del search/ es lo que se denomina query y en las rutas se escribe como **/:query** y esto es lo qie es el parámetro dinámico, el cual es el user quien va a poner lo qeu quiera ahí buscar. **Esta es una de las dependencias más famosas de node**

- Para hacer el testing voy a usar vitest -> **pnpm install vitest -D** y en el .json, en los scripts he colocado **"test": "vitest"**. Además también voy a usar para los test, como son componentes de React y necesitan ser renderizados, la instalación de **happy-dom**, para simular un arbol de decisiones y el **@testing-library/react** -> **pnpm install happy-dom @testing-library/react -D**. Cuando hagas la intalación, necesitas añadir el siguiente código en el **vite.config.js**
<pre>
  test: {
    environment: 'happy-dom'
  }
</pre>

## Comentarios y aportes

- Si un elemento que estás renderizando tiene que llevate a algú sitio, debe ser un **anchor**, a. AUnuque le des estilos de botón, el componente debe ser un a OBLOGATORIAMENTE

- Hacer el lazy de la app es una buena práctica y react tiene un componente nativo **lazy** que lo hace, solo hay que import 
