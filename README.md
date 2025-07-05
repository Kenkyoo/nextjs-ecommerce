# Next.js E-commerce

¡Bienvenido al repositorio de mi proyecto de e-commerce, desarrollado con Next.js! Esta aplicación completa ofrece una experiencia de compra fluida con funcionalidades clave, integración de base de datos robusta y autenticación segura.

## Características Principales

- **Autenticación Flexible:** Implementación de `NextAuth.js` con soporte para credenciales de GitHub y Google, permitiendo un inicio de sesión rápido y seguro.
- **Gestión de Carrito:** Funcionalidad completa para añadir, ver y gestionar productos en el carrito de compras.
- **Base de Datos Moderna:** Integración con `PostgreSQL` y `Supabase` para el almacenamiento de datos, utilizando `Prisma` como ORM para consultas eficientes y seguras.
- **Despliegue Continuo:** Proyecto optimizado y desplegado en `Vercel` para un rendimiento rápido y escalable.
- **Detalles y Vista Rápida de Productos:** Visualización detallada de productos y una opción de "quick view" para una experiencia de usuario mejorada.
- **Lista de Deseos:** Permite a los usuarios añadir productos a su lista de deseos, con almacenamiento persistente en la base de datos.

## Tecnologías Utilizadas

Este proyecto hace uso de un stack tecnológico moderno y eficiente para garantizar un alto rendimiento y una experiencia de desarrollo óptima:

- **Framework:**
  - `Next.js` (última versión)
- **Autenticación:**
  - `Next-Auth`
  - `@auth/prisma-adapter`
  - `bcryptjs` (para gestión de contraseñas)
- **Base de Datos y ORM:**
  - `PostgreSQL`
  - `Supabase`
  - `Prisma` (`@prisma/client`, `prisma`, `@prisma/extension-accelerate`)
- **Interfaz de Usuario y Estilos:**
  - `React` (última versión)
  - `Tailwind CSS` (`tailwindcss`, `autoprefixer`, `postcss`, `@tailwindcss/forms`)
  - `Headless UI` (`@headlessui/react`)
  - `Heroicons` (`@heroicons/react`)
  - `Lucide React`
  - `Tabler Icons React`
  - `Radix UI` (varios componentes como `dialog`, `dropdown-menu`, `avatar`, `collapsible`, `label`, `menubar`, `navigation-menu`, `separator`, `slot`, `tabs`, `tooltip`)
- **Utilidades y Hooks:**
  - `react-hook-form` y `@hookform/resolvers` (para gestión de formularios)
  - `zod` (para validación de esquemas)
  - `swr` (para recuperación de datos)
  - `clsx` y `tailwind-merge` (para utilidades de clases CSS)
  - `use-debounce`
- **Animaciones y Efectos Visuales:**
  - `motion`
  - `cobe`
  - `canvas-confetti` y `@types/canvas-confetti`
- **Temas:**
  - `next-themes`
- **Notificaciones:**
  - `sonner`
- **Otros:**
  - `react-text-truncate`
  - `typescript`
  - `tsx` (para scripts de Prisma)
  - `class-variance-authority`
  - `tailwindcss-animate`

## Cómo Empezar

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/Kenkyoo/nextjs-ecommerce.git](https://github.com/Kenkyoo/nextjs-ecommerce.git)
    cd nextjs-ecommerce
    ```
2.  **Instala las dependencias:**
    ```bash
    pnpm install
    # o npm install
    # o yarn install
    ```
3.  **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales de base de datos, proveedores de autenticación (GitHub, Google) y la URL de Supabase.
    ```
    DATABASE_URL="postgresql://..."
    NEXTAUTH_SECRET="..."
    GITHUB_ID="..."
    GITHUB_SECRET="..."
    GOOGLE_ID="..."
    GOOGLE_SECRET="..."
    NEXT_PUBLIC_SUPABASE_URL="..."
    NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
    ```
4.  **Configura la base de datos con Prisma:**
    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```
5.  **Ejecuta el seed (opcional, para datos de prueba):**
    ```bash
    pnpm prisma:seed # o npx tsx prisma/seed.ts
    ```
6.  **Inicia el servidor de desarrollo:**
    ```bash
    pnpm dev --turbopack
    # o npm run dev -- --turbopack
    ```
    Abre `http://localhost:3000` en tu navegador.

## Scripts Disponibles

- `pnpm build`: Genera los archivos de producción. Ejecuta `prisma generate` y `next build`.
- `pnpm dev --turbopack`: Inicia el servidor de desarrollo con Turbopack para un arranque más rápido.
- `pnpm start`: Inicia el servidor Next.js en modo de producción.
- `pnpm lint`: Ejecuta ESLint para analizar el código en busca de errores y advertencias.
- `pnpm prisma:seed`: Ejecuta el script de seeding de Prisma para poblar la base de datos.

## Despliegue

Este proyecto está configurado para un despliegue sencillo en `Vercel`. Asegúrate de haber configurado las variables de entorno necesarias en tu proyecto de Vercel.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un _issue_ o enviar un _pull request_.

---

¡Gracias por revisar mi proyecto!
