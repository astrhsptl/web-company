import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from '@/app/Application.tsx'
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </QueryClientProvider>
  </BrowserRouter>,
)