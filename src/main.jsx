import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SupabaseProvider } from './supabase/context/index.jsx'
import { UserContextProvider } from './context/UserContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <SupabaseProvider>
        <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </UserContextProvider>
      </SupabaseProvider>
    
    
  </StrictMode>,
)
