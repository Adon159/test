// filepath: c:\Users\User\Projects\react-app\src\main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Remove or comment this line:
// import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)