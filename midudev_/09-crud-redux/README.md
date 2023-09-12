# React + TypeScript + Vite

Inicio el repo con **pnpm**.

Esta parte es para desarrollar un **CRUD** utilizando React Redux Toolkit, Rome Tools y Tremor.

## Instalaciones y dependencias

- Instala Rome con **pnpm add rome -D** y lo inicializas a través de **pnpm rome init**. Este init te creará un **rome.json** en el cual tendrás que tener la siguiente config:

  ```json
    {
      "$schema": "./node_modules/rome/configuration_schema.json",
      "organizeImports": {
        "enabled": true
      },
      "linter": {
        "enabled": true,
        "rules": {
          "recommended": true
        }
      },
      "formatter": {
        "enabled": true
      }
    }
  ```

  Usa además el plugin de rome para el proyecto si ya tienes un eslint configurado debes habilitar la extensión de Rome y deshabilitas la de eslint y la de prettier ( en este workspace )


## Comentarios

- 
