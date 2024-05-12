
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartProvider from './contexts/CartContext.tsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CartProvider>
    
  </QueryClientProvider>
  
)
