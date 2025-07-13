import { useState } from 'react';

const ModalExcluirProjeto = ({ projetos, onConfirm, onClose, estaExcluindo }) => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const handleConfirmar = async () => {
    if (!projetoSelecionado) return;
    await onConfirm(projetoSelecionado.id);
  };

  return (
    <div className="fundo-modal-excluirProjeto">
      <div className="caixa-modal-excluirProjeto">
        <button 
          className="fechar-modal-excluirProjeto" 
          onClick={onClose}
          disabled={estaExcluindo}
        >
          ×
        </button>
        
        <h2 className="titulo-modal-excluirProjeto">Excluir Projeto</h2>
        
        <div className="conteudo-modal-excluirProjeto">
          <div className="lista-projetos-exclusao">
            <h3>Selecione o projeto para excluir:</h3>
            <ul>
              {projetos.map(projeto => (
                <li 
                  key={projeto.id} 
                  className={`item-projeto ${projetoSelecionado?.id === projeto.id ? 'selecionado' : ''}`}
                  onClick={() => setProjetoSelecionado(projeto)}
                >
                  <span>{projeto.nome}</span>
                  <span className="projeto-detalhes">
                    {projeto.numero}{projeto.responsavel}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <p className="aviso-exclusao">
            {projetoSelecionado 
              ? `Você está prestes a excluir: ${projetoSelecionado.nome}`
              : 'Selecione um projeto para excluir'}
          </p>
          
          <div className="acoes-form">
            <button 
              type="button" 
              onClick={handleConfirmar}
              className="btn-excluir-modalExcluirProjeto"
              disabled={estaExcluindo || !projetoSelecionado}
            >
              {estaExcluindo ? 'Excluindo...' : 'Confirmar'}
            </button>
            
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-cancelar-modalExcluirProjeto"
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

export default ModalExcluirProjeto;