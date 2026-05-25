# Metodologia de trabajo

K-PUGA se documenta publicamente con una estrategia de separacion: el sistema privado conserva codigo e implementacion, mientras este repositorio describe decisiones, estructura y proposito de manera revisable.

## Criterios de desarrollo

- Modularizar por dominios funcionales y responsabilidades del usuario.
- Reutilizar componentes visuales y patrones de navegacion donde sea posible.
- Mantener separacion entre presentacion, API, permisos, persistencia y servicios auxiliares.
- Validar entradas y permisos antes de ejecutar operaciones protegidas.
- Registrar flujos importantes mediante documentacion y diagramas de alto nivel.
- Favorecer cambios incrementales que puedan revisarse y probarse por modulo.

## Documentacion publica

Cada pagina debe responder tres preguntas:

1. Que problema resuelve esta parte del sistema.
2. Que tecnologias o patrones intervienen.
3. Que limites de divulgacion se deben respetar.

## Criterios para aceptar cambios

- El contenido debe ser comprensible para un lector tecnico externo.
- No debe revelar secretos, datos reales ni implementacion privada.
- Los diagramas deben ser abstractos y sanitizados.
- Las descripciones deben hablar de capacidades y responsabilidades, no de codigo interno.
