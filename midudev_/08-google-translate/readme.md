# Clon de Google Translate con TS + REACT + CHATGPT API

Este clon lo voy a hacer con midudev. [Link](https://www.youtube.com/watch?v=kZhabulNCUc&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=8)

## Dependencias

- Lo primero, voy a inicializar el eslint con **npx eslint --init**, respondes las preguntas y en las parceOptions, colocas lo siguiente: **"project": "./tsconfig.json"**

- Para los estilos voy a usar React Boostrap con **npm install react-bootstrap bootstrap** y los estilos en la App.jsx (import 'bootstrap/dist/css/bootstrap.min.css';)

- Api de OpenAI -> **npm install openai -E**

## Anotaciones

- No debemos tener en los componentes los dispatch ya que esto implica atar los componentes a un contrato en concreto
