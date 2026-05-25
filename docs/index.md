---
layout: home

hero:
  name: "KPUGA"
  text: "Servicios de importación y exportación - Consultoría en comercio exterior"
  tagline: Documentación sobre la construcción del sistema ERP.
  actions:
    - theme: brand
      text: Ver arquitectura
      link: /arquitectura/
    - theme: alt
      text: Explorar modulos
      link: /modulos/

features:
  - title: Visión publica
    details: Explica que resuelve KPUGA - ERP y como está organizado a nivel funcional.
  - title: Arquitectura sanitizada
    details: Muestra capas, tecnologías y flujos sin comprometer información privada.
  - title: Revisión segura
    details: Permite recibir observaciones publicas sin comprometer código, datos ni infraestructura.
---

## Propósito

KPUGA - ERP es un sistema privado orientado a centralizar procesos operativos, administrativos y documentales relacionados con gestión logística, seguimiento de referencias, control de documentos, facturación, reportes, comunicación interna y actividades de recursos humanos.

Este repositorio existe para compartir una descripción clara del sistema con revisores, colaboradores y publico técnico, manteniendo separado el código fuente privado.

## Que contiene este sitio

- Arquitectura general frontend/backend.
- Stack de tecnologías, herramientas y librerías.
- Responsabilidades de los módulos principales.
- Prácticas de seguridad, acceso y privacidad.
- Diagramas sanitizados de alto nivel.
- Metodología de trabajo y criterios de documentación

## Que no contiene

Este sitio no incluye código fuente, secretos, credenciales, datos reales, queries SQL, nombres de tablas, variables de entorno, rutas internas completas, capturas sin anonimizar ni detalles de implementación que comprometan el sistema privado.

## Infraestructura productiva

La documentación también cubre el entorno de despliegue: VPS con Ubuntu, Nginx, PM2, SQL Server, dominio privado, HTTPS con Let's Encrypt, firewall UFW y comunicación en tiempo real mediante Socket.IO.

Los detalles se publican de forma sanitizada en la sección [Infraestructura y despliegue](./infraestructura/).
