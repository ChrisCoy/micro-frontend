import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    // possible values: 'esnext' | 'esnext' | 'es5'
    target: "esnext",
  },
  plugins: [react(), federation({
    name: "remote-app",
    filename: "remoteEntry.js",
    exposes: {
      "./RemoteReactHeader": "./src/components/remote-header.tsx",
      "./cn": "./src/utils/cn.ts",
    },
    shared: ["react", "react-dom"],
  })],
})
