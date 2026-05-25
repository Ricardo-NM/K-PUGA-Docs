# Publicacion en GitHub Pages

El sitio esta preparado para publicarse mediante GitHub Actions.

## Pasos esperados

1. Crear un repositorio publico en GitHub llamado `K-PUGA-Docs`.
2. Subir este repositorio local a GitHub.
3. Activar GitHub Pages con origen `GitHub Actions`.
4. Hacer push a la rama `main`.
5. Esperar la ejecucion del workflow `Deploy VitePress site to GitHub Pages`.

## Build local

```bash
npm install
npm run docs:build
```

El resultado de compilacion se genera en `docs/.vitepress/dist`.
