import React from "react";
import ReactDOM from "react-dom/client";
import Application from "@/app/Application.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Application />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
