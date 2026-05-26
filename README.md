# KPUGA - ERP Documentación

Repositorio público de documentación para KPUGA - ERP, un sistema privado de gestión operativa y administrativa para procesos logísticos, documentales y de seguimiento interno.

> Este repositorio no contiene código fuente del sistema privado.

Documentación técnica disponible en: https://ricardo-nm.github.io/K-PUGA-Docs/

## Propósito

Este espacio permite revisar de forma publica el propósito, arquitectura general, tecnologías, módulos funcionales, prácticas de seguridad y metodología de trabajo de KPUGA - ERP sin exponer propiedad intelectual, credenciales, datos reales, consultas, rutas internas sensibles ni implementación del producto.

## Contenido

- Arquitectura general del sistema.
- Stack tecnológico utilizado.
- Módulos principales y responsabilidades.
- Controles de seguridad y privacidad.
- Metodología de desarrollo y documentación.
- Diagramas sanitizados en Mermaid.

## Infraestructura y despliegue

La documentación publica incluye una vista sanitizada del entorno productivo: VPS Hostinger con Ubuntu, Nginx, PM2, SQL Server, dominio privado, HTTPS con Let's Encrypt, UFW y Socket.IO.

No se publican IPs, credenciales, llaves SSH, cadenas de conexión, rutas privadas completas ni configuración exacta de firewall.

## Desarrollo local

```bash
npm install
npm run docs:dev
```

Para compilar el sitio:

```bash
npm run docs:build
```

## Política de divulgación

No se aceptan contribuciones que incluyan código fuente privado, secretos, cadenas de conexión, variables `.env`, datos de clientes, capturas con información real, consultas SQL, endpoints completos o detalles internos explotables.

## Licencia

La documentación esta publicada bajo CC BY-NC 4.0. El sistema K-PUGA, su código fuente, base de datos, marca, reglas de negocio e implementación permanecen privados.
