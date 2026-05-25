# Arquitectura general

K-PUGA esta organizado como una aplicacion web con separacion clara entre interfaz, API, persistencia, servicios de soporte y comunicacion en tiempo real.

## Stack principal

| Capa | Tecnologia | Uso publico documentado |
| --- | --- | --- |
| Frontend | React, Vite, Tailwind CSS | Interfaz por roles, componentes reutilizables y navegacion modular. |
| Backend | Node.js, Express | API central para autenticacion, reglas de acceso y operaciones del sistema. |
| Base de datos | SQL Server | Persistencia transaccional de entidades operativas y administrativas. |
| Cache/soporte | Redis | Soporte para limitacion, idempotencia o procesos auxiliares. |
| Tiempo real | Socket.IO | Chat, presencia, notificaciones y avisos de nueva version. |
| Seguridad | JWT, cookies, Helmet, CORS, rate limiting, validacion | Control de acceso y proteccion basica de superficie web. |
| Documentos | Generacion y gestion de archivos | Flujos documentales y paquetes de informacion operativa. |

## Principios de diseno

- Separacion entre frontend y backend para mantener responsabilidades claras.
- Acceso segmentado por roles y permisos.
- Modulos funcionales agrupados por dominio de negocio.
- Validacion y controles de seguridad antes de ejecutar operaciones protegidas.
- Comunicacion en tiempo real solo para experiencias que lo requieren.
- Documentacion publica limitada a conceptos, no a implementacion privada.

## Vista de alto nivel

El frontend consume una API protegida. El backend coordina autenticacion, permisos, procesos de negocio, archivos, persistencia y eventos en tiempo real. La base de datos y los servicios auxiliares permanecen fuera del alcance publico.

Ver tambien: [diagramas sanitizados](./diagramas.md).
