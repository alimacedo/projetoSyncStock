import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
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