import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRouter from '@/app/BaseRouter.tsx'
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <BaseRouter />
      </React.StrictMode>
    </QueryClientProvider>
  </BrowserRouter>,
)