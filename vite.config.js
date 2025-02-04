import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/drova-dubovi/",
  plugins: [react()],
  root: ".", // Корінь проєкту
});
