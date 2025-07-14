import { useState } from 'react';
import ModalCadastroFornecedor from '../components/ModalCadastroFornecedor';
import ModalListarFornecedor from '../components/ModalListarFornecedor';
import ModalEditarFornecedor from '../components/ModalEditarFornecedor';

const Fornecedores = () => {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modalListarAberto, setModalListarAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  
  const [fornecedores, setFornecedores] = useState([
    {
      id: 'forn01',
      razaoSocial: 'Fornecedor A',
      nomeFantasia: 'Fornecedor ABC',
      endereco: 'Rua Teste, 123',
      email: 'contato@fornecedor.com',
      telefone: '(11) 9999-9999',
      cnpj: '12.345.678/0001-90',
      tipoPessoa: 'juridica'
    }
  ]);
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);

  const handleSalvarFornecedor = (novoFornecedor) => {
    setFornecedores([...fornecedores, novoFornecedor]);
    setModalCadastroAberto(false);
  };

  const handleEditarFornecedor = (fornecedorEditado) => {
    setFornecedores(fornecedores.map(f => 
      f.id === fornecedorEditado.id ? fornecedorEditado : f
    ));
    setModalEditarAberto(false);
  };

  const handleExcluirFornecedor = (fornecedorId) => {
    setFornecedores(fornecedores.filter(f => f.id !== fornecedorId));
    setModalExcluirAberto(false);
  };

  return (
    <div id="blocofornecedores">
      <div 
        className="boxfornecedores" 
        onClick={() => setModalCadastroAberto(true)}
      >
        <img src="./src/images/cadastrarfornecedor.png" className="imgboxfornecedores" alt="Cadastrar fornecedor" />
        <h3>Cadastrar Fornecedor</h3>
      </div>

      <div 
        className="boxfornecedores" 
        onClick={() => setModalListarAberto(true)}
      >
        <img src="./src/images/listarfornecedor.png" className="imgboxfornecedores" alt="Listar fornecedores" />
        <h3>Listar Fornecedores</h3>
      </div>

      <div 
        className="boxfornecedores" 
        onClick={() => {
          if (fornecedores.length > 0) {
            setFornecedorSelecionado(fornecedores[0]);
            setModalEditarAberto(true);
          }
        }}
      >
        <img src="./src/images/editarfornecedor.png" className="imgboxfornecedores" alt="Editar fornecedor" />
        <h3>Editar Fornecedor</h3>
      </div>

      <div 
        className="boxfornecedores" 
        onClick={() => {
          if (fornecedores.length > 0) {
            setFornecedorSelecionado(fornecedores[0]);
            setModalExcluirAberto(true);
          }
        }}
      >
        <img src="./src/images/excluirfornecedor.png" className="imgboxfornecedores" alt="Excluir fornecedor" />
        <h3>Excluir Fornecedor</h3>
      </div>

      {modalCadastroAberto && (
        <ModalCadastroFornecedor
          onClose={() => setModalCadastroAberto(false)}
          onSave={handleSalvarFornecedor}
        />
      )}

      {modalListarAberto && (
        <ModalListarFornecedor
          fornecedores={fornecedores}
          onEditar={(fornecedor) => {
            setFornecedorSelecionado(fornecedor);
            setModalEditarAberto(true);
          }}
          onExcluir={(fornecedor) => {
            setFornecedorSelecionado(fornecedor);
            setModalExcluirAberto(true);
          }}
          onClose={() => setModalListarAberto(false)}
        />
      )}

      {modalEditarAberto && fornecedorSelecionado && (
        <ModalEditarFornecedor
          fornecedorParaEditar={fornecedorSelecionado}
          onSave={handleEditarFornecedor}
          onClose={() => setModalEditarAberto(false)}
        />
      )}

      {modalExcluirAberto && fornecedorSelecionado && (
        <ModalExcluirFornecedor
          fornecedor={fornecedorSelecionado}
          onConfirm={() => handleExcluirFornecedor(fornecedorSelecionado.id)}
          onClose={() => setModalExcluirAberto(false)}
        />
      )}
    </div>
  );
};

export default Fornecedores;