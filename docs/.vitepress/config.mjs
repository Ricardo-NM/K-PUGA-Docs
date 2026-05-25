import { defineConfig } from "vitepress";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  title: "K-PUGA Docs",
  description: "Documentacion publica de arquitectura, tecnologias y proposito del sistema K-PUGA.",
  base: isGitHubActions ? "/K-PUGA-Docs/" : "/",
  cleanUrls: true,
  srcDir: ".",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Arquitectura", link: "/arquitectura/" },
      { text: "Modulos", link: "/modulos/" },
      { text: "Seguridad", link: "/seguridad/" },
      { text: "Metodologia", link: "/metodologia/" }
    ],
    sidebar: [
      { text: "Inicio", link: "/" },
      {
        text: "Arquitectura",
        items: [
          { text: "Vision general", link: "/arquitectura/" },
          { text: "Diagramas", link: "/arquitectura/diagramas" }
        ]
      },
      {
        text: "Sistema",
        items: [
          { text: "Modulos", link: "/modulos/" },
          { text: "Seguridad", link: "/seguridad/" },
          { text: "Metodologia", link: "/metodologia/" },
          { text: "Contribuir", link: "/contribuir" },
          { text: "Publicacion", link: "/publicacion" }
        ]
      }
    ],
    socialLinks: [],
    footer: {
      message: "Documentacion publica sanitizada. No contiene codigo fuente privado.",
      copyright: "CC BY-NC 4.0"
    },
    search: {
      provider: "local"
    }
  }
});