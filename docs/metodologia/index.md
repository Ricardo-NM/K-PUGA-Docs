# Metodología de trabajo

KPUGA - ERP se documenta públicamente con una estrategia de separación: el sistema privado conserva código e implementación, mientras este repositorio describe decisiones, estructura y propósito de manera revisable.

## Criterios de desarrollo

- Modularizar por dominios funcionales y responsabilidades del usuario.
- Reutilizar componentes visuales y patrones de navegación donde sea posible.
- Mantener separación entre presentación, API, permisos, persistencia y servicios auxiliares.
- Validar entradas y permisos antes de ejecutar operaciones protegidas.
- Registrar flujos importantes mediante documentación y diagramas de alto nivel.
- Favorecer cambios incrementales que puedan revisarse y probarse por modulo.

## Documentación publica

Cada página debe responder tres preguntas:

1. Qué problema resuelve esta parte del sistema.
2. Que tecnologías o patrones intervienen.
3. Que límites de divulgación se deben respetar.
