import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalCadastroProjeto from '../components/ModalCadastroProjeto';
import ModalEditarProjeto from '../components/ModalEditarProjeto';

const Projetos = () => {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const projetosExemplo = [
    {
      id: 'proj01',
      nome: 'Projeto Alpha',
      numero: 'PA-2023-001',
      centroCusto: 'cc01'
    },
    {
      id: 'proj02',
      nome: 'Projeto Beta',
      numero: 'PB-2023-002',
      centroCusto: 'cc02'
    }
  ];

  const handleSalvarProjeto = (novoProjeto) => {
    console.log('Novo projeto:', novoProjeto);
    setModalCadastroAberto(false);
  };

  const handleEditarProjeto = (projetoEditado) => {
    console.log('Projeto editado:', projetoEditado);
    setModalEditarAberto(false);
  };

  const handleAbrirModalEdicao = (projeto) => {
    setProjetoSelecionado(projeto);
    setModalEditarAberto(true);
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

      <div 
        className="boxprojetos">
        <img src="./src/images/listarprojeto.png" className="imgboxprojetos" alt="Listar projeto" />
        <h3>Listar Projeto</h3>
      </div>

      <div 
        className="boxprojetos" 
        onClick={() => handleAbrirModalEdicao(projetosExemplo[0])}
        style={{ cursor: 'pointer' }}
      >
        <img src="./src/images/editarprojeto.png" className="imgboxprojetos" alt="Editar projeto" />
        <h3>Editar Projeto</h3>
      </div>

      <div 
        className="boxprojetos">
        <img src="./src/images/excluirprojeto.png" className="imgboxprojetos" alt="Excluir projeto" />
        <h3>Excluir Projeto</h3>
      </div>

      {modalCadastroAberto && (
        <ModalCadastroProjeto 
          onClose={() => setModalCadastroAberto(false)}
          onSave={handleSalvarProjeto}
        />
      )}

      {modalEditarAberto && projetoSelecionado && (
        <ModalEditarProjeto 
          onClose={() => setModalEditarAberto(false)}
          onSave={handleEditarProjeto}
          projetoParaEditar={projetoSelecionado}
        />
      )}
    </div>
  );
};

export default Projetos;