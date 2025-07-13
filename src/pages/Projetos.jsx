import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalCadastroProjeto from '../components/ModalCadastroProjeto';

const Projetos = () => {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);

  const handleSalvarProjeto = (novoProjeto) => {
    console.log('Novo projeto:', novoProjeto);
    setModalCadastroAberto(false);
  };

  return (
    <div id="blocoprojetos">
      <div 
        className="boxprojetos" 
        onClick={() => setModalCadastroAberto(true)}
        style={{ cursor: 'pointer' }}
      >
        <img src="./src/images/cadastrarprojeto.png" className="imgboxprojetos" alt="Cadastrar projeto" />
        <h3>Cadastrar Projeto</h3>
      </div>

      <div className="boxprojetos">
        <img src="./src/images/listarprojeto.png" className="imgboxprojetos" alt="Listar projetos" />
        <h3><Link to="/listar-projeto">Listar Projeto</Link></h3>
      </div>
      <div className="boxprojetos">
        <img src="./src/images/editarprojeto.png" className="imgboxprojetos" alt="Editar projeto" />
        <h3><Link to="/editar-projeto">Editar Projeto</Link></h3>
      </div>
      <div className="boxprojetos">
        <img src="./src/images/excluirprojeto.png" className="imgboxprojetos" alt="Excluir projeto" />
        <h3><Link to="/excluir-projeto">Excluir Projeto</Link></h3>
      </div>

      {modalCadastroAberto && (
        <ModalCadastroProjeto 
          onClose={() => setModalCadastroAberto(false)}
          onSave={handleSalvarProjeto}
        />
      )}
    </div>
  );
};

export default Projetos;