import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="blocohome">
        <div className="boxhome">
          <img src="./src/assets/images/gestao.png" className="imgboxhome" alt="Gestão de estoque" />
          <h3><Link to="/gestao-estoque">Gestão de estoque</Link></h3>
        </div>
        <div className="boxhome">
          <img src="./src/assets/images/projeto.png" className="imgboxhome" alt="Projetos" />
          <h3><Link to="/projetos">Projetos</Link></h3>
        </div>
        <div className="boxhome">
          <img src="./src/assets/images/fornecedor.png" className="imgboxhome" alt="Fornecedores" />
          <h3><Link to="/fornecedores">Fornecedores</Link></h3>
        </div> 
      </div>
    </>
  );
};

export default Home;