import React from 'react'
import ReactDOM from 'react-dom/client'


import { BrowserRouter } from 'react-router-dom'


import { AuthProvider } from './contexts/contextprovider.tsx';
import App from "./App";


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
   
    <BrowserRouter>

    <AuthProvider>
    <App/>
    </AuthProvider>
   
    </BrowserRouter>
    
    {/* <RouterProvider router = {router}/> */}
   
  
  </React.StrictMode>,
)
