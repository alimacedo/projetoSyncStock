import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalCadastroProduto from './ModalCadastroProduto';

const GestaoEstoque = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSaveProduto = (produtoData) => {
    console.log('Produto cadastrado:', produtoData);
    // Aqui você faria a chamada para sua API:
    // api.cadastrarProduto(produtoData);
    setShowModal(false); // Fecha o modal após salvar
  };

  return (
    <>
      <div id="blocogestao">
        {/* Box Cadastrar Produto - agora com onClick para abrir modal */}
        <div 
          className="boxgestao" 
          onClick={() => setShowModal(true)}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="./src/assets/images/cadastrarproduto.png" 
            className="imgboxgestao" 
            alt="Cadastrar Produto" 
          />
          <h3>Cadastrar Produto</h3>
        </div>
        
        {/* Box Listar Estoque (mantém o Link tradicional) */}
        <div className="boxgestao">
          <Link to="/listar-estoque" className="boxgestao-link">
            <img 
              src="./src/assets/images/listarestoque.png" 
              className="imgboxgestao" 
              alt="Listar Estoque" 
            />
            <h3>Listar Estoque</h3>
          </Link>
        </div>
      </div>

      {/* Modal de Cadastro */}
      {showModal && (
        <ModalCadastroProduto
          onClose={() => setShowModal(false)}
          onSave={handleSaveProduto}
        />
      )}
    </>
  );
};

export default GestaoEstoque;