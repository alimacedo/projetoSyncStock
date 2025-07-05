import { Link } from 'react-router-dom';

const Projetos = () => {
  return (
    <div id="blocoprojetos">
      <div className="boxprojetos">
        <img src="./src/assets/images/cadastrarprojeto.png" className="imgboxprojetos" alt="Cadastrar projeto" />
        <h3><Link to="/cadastrar-projeto">Cadastrar projeto</Link></h3>
      </div>
      <div className="boxprojetos">
        <img src="./src/assets/images/listarprojeto.png" className="imgboxprojetos" alt="Listar projetos" />
        <h3><Link to="/listar-projetos">Listar projeto</Link></h3>
      </div>
      <div className="boxprojetos">
        <img src="./src/assets/images/editarprojeto.png" className="imgboxprojetos" alt="Editar projeto" />
        <h3><Link to="/editar-projeto">Editar projeto</Link></h3>
      </div>
      <div className="boxprojetos">
        <img src="./src/assets/images/excluirprojeto.png" className="imgboxprojetos" alt="Excluir projeto" />
        <h3><Link to="/excluir-projeto">Excluir projeto</Link></h3>
      </div>
    </div>
  );
};

export default Projetos;