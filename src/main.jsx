import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@fontsource/poppins/300.css"; // Light weight
import "@fontsource/poppins/400.css"; // Regular weight
import "@fontsource/poppins/600.css"; // Semi-Bold weight

createRoot(document.getElementById('root')).render(
    <App />
)
