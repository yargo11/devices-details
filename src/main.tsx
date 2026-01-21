import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./common/hooks/data/react-query.ts";
import QuatiProvider from "./provider/QuatiProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuatiProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </QuatiProvider>
  </StrictMode>,
);
