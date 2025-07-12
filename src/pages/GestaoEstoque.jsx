import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalCadastroProduto from '../components/ModalCadastroProduto';

const GestaoEstoque = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSaveProduto = (produtoData) => {
    console.log('Produto cadastrado:', produtoData);
    setShowModal(false);
  };

  return (
    <>
      <div id="blocogestao">
        <div 
          className="boxgestao" 
          onClick={() => setShowModal(true)}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="./src/images/cadastrarproduto.png" 
            className="imgboxgestao" 
            alt="Cadastrar Produto" 
          />
          <h3>Cadastrar Produto</h3>
        </div>
        
        <div className="boxgestao">
          <Link to="/listar-estoque" className="boxgestao-link">
            <img 
              src="./src/images/listarestoque.png" 
              className="imgboxgestao" 
              alt="Listar Estoque" 
            />
            <h3>Listar Estoque</h3>
          </Link>
        </div>
      </div>

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