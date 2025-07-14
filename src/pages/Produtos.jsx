import { useState } from 'react';
import ModalCadastroProduto from '../components/ModalCadastroProduto';


const Produtos = () => {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Produto Exemplo 1',
      especialidade: 'Especialidade 1',
      descricao: 'Descrição do produto 1',
      quantidade: '10',
      unidadeMedida: 'un',
      precoUnitario: '19.99'
    },
    {
      id: 2,
      nome: 'Produto Exemplo 2',
      especialidade: 'Especialidade 2',
      descricao: 'Descrição do produto 2',
      quantidade: '5',
      unidadeMedida: 'kg',
      precoUnitario: '25.50'
    }
  ]);

  const handleAbrirModalExclusao = () => {
    setProdutoSelecionado(produtos[0]);
    setModalExcluirAberto(true);
  };

  const handleConfirmarExclusao = async () => {
    try {
      setProdutos(produtos.filter(p => p.id !== produtoSelecionado.id));
      setModalExcluirAberto(false);
      setProdutoSelecionado(null);
      
      console.log('Produto excluído com sucesso!');
    } catch (erro) {
      console.error('Erro ao excluir produto:', erro);
    }
  };

  return (
    <div id="blocoprodutos">
      <div className="boxprodutos" onClick={() => setModalCadastroAberto(true)} style={{ cursor: 'pointer' }}>
        <img src="./src/images/cadastrarfornecedor.png" className="imgboxprodutos" alt="Cadastrar produto" />
        <h3>Cadastrar Produto</h3>
      </div>

      <div className="boxprodutos" onClick={() => setModalListarAberto(true)} style={{ cursor: 'pointer' }}>
        <img src="./src/images/listarfornecedor.png" className="imgboxprodutos" alt="Listar produto" />
        <h3>Listar Produtos</h3>
      </div>

      <div className="boxprodutos" onClick={() => setModalEditarAberto(true)} style={{ cursor: 'pointer' }}>
        <img src="./src/images/editarfornecedor.png" className="imgboxprodutos" alt="Editar produto" />
        <h3>Editar Produto</h3>
      </div>

      <div className="boxprodutos" onClick={handleAbrirModalExclusao} style={{ cursor: 'pointer' }}>
        <img src="./src/images/excluirfornecedor.png" className="imgboxprodutos" alt="Excluir produto" />
        <h3>Excluir Produto</h3>
      </div>

      {modalCadastroAberto && (
        <ModalCadastroProduto 
          onClose={() => setModalCadastroAberto(false)} 
          onSave={(novoProduto) => {
            setProdutos([...produtos, { ...novoProduto, id: produtos.length + 1 }]);
            setModalCadastroAberto(false);
          }} 
        />
      )}

    </div>
  );
};

export default Produtos;