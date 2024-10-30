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

    remotes: {
      reactRemoteApp: "http://localhost:5001/assets/remoteEntry.js",
      angularRemoteApp: "http://localhost:5002/remoteEntry.js",
    },
    shared: ["react", "react-dom"],
  })],
})
