import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="blocohome">
        <div className="boxhome">
          <img src="./src/images/gestao.png" className="imgboxhome" alt="Gestão de estoque" />
          <h3><Link to="/gestao-estoque">Gestão estoque</Link></h3>
        </div>
        <div className="boxhome">
          <img src="./src/images/projeto.png" className="imgboxhome" alt="Projetos" />
          <h3><Link to="/projetos">Projetos</Link></h3>
        </div>
        <div className="boxhome">
          <img src="./src/images/fornecedor.png" className="imgboxhome" alt="Fornecedores" />
          <h3><Link to="/fornecedores">Fornecedores</Link></h3>
        </div>
        <div className="boxhome">
          <img src="./src/images/produto.png" className="imgboxhome" alt="Produtos" />
          <h3><Link to="/produtos">Produtos</Link></h3>
        </div>
        <div className="boxhome">
          <img src="./src/images/localarmazenamento.png" className="imgboxhome" alt="Armazenamento" />
          <h3><Link to="/armazenamento">Armazenamento</Link></h3>
        </div>
        <div className="boxhome">
          <img src="./src/images/notafiscal.png" className="imgboxhome" alt="notaFiscal" />
          <h3><Link to="/nota-fiscal">Nota Fiscal</Link></h3>
        </div>
      </div>
    </>
  );
};

export default Home;