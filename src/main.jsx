import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Route.jsx'
import 'animate.css';
import AuthProvider from './Provider/AuthProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
