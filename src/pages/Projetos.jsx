import { useState } from 'react';
import ModalCadastroProjeto from '../components/ModalCadastroProjeto';
import ModalEditarProjeto from '../components/ModalEditarProjeto';
import ModalListarProjeto from '../components/ModalListarProjeto';

const Projetos = () => {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [modalListarAberto, setModalListarAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const [projetos, setProjetos] = useState([
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
  ]);

  const handleSalvarProjeto = (novoProjeto) => {
    const novoId = `proj0${projetos.length + 1}`;
    setProjetos([...projetos, { ...novoProjeto, id: novoId }]);
    setModalCadastroAberto(false);
  };

  const handleEditarProjeto = (projetoEditado) => {
    setProjetos(projetos.map(p => 
      p.id === projetoEditado.id ? projetoEditado : p
    ));
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
        className="boxprojetos" 
        onClick={() => setModalListarAberto(true)}
        style={{ cursor: 'pointer' }}
      >
        <img src="./src/images/listarprojeto.png" className="imgboxprojetos" alt="Listar projetos" />
        <h3>Listar Projetos</h3>
      </div>

      {/* Botão Editar */}
      <div 
        className="boxprojetos" 
        onClick={() => handleAbrirModalEdicao(projetos[0])}
        style={{ cursor: 'pointer' }}
      >
        <img src="./src/images/editarprojeto.png" className="imgboxprojetos" alt="Editar projeto" />
        <h3>Editar Projeto</h3>
      </div>

      <div className="boxprojetos">
        <img src="./src/images/excluirprojeto.png" className="imgboxprojetos" alt="Excluir projeto" />
        <h3>Excluir Projeto</h3>
      </div>

      {modalCadastroAberto && (
        <ModalCadastroProjeto 
          onClose={() => setModalCadastroAberto(false)}
          onSave={handleSalvarProjeto}
        />
      )}

      {modalListarAberto && (
        <ModalListarProjeto 
          onClose={() => setModalListarAberto(false)}
          projetos={projetos}
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