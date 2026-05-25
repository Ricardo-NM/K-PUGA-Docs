# Diagramas sanitizados

Los siguientes diagramas son abstractos. No representan endpoints completos, tablas, rutas internas, credenciales ni infraestructura real.

## Arquitectura general

```mermaid
flowchart LR
  U[Usuarios por rol] --> F[Frontend web]
  F --> A[API backend]
  A --> DB[(Base de datos relacional)]
  A --> R[(Servicio cache/soporte)]
  A --> D[Gestion documental]
  A <--> S[Canal tiempo real]
  S <--> F
```

## Autenticación y autorización

```mermaid
sequenceDiagram
  participant Usuario
  participant Frontend
  participant API
  participant Seguridad
  participant Datos

  Usuario->>Frontend: Ingresa credenciales
  Frontend->>API: Solicita inicio de sesion
  API->>Seguridad: Valida identidad y genera sesion
  Seguridad-->>API: Sesion valida con rol/permisos
  API-->>Frontend: Respuesta autenticada
  Frontend->>API: Solicita recurso protegido
  API->>Seguridad: Verifica permiso requerido
  Seguridad->>Datos: Permite operacion autorizada
  Datos-->>API: Resultado
  API-->>Frontend: Informacion filtrada por permisos
```

## Flujo operativo de expediente/referencia

```mermaid
flowchart TD
  A[Alta o recepcion de informacion] --> B[Registro de referencia]
  B --> C[Clasificacion y seguimiento]
  C --> D[Gestion documental]
  D --> E[Revision administrativa]
  E --> F[Facturacion o control de pagos]
  F --> G[Reportes y cierre operativo]
  C --> H[Notificaciones internas]
  D --> H
```

## Comunicación en tiempo real

```mermaid
sequenceDiagram
  participant UsuarioA as Usuario A
  participant FrontendA as Frontend A
  participant TiempoReal as Servicio tiempo real
  participant FrontendB as Frontend B
  participant UsuarioB as Usuario B

  UsuarioA->>FrontendA: Envia mensaje o evento
  FrontendA->>TiempoReal: Publica evento autenticado
  TiempoReal->>FrontendB: Entrega evento a destinatarios autorizados
  FrontendB->>UsuarioB: Muestra notificacion o actualizacion
```

## Despliegue productivo

```mermaid
flowchart TD
  D[Dominio kpuga.tech] --> N[Nginx con HTTPS]
  N --> F[Frontend estatico]
  N --> A[Backend Node.js administrado por PM2]
  A --> DB[(SQL Server 2022)]
  A --> FS[Gestion de archivos]
  A <--> WS[Socket.IO]
  FW[UFW] --> N
  FW --> A
  FW --> DB
```
