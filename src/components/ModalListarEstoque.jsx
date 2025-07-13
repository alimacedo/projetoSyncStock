import { useState, useEffect } from 'react';

const ModalListarEstoque = ({ onClose, produtos }) => {
  const [filtros, setFiltros] = useState({
    status: 'Todos',
    categoria: '',
    fornecedor: ''
  });

  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);

  const statusOptions = ['Todos', 'Ativo', 'Inativo', 'Esgotado', 'Em Estoque'];

  useEffect(() => {
    let resultado = [...produtos];

    if (filtros.status !== 'Todos') {
      resultado = resultado.filter(p => p.status === filtros.status);
    }

    if (filtros.categoria) {
      resultado = resultado.filter(p =>
          p.categoria.toLowerCase().includes(filtros.categoria.toLowerCase())
      );
    }

    if (filtros.fornecedor) {
      resultado = resultado.filter(p =>
          p.fornecedor.toLowerCase().includes(filtros.fornecedor.toLowerCase())
      );
    }

    setProdutosFiltrados(resultado);
  }, [filtros, produtos]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  return (
      <div className="fundo-modal-listarEstoque">
        <div className="caixa-modal-listarEstoque">
          <button className="fechar-modal-listarEstoque" onClick={onClose}>×</button>
          <h2 className="titulo-modal-listarEstoque">Produtos em Estoque</h2>

          <div className="container-listarEstoque">
            <div className="grupo-listarEstoque">
              <label>Status:</label>
              <select
                  name="status"
                  value={filtros.status}
                  onChange={handleFilterChange}
                  className="seletor-listarEstoque"
              >
                {statusOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="grupo-listarEstoque">
              <label>Categoria:</label>
              <input
                  type="text"
                  name="categoria"
                  value={filtros.categoria}
                  onChange={handleFilterChange}
                  placeholder="Filtrar por categoria"
                  className="entrada-listarEstoque"
              />
            </div>

            <div className="grupo-listarEstoque">
              <label>Fornecedor:</label>
              <input
                  type="text"
                  name="fornecedor"
                  value={filtros.fornecedor}
                  onChange={handleFilterChange}
                  placeholder="Filtrar por fornecedor"
                  className="entrada-listarEstoque"
              />
            </div>
          </div>

          <div className="container-tabela-listarEstoque">
            <table className="estoque-table-listarEstoque">
              <thead>
              <tr>
                <th>Nome</th>
                <th>Código</th>
                <th>Quantidade</th>
                <th>Categoria</th>
                <th>Fornecedor</th>
                <th>Data Entrada</th>
                <th>Localização</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
              {produtosFiltrados.map(produto => (
                  <tr key={produto.codigo}>
                    <td>{produto.nome}</td>
                    <td>{produto.codigo}</td>
                    <td className={produto.quantidade < 10 ? 'estoque-baixo' : ''}>
                      {produto.quantidade}
                    </td>
                    <td>{produto.categoria}</td>
                    <td>{produto.fornecedor}</td>
                    <td>{new Date(produto.dataEntrada).toLocaleDateString()}</td>
                    <td>{produto.localizacao}</td>
                    <td>
                    <span className={`indicador-status ${produto.status.toLowerCase().replace(' ', '-')}`}>
                      {produto.status}
                    </span>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default ModalListarEstoque;