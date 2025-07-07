import { useState } from 'react';

const ModalCadastroProduto = ({ onClose, onSave }) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    codigo: '',
    fornecedor: '',
    categoria: '',
    quantidade: '',
    unidadeMedida: 'un'
  });

  // Opções de unidades de medida
  const unidadesMedida = [
    { value: 'un', label: 'Unidade' },
    { value: 'kg', label: 'Quilograma' },
    { value: 'g', label: 'Grama' },
    { value: 'l', label: 'Litro' },
    { value: 'm', label: 'Metro' }
  ];

  // Manipulador de alterações nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manipulador de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Chama a função de salvar do componente pai
    onClose(); // Fecha o modal
  };

  return (
    <div className="fundo-modal">
      <div className="caixa-modal">
        <button className="fechar-modal" onClick={onClose}>×</button>
        <h2 className="titulo-modal">Cadastrar Novo Produto</h2>
        
        <form onSubmit={handleSubmit} className="form-modal">
          <div className="grupo-form">
            <label htmlFor="nome" className="marca-form">Nome do Produto</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="entrada-form"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="codigo" className="marca-form">Código</label>
            <input
              type="text"
              id="codigo"
              name="codigo"
              className="entrada-form"
              value={formData.codigo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="fornecedor" className="marca-form">Fornecedor</label>
            <input
              type="text"
              id="fornecedor"
              name="fornecedor"
              className="entrada-form"
              value={formData.fornecedor}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="categoria" className="marca-form">Categoria</label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              className="entrada-form"
              value={formData.categoria}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="quantidade" className="marca-form">Quantidade em Estoque</label>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              className="entrada-form"
              value={formData.quantidade}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="unidadeMedida" className="marca-form">Unidade de Medida</label>
            <select
              id="unidadeMedida"
              name="unidadeMedida"
              className="seletor-form"
              value={formData.unidadeMedida}
              onChange={handleChange}
              required
            >
              {unidadesMedida.map((unidade) => (
                <option key={unidade.value} value={unidade.value}>
                  {unidade.label}
                </option>
              ))}
            </select>
          </div>

          <div className="acoes-form">
            <button 
              type="submit" 
              className="btn-cadastrar"
            >
              Cadastrar
            </button>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn-cancelar"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCadastroProduto;