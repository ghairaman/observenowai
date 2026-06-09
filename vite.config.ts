import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
<<<<<<< HEAD
=======
  base: "/", 
>>>>>>> cf21f72938519099f67a55c3b61f7a040e614ccc
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})