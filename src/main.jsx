import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import GestaoEstoque from './components/GestaoEstoque';
import './index.css';
import './styles/Login.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "home", element: <Home /> },
      { path: "gestao-estoque", element: <GestaoEstoque /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);