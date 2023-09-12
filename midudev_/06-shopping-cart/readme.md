# Enunciado

1. Ecommerce

- [x] Muestra una lista de productos que vienen de un JSON
- [x] Añade un filtro por categoría
- [x] Añade un filtro por precio

Haz uso de useContext para evitar pasar props innecesarias.

2. Carrito:

- [x] Haz que se puedan añadir los productos a un carrito.
- [x] Haz que se puedan eliminar los productos del carrito.
- [x] Haz que se puedan modificar la cantidad de productos del carrito.
- [x] Sincroniza los cambios del carrito con la lista de productos.
- [x] Guarda en un localStorage el carrito para que se recupere al recargar la página. (da puntos)

## Instalaciones

-

## Comentarios y aportes

- Lo más típico en las pruebas técnicas:

  - Saber hacer fetching de datos

  - Saber filtrar con .filter() los arrys

  - Manejar formularios

  - Iterar arrys

  - Entender los efectos

- PropDrilling es el paso de props al los hijos, más allá de ser el primer hijo. Está taladrando los componentes que es jusramente lo uqe está pasando con el **filterProducts** porque lo estás creando en el App.jsx pero sin embargo el que lo necesita es el Filter.jsx que es el tercer hijo. Este 'problema' se puede solucionar con pasando los childrens y hacer una composición en la parte del app.jsx con el header y dentro de este, pasarle el componente filters con el **filterProducts = {setFilters}**

- **useID**: lo que te hace este hook es crear un id único para cada una de las variables en las cuales lo estés asignando. Ten en cuenta que no sirven los useId para pasarlos como key en los .map

- **useContext** para usar el useContext necesitas tener el contexto y para ello son 3 los pasos a seguir:
  1. crear el contexto a través del **createContext**
  2. proveer el contexto con el **.Provider** y mandarlo allá donde quieres que actue
  3. Consumir el contexto a través del hook **useContext**

  El contexto es una forma de inyección de dependencias y no solo es para tener estados globales. Tiene más utilidades. El **uso** de useContext está recomendado **para estados globales pequeños o que cambien con poca frecuencia** como puede ser el inicio de sesión que cambia poco.

- El **useReducer** nos permite manejar el estado de una forma escalable el estado actual y la acción que tiene que hacer y está separado de la aplicación general. Vale la pena el usar los reducer porque podemos separar la lógica. Se usa cunado:
  - tenemos muchos useState uno detrás de otro, donde en el reducer puedas cambiar por states
  - 

<pre>
.eslintrc.cjs
  module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
</pre>
