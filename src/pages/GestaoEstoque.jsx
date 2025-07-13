import { useState } from 'react';
import ModalCadastroProduto from '../components/ModalCadastroProduto';
import ModalListarEstoque from '../components/ModalListarEstoque';

const GestaoEstoque = () => {
  const [showCadastroModal, setShowCadastroModal] = useState(false);
  const [showListarModal, setShowListarModal] = useState(false);

  const [produtos, setProdutos] = useState([
    {
      nome: 'Parafuso Sextavado',
      codigo: 'PSX-001',
      quantidade: 15,
      categoria: 'Parafusos',
      fornecedor: 'Fornecedor A',
      dataEntrada: '2025-07-09',
      localizacao: 'Prateleira B3',
      status: 'Ativo'
    },
    
  ]);

  const handleSaveProduto = (produtoData) => {
    console.log('Produto cadastrado:', produtoData);
    
    setProdutos([...produtos, produtoData]);
    setShowCadastroModal(false);
  };

  return (
    <>
      <div id="blocogestao">
        <div 
          className="boxgestao" 
          onClick={() => setShowCadastroModal(true)}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="./src/images/cadastrarproduto.png" 
            className="imgboxgestao" 
            alt="Cadastrar Produto" 
          />
          <h3>Cadastrar Produto</h3>
        </div>
        
        <div 
          className="boxgestao" 
          onClick={() => setShowListarModal(true)}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="./src/images/listarestoque.png" 
            className="imgboxgestao" 
            alt="Listar Estoque" 
          />
          <h3>Listar Estoque</h3>
        </div>
      </div>

      {showCadastroModal && (
        <ModalCadastroProduto
          onClose={() => setShowCadastroModal(false)}
          onSave={handleSaveProduto}
        />
      )}

      {showListarModal && (
        <ModalListarEstoque
          onClose={() => setShowListarModal(false)}
          produtos={produtos}
        />
      )}
    </>
  );
};

export default GestaoEstoque;