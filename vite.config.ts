import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // ? dts is used to help generate typescript declaration file(s)
  plugins: [dts({ rollupTypes: true }), react()],
  build: {
    lib: {
      // ? library entry point
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // ? make sure to externalize deps that shouldn't be bundled
      // ? into your library
      external: ["react", "react-dom"],
    },
  },
});
