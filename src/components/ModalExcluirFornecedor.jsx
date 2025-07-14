import { useState } from 'react';

const ModalExcluirFornecedor = ({ fornecedores, fornecedor, onConfirm, onClose, estaExcluindo }) => {
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(fornecedor || null);

  const handleConfirmar = async () => {
    if (!fornecedorSelecionado) return;
    await onConfirm(fornecedorSelecionado.id);
  };

  return (
    <div className="fundo-modal-excluirFornecedor">
      <div className="caixa-modal-excluirFornecedor">
        <button 
          className="fechar-modal-excluirFornecedor" 
          onClick={onClose}
          disabled={estaExcluindo}
        >
          ×
        </button>
        
        <h2 className="titulo-modal-excluirFornecedor">Excluir Fornecedor</h2>
        
        <div className="conteudo-modal-excluirFornecedor">
          {!fornecedor && fornecedores && (
            <div className="lista-fornecedores-exclusao">
              <h3>Selecione o fornecedor para excluir:</h3>
              <ul>
                {fornecedores.map(fornecedor => (
                  <li 
                    key={fornecedor.id} 
                    className={`item-fornecedor ${fornecedorSelecionado?.id === fornecedor.id ? 'selecionado' : ''}`}
                    onClick={() => setFornecedorSelecionado(fornecedor)}
                  >
                    <span>{fornecedor.nomeFantasia || fornecedor.razaoSocial}</span>
                    <span className="fornecedor-detalhes">
                      {fornecedor.cnpj} • {fornecedor.email}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <p className="aviso-exclusao">
            {fornecedorSelecionado 
              ? `Você está prestes a excluir: ${fornecedorSelecionado.nomeFantasia || fornecedorSelecionado.razaoSocial}`
              : 'Selecione um fornecedor para excluir'}
          </p>
          
          <div className="acoes-form">
            <button 
              type="button" 
              onClick={handleConfirmar}
              className="btn-excluir-modalExcluirFornecedor"
              disabled={estaExcluindo || !fornecedorSelecionado}
            >
              {estaExcluindo ? 'Excluindo...' : 'Confirmar'}
            </button>
            
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-cancelar-modalExcluirFornecedor"
              disabled={estaExcluindo}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalExcluirFornecedor;