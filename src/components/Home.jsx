import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div id="bloco">
        <div className="box">
          <img src="./src/assets/images/gestao.png" className="imgbox" alt="Gestão de estoque" />
          <h3><Link to="/gestao-estoque">Gestão de estoque</Link></h3>
        </div>
        <div className="box">
          <img src="./src/assets/images/projeto.png" className="imgbox" alt="Projetos" />
          <h3><Link to="/projetos">Projetos</Link></h3>
        </div>
        <div className="box">
          <img src="./src/assets/images/fornecedor.png" className="imgbox" alt="Fornecedores" />
          <h3><Link to="/fornecedores">Fornecedores</Link></h3>
        </div> 
      </div>
    </>
  );
};

export default Home;