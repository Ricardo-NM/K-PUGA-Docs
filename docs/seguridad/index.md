# Seguridad y privacidad

La documentacion publica de K-PUGA se limita a controles y practicas generales. Los detalles de implementacion permanecen privados.

## Controles principales

- Autenticacion basada en sesion/token para proteger recursos del sistema.
- Cookies y configuracion de origenes permitidos para controlar interacciones entre frontend y backend.
- Autorizacion por roles y permisos antes de mostrar vistas o ejecutar acciones protegidas.
- Validacion de solicitudes para reducir errores y entradas inesperadas.
- Limitacion de solicitudes en operaciones sensibles.
- Cabeceras de seguridad web mediante middleware especializado.
- Manejo centralizado de errores para responder de forma consistente.
- Idempotencia en operaciones donde se busca evitar duplicidad por reintentos.
- Separacion entre informacion publica documentada e implementacion privada.

## Informacion excluida de este repositorio

- Codigo fuente privado.
- Variables de entorno o archivos `.env`.
- Secretos, tokens, credenciales o cadenas de conexion.
- Consultas SQL, nombres de tablas o modelos internos.
- Endpoints completos o reglas internas explotables.
- Datos reales de usuarios, clientes u operaciones.
- Capturas de pantalla sin anonimizar.

## Revision publica segura

Las contribuciones deben enfocarse en claridad, arquitectura, documentacion, riesgos generales y buenas practicas. Cualquier hallazgo que implique informacion sensible debe reportarse sin reproducir el dato en publico.
