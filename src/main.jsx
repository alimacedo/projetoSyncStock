import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import GestaoEstoque from './pages/GestaoEstoque';
import Projetos from './pages/Projetos';
import Fornecedores from './pages/Fornecedores';
import Produtos from './pages/Produtos';
import NotaFiscal from './pages/NotaFiscal';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LoginForm /> },
      { path: "home", element: <Home /> },
      { path: "gestao-estoque", element: <GestaoEstoque /> },
      { path: "projetos", element: <Projetos /> },
      { path: "fornecedores", element: <Fornecedores /> },
      { path: "produtos", element: <Produtos /> },
      { path: "nota-fiscal", element: <NotaFiscal /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);