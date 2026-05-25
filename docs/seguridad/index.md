# Seguridad y privacidad

La documentación publica de KPUGA - ERP se limita a controles y practicas generales. Los detalles de implementación permanecen privados.

## Controles principales

- Autenticación basada en sesión/token para proteger recursos del sistema.
- Cookies y configuración de orígenes permitidos para controlar interacciones entre frontend y backend.
- Autorización por roles y permisos antes de mostrar vistas o ejecutar acciones protegidas.
- Validación de solicitudes para reducir errores y entradas inesperadas.
- Limitación de solicitudes en operaciones sensibles.
- Cabeceras de seguridad web mediante middleware especializado.
- Manejo centralizado de errores para responder de forma consistente.
- Idempotencia en operaciones donde se busca evitar duplicidad por reintentos.
- Separación entre información publica documentada e implementación privada.

## Información excluida de este repositorio

- Código fuente privado.
- Variables de entorno o archivos `.env`.
- Secretos, tokens, credenciales o cadenas de conexión.
- Consultas SQL, nombres de tablas o modelos internos.
- Endpoints completos o reglas internas explotables.
- Datos reales de usuarios, clientes u operaciones.
- Capturas de pantalla sin anonimizar.

## Revisión publica segura

Las contribuciones deben enfocarse en claridad, arquitectura, documentación, riesgos generales y buenas prácticas. Cualquier hallazgo que implique información sensible debe reportarse sin reproducir el dato en público.

## Seguridad de infraestructura

- El acceso administrativo al VPS se realiza mediante SSH con llaves, sin publicar llaves ni usuarios internos.
- UFW controla los puertos necesarios para administración, tráfico web, backend y servicios internos.
- El dominio público apunta al VPS mediante DNS, mientras Nginx fuerza HTTPS con certificados Let's Encrypt.
- La base de datos productiva usa SQL Server Authentication con credenciales privadas fuera del repositorio.
- Los puertos de administración y base de datos deben mantenerse restringidos por IP, VPN o una política equivalente.
- Nginx opera como proxy inverso, sirve el frontend compilado y soporta WebSockets mediante cabeceras de upgrade.
- PM2 mantiene el backend disponible y permite reinicios controlados sin exponer detalles internos del proceso.
