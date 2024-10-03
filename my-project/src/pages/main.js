import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './_app.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './index.js';
import Sobremim from '../components/SobreMim/Sobremim.js';
import Contato from '../components/Contato/Contato.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path:'/sobremim', element: <Sobremim/>},
      {path:'/contato', element: <Contato/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)