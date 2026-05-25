# Arquitectura general

KPUGA - ERP está organizado como una aplicación web con separación clara entre interfaz, API, persistencia, servicios de soporte y comunicación en tiempo real.

## Stack principal

| Capa          | Tecnología                                            | Uso público documentado                                                     |
| ------------- | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| Frontend      | React, Vite, Tailwind CSS                             | Interfaz por roles, componentes reutilizables y navegación modular.         |
| Backend       | Node.js, Express                                      | API central para autenticación, reglas de acceso y operaciones del sistema. |
| Base de datos | SQL Server                                            | Persistencia transaccional de entidades operativas y administrativas.       |
| Cache/soporte | Redis                                                 | Soporte para limitación, idempotencia o procesos auxiliares.                |
| Tiempo real   | Socket.IO                                             | Chat, presencia, notificaciones y avisos de nueva versión.                  |
| Seguridad     | JWT, cookies, Helmet, CORS, rate limiting, validación | Control de acceso y protección básica de superficie web.                    |
| Documentos    | Generación y gestión de archivos                      | Flujos documentales y paquetes de información operativa.                    |

## Principios de diseño

- Separación entre frontend y backend para mantener responsabilidades claras.
- Acceso segmentado por roles y permisos.
- Módulos funcionales agrupados por dominio de negocio.
- Validación y controles de seguridad antes de ejecutar operaciones protegidas.
- Comunicación en tiempo real solo para experiencias que lo requieren.
- Documentación publica limitada a conceptos, no a implementación privada.

## Vista de alto nivel

El frontend consume una API protegida. El backend coordina autenticación, permisos, procesos de negocio, archivos, persistencia y eventos en tiempo real. La base de datos y los servicios auxiliares permanecen fuera del alcance público.

Ver también: [diagramas sanitizados](./diagramas.md).

## Infraestructura de despliegue

El despliegue productivo se apoya en un VPS con Ubuntu, Nginx como servidor web y proxy inverso, PM2 para mantener el backend Node.js activo, SQL Server como motor de base de datos y certificados Let's Encrypt para HTTPS.

La configuración publica se documenta por componentes y propósito, sin incluir IPs, credenciales, llaves SSH, cadenas de conexión, rutas privadas completas ni reglas exactas de firewall.

Ver también: [infraestructura y despliegue](../infraestructura/).
