# Prueba Técnica para Junior con React

La prueba técnica consiste en 2 APIs y tener que renderizar un hecho aleatorio de la Primera API, recuperar la primera palabra del hecho y mostrar una imagen de un gato con la segunda API con la primera palabra que has recuperado

APIs:

- Facts Random: https://catfact.ninja/fact

- Imagen random: https://cataas.com/cat/says/hello -> forma de usar la api -> `https://cataas.com/cat/says/${firsTwoWords}?size=50&color=red?json=true`

## Pasos a seguir

1. Recuperar u hecho aleatorio de los gatos de la primera palabra

2. Recuperar la primera paralabra del hecho

## A tener en cuenta

- En la prueba no se puede crear a través de Vite las dependencias de React, tengo que saber inicializar yo mismo un proyecto

- Ver como funcionan las APIs y que te devuelven y cómo

- Es buena práctica manejar errores pero como puede no date tiempo, puedes poner un comentario dónde lo harias y cómo

- Después de haber acabado con la prueba, te pueden pedir que hagas algo más y lo más indicado es hacer el testing de componente más esencial. Para esto, voy a usar **playwright** -> **npm init playwright@latest**

## Pasos para inicializar

1. Usar **npm create vite@latest** pero eligiendo **Vanilla** ya que no usaré dependencia pre-instaladas, sino que las instalaré a mano

2. Instalon un plugin que viene en Vite para React. No es 'trampa' ya que la configuraciópn la voy a tener que crear yo -> **npm i @vitejs/plugin-react -E**

3. Son dos dependencias para que pueda funcionar react en el proyecto **React**, para tener la libreria, y **react-dom**, para el navegador, -> **npm i react react-dom -E**

4. Configurar Vite creando un file **vite.config.js** y creando la configuración con el plugin de React
<pre>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
</pre>

5. Hacer el punto de entrada de la app en el **main.jsx** ( ojo con el tipo de extensión, es **.jsx** porque no funciona con otro tipo de extensiones)

6. Instalar el ESlint, en este caso el de Standard con **npm i standard -D**. Esto te ayudará a tener un código más limpio ycon buenas prácticas y hay que saber configurarlo rápido. En el packace.json:
<pre>
"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
}
</pre>
