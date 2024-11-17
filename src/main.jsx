import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './Register/Register.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
       {
        path: '/',
        element: <Home></Home>,
       },
       {
        path: 'login',
        element: <Login></Login>
       },
       {
        path: 'register',
        element: <Register></Register>
       },
       {
        path: 'signUp',
        element: <SignUp></SignUp>
       }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

<RouterProvider router={router} />
  

  </StrictMode>,
)
