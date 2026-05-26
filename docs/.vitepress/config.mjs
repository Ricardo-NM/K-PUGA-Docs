import { Buffer } from "node:buffer";
import { defineConfig } from "vitepress";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  title: "KPUGA - ERP",
  description:
    "Documentación publica de arquitectura, tecnologías y propósito del sistema KPUGA - ERP.",
  base: isGitHubActions ? "/K-PUGA-Docs/" : "/",
  cleanUrls: true,
  srcDir: ".",
  markdown: {
    config(md) {
      const defaultFence =
        md.renderer.rules.fence?.bind(md.renderer.rules) ||
        ((tokens, idx, options, env, slf) =>
          slf.renderToken(tokens, idx, options));

      md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx];
        const language = token.info.trim().split(/\s+/)[0];

        if (language === "mermaid") {
          const graph = Buffer.from(token.content, "utf8").toString("base64");
          return `<MermaidDiagram graph="${graph}" />\n`;
        }

        return defaultFence(tokens, idx, options, env, slf);
      };
    },
  },
  themeConfig: {
    logo: "/logo.ico",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Arquitectura", link: "/arquitectura/" },
      { text: "Infraestructura", link: "/infraestructura/" },
      { text: "Modulos", link: "/modulos/" },
      { text: "Seguridad", link: "/seguridad/" },
      { text: "Metodología", link: "/metodologia/" },
    ],
    sidebar: [
      { text: "Inicio", link: "/" },
      {
        text: "Arquitectura",
        items: [
          { text: "Vision general", link: "/arquitectura/" },
          { text: "Diagramas", link: "/arquitectura/diagramas" },
          { text: "Infraestructura", link: "/infraestructura/" },
        ],
      },
      {
        text: "Sistema",
        items: [
          { text: "Módulos", link: "/modulos/" },
          { text: "Seguridad", link: "/seguridad/" },
          { text: "Metodología", link: "/metodologia/" },
        ],
      },
    ],
    socialLinks: [],
    footer: {
      message:
        "Documentación publica sanitizada. No contiene código fuente privado.",
      copyright: "CC BY-NC 4.0",
    },
    search: {
      provider: "local",
    },
  },
});
