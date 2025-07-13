import { useState } from 'react';

const ModalListarProjeto = ({ onClose, projetos }) => {
  const [termoBusca, setTermoBusca] = useState('');

  const projetosFiltrados = projetos.filter(projeto =>
    projeto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
    projeto.numero.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div className="fundo-modal-listarProjeto">
      <div className="caixa-modal-listarProjeto">
        <button 
          className="fechar-modal-listarProjeto" 
          onClick={onClose}
        >
          ×
        </button>
        
        <h2 className="titulo-modal-listarProjeto">Lista de Projetos</h2>
        
        <div className="controles-busca">
          <div className="grupo-busca">
            <input
              type="text"
              placeholder="Buscar projetos..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="entrada-busca"
            />
          </div>
        </div>

        <div className="tabela-container">
          {projetosFiltrados.length > 0 ? (
            <table className="tabela-projeto">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Número</th>
                  <th>Centro de Custo</th>
                </tr>
              </thead>
              <tbody>
                {projetosFiltrados.map((projeto) => (
                  <tr key={projeto.id}>
                    <td>{projeto.id}</td>
                    <td>{projeto.nome}</td>
                    <td>{projeto.numero}</td>
                    <td>{projeto.centroCusto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="sem-resultados">
              Nenhum projeto encontrado
            </div>
          )}
        </div>

        <div className="rodape-modal">
          <button onClick={onClose} className="btn-fechar-listarprojeto">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalListarProjeto;