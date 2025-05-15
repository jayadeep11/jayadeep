import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aboutme from './components/About/Aboutme.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <Aboutme />,
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
