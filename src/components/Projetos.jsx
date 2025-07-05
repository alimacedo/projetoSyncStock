import { Link } from 'react-router-dom';

const Projetos = () => {
  return (
    <div id="bloco">
      <div className="box">
        <img src="./src/assets/images/cadastrarprojeto.png" className="imgbox" alt="Cadastrar projeto" />
        <h3><Link to="/cadastrar-projeto">Cadastrar projeto</Link></h3>
      </div>
      <div className="box">
        <img src="./src/assets/images/listarprojeto.png" className="imgbox" alt="Listar projetos" />
        <h3><Link to="/listar-projetos">Listar projeto</Link></h3>
      </div>
      <div className="box">
        <img src="./src/assets/images/editarprojeto.png" className="imgbox" alt="Editar projeto" />
        <h3><Link to="/editar-projeto">Editar projeto</Link></h3>
      </div>
      <div className="box">
        <img src="./src/assets/images/excluirprojeto.png" className="imgbox" alt="Excluir projeto" />
        <h3><Link to="/excluir-projeto">Excluir projeto</Link></h3>
      </div>
    </div>
  );
};

export default Projetos;