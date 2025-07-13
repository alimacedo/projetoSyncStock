import { useState } from 'react';

const ModalCadastroProduto = ({ onClose, onSave }) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    especialidade: '',
    descricao: '',
    quantidade: '',
    unidadeMedida: 'un',
    precoUnitario: ''
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
    <div className="fundo-modal-cadastroProduto">
      <div className="caixa-modal-cadastroProduto">
        <button className="fechar-modal-cadastroProduto" onClick={onClose}>×</button>
        <h2 className="titulo-modal-cadastroProduto">Cadastrar Novo Produto</h2>
        
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
            <label htmlFor="especialidade" className="marca-form">Especialidade</label>
            <input
              type="text"
              id="especialidade"
              name="especialidade"
              className="entrada-form"
              value={formData.especialidade}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="descricao" className="marca-form">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              className="entrada-form"
              value={formData.descricao}
              onChange={handleChange}
              rows={4}
              placeholder="Descreva o produto..."
            ></textarea>
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

          <div className="grupo-form">
            <label htmlFor="precoUnitario" className="marca-form">Preço Unitário</label>
            <input
              type="text"
              id="precoUnitario"
              name="precoUnitario"
              className="entrada-form"
              value={formData.precoUnitario}
              onChange={(e) => {
                const valor = e.target.value;
                const regex = /^\d*([.,]\d{0,2})?$/; // até 2 casas decimais
                if (valor === '' || regex.test(valor)) {
                  setFormData(prev => ({
                    ...prev,
                    precoUnitario: valor.replace(',', '.')
                  }));
                }
              }}
              placeholder="0.00"
              required
            />
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