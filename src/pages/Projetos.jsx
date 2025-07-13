import { useState } from 'react';
import ModalCadastroProjeto from '../components/ModalCadastroProjeto';
import ModalListarProjeto from '../components/ModalListarProjeto';
import ModalEditarProjeto from '../components/ModalEditarProjeto';
import ModalExcluirProjeto from '../components/ModalExcluirProjeto';

const Projetos = () => {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modalListarAberto, setModalListarAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [estaExcluindo, setEstaExcluindo] = useState(false);
  
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  
  const [projetos, setProjetos] = useState([
    {
      id: 'proj01',
      nome: 'Projeto Alpha',
      numero: 'LSHM5469',
      centroCusto: 'cc01'
    },
    {
      id: 'proj02',
      nome: 'Projeto Beta',
      numero: 'PWBA2533',
      centroCusto: 'cc02'
    }
  ]);

  const handleSalvarProjeto = (novoProjeto) => {
    const novoId = `proj0${projetos.length + 1}`;
    setProjetos([...projetos, { 
      ...novoProjeto, 
      id: novoId,
      status: 'ativo'
    }]);
    setModalCadastroAberto(false);
  };

  const handleEditarProjeto = (projetoEditado) => {
    setProjetos(projetos.map(p => 
      p.id === projetoEditado.id ? projetoEditado : p
    ));
    setModalEditarAberto(false);
  };

  const handleExcluirProjeto = async (projetoId) => {
    setEstaExcluindo(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjetos(projetos.filter(p => p.id !== projetoId));
      setModalExcluirAberto(false);
    } catch (error) {
      console.error('Erro ao excluir projeto:', error);
    } finally {
      setEstaExcluindo(false);
    }
  };

  const abrirModalExclusao = () => {
    setModalExcluirAberto(true);
  };

  const abrirModalEdicao = (projeto) => {
    setProjetoSelecionado(projeto);
    setModalEditarAberto(true);
  };

  return (
    <div id="blocoprojetos">
      <div 
        className="boxprojetos" 
        onClick={() => setModalCadastroAberto(true)}
      >
        <img src="./src/images/cadastrarprojeto.png" className="imgboxprojetos" alt="Cadastrar projeto" />
        <h3>Cadastrar Projeto</h3>
      </div>

      <div 
        className="boxprojetos" 
        onClick={() => setModalListarAberto(true)}
      >
        <img src="./src/images/listarprojeto.png" className="imgboxprojetos" alt="Listar projetos" />
        <h3>Listar Projetos</h3>
      </div>

      <div 
        className="boxprojetos" 
        onClick={() => abrirModalEdicao(projetos[0])}
      >
        <img src="./src/images/editarprojeto.png" className="imgboxprojetos" alt="Editar projeto" />
        <h3>Editar Projeto</h3>
      </div>

      <div 
        className="boxprojetos" 
        onClick={abrirModalExclusao}
      >
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
          projetos={projetos}
          onEditar={(projeto) => abrirModalEdicao(projeto)}
          onExcluir={(projeto) => {
            setProjetoSelecionado(projeto);
            setModalExcluirAberto(true);
          }}
          onClose={() => setModalListarAberto(false)}
        />
      )}

      {modalEditarAberto && projetoSelecionado && (
        <ModalEditarProjeto 
          projetoParaEditar={projetoSelecionado}
          onSave={handleEditarProjeto}
          onClose={() => setModalEditarAberto(false)}
        />
      )}

      {modalExcluirAberto && (
        <ModalExcluirProjeto
          projetos={projetos}
          onConfirm={handleExcluirProjeto}
          onClose={() => setModalExcluirAberto(false)}
          estaExcluindo={estaExcluindo}
        />
      )}
    </div>
  );
};

export default Projetos;