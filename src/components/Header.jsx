import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/local-armazenamento':
        return 'Local de Armazenamento';
      case '/nota-fiscal':
        return 'Nota Fiscal';
      case '/produtos':
        return 'Produtos';
      case '/fornecedores':
        return 'Fornecedores';
      case '/projetos':
        return 'Projetos';
      case '/gestao-estoque':
        return 'Gestão de Estoque';
      default:
        return 'Sistema de controle de estoque de peças';
    }
  };

  return (
    <header>
      <h1>SyncStock</h1>
      <p>{getTitle()}</p>
    </header>
  );
};

export default Header;