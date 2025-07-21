// versionado para compartir con otros equipos
// v1.0.1

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// The defineConfig function can accept a function that receives the build `mode`.
// This allows us to load the correct environment variables for 'development' or 'production'.
// TODO: TENEMOS QUE BUSCAR UNA FORMA DE QUE SE PUEDAN INYECTAR LAS VARIABLES DE ENTORNO RUNTIME EN LOS PODS DE KUBERNETES. QUIZAS COMPILAR EN EL NPM START?
// O BUSCAR UNA FORMA DE QUE SE INYECTEN LAS VARIABLES DE ENTORNO EN LA API QUE SIRVE EL SCRIPT (NO ESTOY SEGURO DE QUE TAN PERFORMANTE SEA)
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // The third parameter '' makes it load all env variables, not just VITE_ prefixed ones.
  // However, for security, it's best practice to only expose VITE_ prefixed variables.
  const env = loadEnv(mode, process.cwd(), "");

  // Create a new object to hold the environment variables that will be injected.
  // We will format them to be accessible via `process.env`.
  const processEnvDefinitions = Object.entries(env).reduce(
    (acc, [key, val]) => {
      // We only want to expose variables that are explicitly meant for the client.
      // Vite's convention is to prefix these with `VITE_`.
      if (key.startsWith("VITE_") || key.startsWith("NEXT_PUBLIC_")) {
        acc[`process.env.${key}`] = JSON.stringify(val);
      }
      return acc;
    },
    {}
  );

  //const srcDir = resolve(__dirname, "src");
  const entryFile = resolve("web-components/wc-definitions.ts");

  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [],
      },
    },
    build: {
      lib: {
        entry: entryFile,
        name: "WebComponents",
        fileName: "web-components",
        formats: ["umd", "es"],
      },
      outDir: "public/web-components-vite",
      cssCodeSplit: false,
      emptyOutDir: true,
      copyPublicDir: false,
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) =>
            name === "style.css" ? "web-components.css" : name || "asset",
        },
      },
    },
    resolve: {
      alias: {
        "@": './*', // Se podria generar automaticamente sacando la info de tsconfig.json, quizas hacer un vite.wc.config especifico para nextjs o proyectos de typescript

        // Esto es opcional, pero ayuda a evitar problemas con imports de Next.js
        // Ver si hay mejor forma de compartirlo con otros equipos
      /*  "next/config": resolve(
          __dirname,
          "src/components/web-components/getConfig_polyfill.ts"
        ),
        "next/image": resolve(
          __dirname,
          "src/components/web-components/next-image-polyfill.tsx"
        ),*/
      },
    },
    define: {
      ...processEnvDefinitions,
      global: {},
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
  };
});
