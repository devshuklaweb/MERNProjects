import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './store/auth.jsx'
// for importing toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <AuthProvider>  
    {/* AuthProvider is a context api provider */}
  <StrictMode>
      <App />
      <ToastContainer />
    </StrictMode>
  </AuthProvider>,
)
