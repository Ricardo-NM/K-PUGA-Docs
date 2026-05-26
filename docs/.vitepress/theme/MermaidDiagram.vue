<script setup>
import { nextTick, onMounted, ref, watch } from "vue";
import { useData } from "vitepress";
import mermaid from "mermaid";

const props = defineProps({
  graph: {
    type: String,
    required: true,
  },
});

const { isDark } = useData();
const container = ref(null);
const error = ref("");

function configureMermaid() {
  const dark = isDark.value;

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "base",
    themeVariables: {
      background: dark ? "#111827" : "#ffffff",
      mainBkg: dark ? "#1f2937" : "#f8fafc",
      secondBkg: dark ? "#0f172a" : "#eef2ff",
      primaryColor: dark ? "#1f2937" : "#eff6ff",
      primaryBorderColor: dark ? "#60a5fa" : "#2563eb",
      primaryTextColor: dark ? "#f8fafc" : "#111827",
      secondaryColor: dark ? "#134e4a" : "#ecfdf5",
      secondaryBorderColor: dark ? "#2dd4bf" : "#0f766e",
      secondaryTextColor: dark ? "#f8fafc" : "#111827",
      tertiaryColor: dark ? "#312e81" : "#f5f3ff",
      tertiaryBorderColor: dark ? "#a78bfa" : "#7c3aed",
      tertiaryTextColor: dark ? "#f8fafc" : "#111827",
      lineColor: dark ? "#cbd5e1" : "#334155",
      textColor: dark ? "#f8fafc" : "#111827",
      actorBkg: dark ? "#0f172a" : "#eff6ff",
      actorBorder: dark ? "#60a5fa" : "#2563eb",
      actorTextColor: dark ? "#f8fafc" : "#111827",
      labelBoxBkgColor: dark ? "#111827" : "#ffffff",
      labelBoxBorderColor: dark ? "#64748b" : "#cbd5e1",
      labelTextColor: dark ? "#f8fafc" : "#111827",
      signalColor: dark ? "#e2e8f0" : "#334155",
      signalTextColor: dark ? "#f8fafc" : "#111827",
      noteBkgColor: dark ? "#422006" : "#fef3c7",
      noteTextColor: dark ? "#fefce8" : "#422006",
      noteBorderColor: dark ? "#f59e0b" : "#d97706",
    },
  });
}

function decodeGraph(value) {
  return decodeURIComponent(
    Array.from(atob(value), (char) =>
      `%${char.charCodeAt(0).toString(16).padStart(2, "0")}`,
    ).join(""),
  );
}

async function renderDiagram() {
  if (!container.value) return;

  error.value = "";
  const source = decodeGraph(props.graph);
  const id = `mermaid-${crypto.randomUUID()}`;

  try {
    configureMermaid();
    const { svg } = await mermaid.render(id, source);
    container.value.innerHTML = svg;
  } catch (err) {
    container.value.innerHTML = "";
    error.value = "No se pudo renderizar este diagrama.";
    console.error("Mermaid render error:", err);
  }
}

onMounted(async () => {
  await nextTick();
  await renderDiagram();
});

watch(
  () => [props.graph, isDark.value],
  async () => {
    await nextTick();
    await renderDiagram();
  },
);
</script>

<template>
  <div class="mermaid-diagram">
    <div ref="container" />
    <p v-if="error" class="mermaid-error">{{ error }}</p>
  </div>
</template>
