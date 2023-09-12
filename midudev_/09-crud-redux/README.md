# CRUD con React Redux Toolkit, Rome Tools y Tremor

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

- La colección de componentes voy a usaar es [tremor](https://www.tremor.so) para usar dashboards: **pnpm add @tremor/react -E** y para usarlos necesita tailwind como dependencia **pnpm add -D tailwindcss postcss autoprefixer**.

  Una vez instalado, tienes que crear los archivos de configuración de tailwind a través de **pnpx tailwindcss init -p**

  Una vez instalado tienes que configurar el **tailwind.config.js y el index.csss**. La extensión de PostCSS para vscode para que no te salgan errores de lectura tmabién te vendrá bien

- Para los íconos voy a usar [heroicons](https://heroicons.com)

- Para las dependencias de Redux usas Toolkit a través de **pnpm install @reduxjs/toolkit react/redux -E**.

  ### Utilización de Redux

  Para usar redux necesitas envolver tu app con un provider 

## Comentarios

- 
