import { Link } from 'react-router-dom';

const LocalArmazenamento = () => {
  return (
    <div id="blocoarmazenamento">
      <div className="boxarmazenamento">
        <img src="./src/images/cadastrararmazenamento.png" className="imgboxarmazenamento" alt="Cadastrar local de armazenamento" />
        <h3><Link to="/cadastrar-local">Cadastrar Local</Link></h3>
      </div>
      <div className="boxarmazenamento">
        <img src="./src/images/listararmazenamento.png" className="imgboxarmazenamento" alt="Listar locais de armazenamento" />
        <h3><Link to="/listar-locais">Listar Locais</Link></h3>
      </div>
      <div className="boxarmazenamento">
        <img src="./src/images/editararmazenamento.png" className="imgboxarmazenamento" alt="Editar local de armazenamento" />
        <h3><Link to="/editar-local">Editar Local</Link></h3>
      </div>
      <div className="boxarmazenamento">
        <img src="./src/images/excluirarmazenamento.png" className="imgboxarmazenamento" alt="Excluir local de armazenamento" />
        <h3><Link to="/excluir-local">Excluir Local</Link></h3>
      </div>
    </div>
  );
};

export default LocalArmazenamento;
