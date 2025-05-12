# Guitar Store

Guitar Store es una aplicación web de comercio electrónico especializada en la venta de guitarras. Permite a los usuarios explorar un catálogo de guitarras, agregar productos al carrito de compras, gestionar cantidades y persistir el carrito en el almacenamiento local del navegador.

## Característica

- Catálogo de guitarras con imágenes y detalles
- Carrito de compras con persistencia local
- Gestión de cantidades en el carrito (mínimo 1, máximo 5)
- Interfaz responsiva
- Tipado estricto con TypeScript
- Manejo de estado local con React hooks
- Despliegue automático a GitHub Pages

# Tecnologías

- **React**: Framework principal para la construcción de la interfaz de usuario
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido
- **CSS Modules**: Para el estilado modular y evitar conflictos de nombres
- **LocalStorage**: Para persistir el estado del carrito de compras
- **ESLint**: Para mantener la calidad y consistencia del código
- **Git**: Sistema de control de versiones
- **GitHub Pages**: Para el despliegue de la aplicación

## Estructura del Proyecto

- **src/**
  - **components/**: Componentes reutilizables
    - `Guitar.tsx`: Componente para mostrar una guitarra individual
    - `GuitarCartItem.tsx`: Componente para mostrar un item del carrito
    - `Header.tsx`: Componente del encabezado con el carrito
  - **hooks/**
    - `useCart.ts`: Hook personalizado para la lógica del carrito
  - **data/**
    - `guitars.ts`: Array con la información de las guitarras
  - **types/**
    - `index.ts`: Tipos y interfaces compartidos
  - `App.tsx`: Componente principal
  - `main.tsx`: Punto de entrada

## Instalación

> Para trabajar con este proyecto, necesitarás tener instalado:
>
> - **Node.js** (versión 14 o superior)

## Uso

Para visualizar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```
git clone https://github.com/JMatochePascual/GuitarLA-React-JS.git
```

2. Navega al directorio del proyecto:

```
cd GuitarLA-React-JS
```

3. Instala las dependencias necesarias:

```
npm install
```

4. Inicia el servidor en modo desarrollo:

```
npm run dev
```

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos en orden:

1. Haz un fork del repositorio

2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature-name
   ```
3. Realiza y confirma tus cambios:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature-name
   ```
5. Abre un Pull Request desde tu repositorio hacia el proyecto principal

## Licencia

Este proyecto se encuentra disponible bajo la licencia MIT. Puedes consultar los términos completos [aquí](https://opensource.org/licenses/MIT).

Desarrollado con 💚 por JMCode | © 2025 - Transformando ideas en soluciones digitales.
