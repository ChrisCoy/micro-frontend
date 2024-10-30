import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RemoteHeader } from "./components/remote-header";

const App = () => {
  return <RemoteHeader className="123" />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
