// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ResponsiveLayout from './components/Layout';
import MapWrapper from './components/MapWrapper/MapWrapper.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <App />
    <ResponsiveLayout />
  // </StrictMode>,
)
