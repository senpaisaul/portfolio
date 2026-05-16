import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "three-stdlib"],
          r3f: [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
            "@react-three/rapier",
          ],
          gsap: ["gsap"],
        },
      },
    },
    // Increase chunk warning limit since Three.js is inherently large
    chunkSizeWarningLimit: 1000,
  },
});
