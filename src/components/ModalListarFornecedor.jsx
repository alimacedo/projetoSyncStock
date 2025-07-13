import { useState } from 'react';

const ModalListarFornecedor = ({ 
  fornecedores, 
  onEditar, 
  onExcluir, 
  onClose 
}) => {
  const [termoBusca, setTermoBusca] = useState('');

  const fornecedoresFiltrados = fornecedores.filter(fornecedor =>
    fornecedor.razaoSocial.toLowerCase().includes(termoBusca.toLowerCase()) ||
    fornecedor.nomeFantasia?.toLowerCase().includes(termoBusca.toLowerCase()) ||
    fornecedor.cnpj?.includes(termoBusca) ||
    fornecedor.cpf?.includes(termoBusca)
  );

  return (
    <div className="fundo-modal-listarFornecedor">
      <div className="caixa-modal-listarFornecedor">
        <button 
          className="fechar-modal-listarFornecedor" 
          onClick={onClose}
        >
          ×
        </button>
        
        <h2 className="titulo-modal-listarFornecedor">Lista de Fornecedores</h2>
        
        <div className="controles-busca">
          <div className="grupo-busca">
            <input
              type="text"
              placeholder="Buscar fornecedores..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="entrada-busca"
            />
          </div>
        </div>

        <div className="tabela-container">
          {fornecedoresFiltrados.length > 0 ? (
            <table className="tabela-fornecedor">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Razão Social</th>
                  <th>Nome Fantasia</th>
                  <th>CPF/CNPJ</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {fornecedoresFiltrados.map((fornecedor) => (
                  <tr key={fornecedor.id}>
                    <td>{fornecedor.id}</td>
                    <td>{fornecedor.razaoSocial}</td>
                    <td>{fornecedor.nomeFantasia || '-'}</td>
                    <td>{fornecedor.cnpj || fornecedor.cpf || '-'}</td>
                    <td className="acoes-tabela">
                      <button 
                        onClick={() => onEditar(fornecedor)}
                        className="btn-editar"
                      >
                        Editar
                      </button>
                      <button 
                        onClick={() => onExcluir(fornecedor)}
                        className="btn-excluir"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="sem-resultados">
              Nenhum fornecedor encontrado
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ModalListarFornecedor;