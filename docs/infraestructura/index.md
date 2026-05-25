# Infraestructura y despliegue

Esta página documenta la infraestructura pública de alto nivel usada por KPUGA - ERP. No incluye IPs, credenciales, rutas privadas completas, llaves SSH, archivos `.env`, cadenas de conexión ni reglas exactas que puedan comprometer el entorno productivo.

## Servidor e infraestructura base

| Componente    | Tecnología                          | Propósito                                                                         |
| ------------- | ----------------------------------- | --------------------------------------------------------------------------------- |
| VPS           | Ubuntu                              | Servidor remoto para alojar la aplicación y sus servicios principales.            |
| Acceso remoto | SSH con llave publica/privada       | Administración segura del servidor sin publicar llaves ni usuarios internos.      |
| Firewall      | UFW                                 | Control de puertos necesarios para administración, web, API y servicios internos. |
| Dominio       | Adquisición de dominio privado      | Punto de acceso público al sistema.                                               |
| DNS           | Registros A para dominio raíz y www | Enrutamiento del dominio hacia el VPS.                                            |

## Base de datos

| Componente      | Tecnología                | Propósito                                                  |
| --------------- | ------------------------- | ---------------------------------------------------------- |
| Motor           | Microsoft SQL Server      | Base de datos principal del sistema.                       |
| Base productiva | database_example          | Persistencia de datos operativos y administrativos.        |
| Herramienta CLI | sqlcmd                    | Consultas administrativas y respaldos desde terminal.      |
| Autenticación   | SQL Server Authentication | Acceso controlado con credenciales privadas no publicadas. |

## Backend Node.js

| Componente              | Tecnología           | Propósito                                                           |
| ----------------------- | -------------------- | ------------------------------------------------------------------- |
| Runtime                 | Node.js              | Ejecución del backend JavaScript en servidor.                       |
| Framework               | Express.js           | API REST, middlewares y manejo de rutas.                            |
| Procesos                | PM2                  | Mantener el backend disponible y reiniciarlo ante fallos.           |
| Configuración sensible  | `.env` privado       | Variables de base de datos, JWT, rutas y parámetros operativos.     |
| Archivos                | Multer               | Recepción controlada de archivos cargados por usuarios autorizados. |
| Seguridad de peticiones | CORS y rate limiting | Control de orígenes permitidos y límite de solicitudes.             |
| Tiempo real             | Socket.IO            | Chat, presencia, notificaciones y eventos internos.                 |

## Frontend React

| Componente        | Tecnología                    | Propósito                                                     |
| ----------------- | ----------------------------- | ------------------------------------------------------------- |
| UI                | React                         | Interfaz de usuario tipo SPA.                                 |
| Build             | Vite                          | Empaquetado, optimización y generación de archivos estáticos. |
| Estilos           | Tailwind CSS                  | Sistema de estilos utilitario para vistas y componentes.      |
| Rutas             | React Router DOM              | Navegación interna por vistas y roles.                        |
| Estado            | Context API y hooks           | Manejo de sesión, permisos y estado de interfaz.              |
| Comunicación HTTP | Fetch API con capa de cliente | Consumo del backend protegido.                                |

## Servidor web Nginx

| Componente         | Configuración publica                              | Propósito                                                               |
| ------------------ | -------------------------------------------------- | ----------------------------------------------------------------------- |
| Proxy inverso      | Redirección de solicitudes de API al backend local | Separar tráfico web de trafico de aplicación.                           |
| WebSockets         | Cabeceras de upgrade para conexiones persistentes  | Soporte para Socket.IO.                                                 |
| Archivos estáticos | Frontend compilado en directorio web               | Servir la aplicación React generada por Vite.                           |
| SSL/HTTPS          | Let's Encrypt con Certbot                          | Certificado TLS automático y renovable.                                 |
| Cache de entrada   | `Cache-Control: no-cache` en el HTML principal     | Evitar que los usuarios queden atrapados en versiones antiguas.         |
| Redirección        | HTTP a HTTPS                                       | Forzar comunicación segura.                                             |
| Mantenimiento      | Bandera temporal controlada en servidor            | Mostrar página de mantenimiento sin cambiar el código de la aplicación. |
| Carga de archivos  | Limite configurado para archivos grandes           | Permitir documentos operativos dentro de limites controlados.           |

## Seguridad operacional

- Las llaves SSH, credenciales, JWT secrets, cadenas de conexión y archivos `.env` permanecen fuera de este repositorio.
- El acceso a puertos administrativos o de base de datos debe restringirse por firewall, IP permitida, VPN o política equivalente.
- HTTPS se fuerza mediante Nginx y certificados de Let's Encrypt.
- El backend se ejecuta detrás de proxy inverso y se administra con PM2.
- Las cookies de sesión, orígenes CORS y permisos por rol forman parte del modelo de acceso de la aplicación.
