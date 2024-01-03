import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './NavBar/Home paige/Home.jsx';
import Login from './Login and regster paige/Login.jsx';
import Regster from './Login and regster paige/Regster.jsx';
import AuthProvider from './Auth provider/AuthProvider.jsx';
import PraivetRoute from './Auth provider/PraivetRoute.jsx';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <PraivetRoute><Home></Home></PraivetRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/regster',
    element: <Regster></Regster>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
