import { useState } from 'react';

const ModalCadastroProjeto = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    numero: '',
    centroCusto: ''
  });

  const centrosCusto = [
    { value: 'cc01', label: 'Centro de Custo 01' },
    { value: 'cc02', label: 'Centro de Custo 02' },
    { value: 'cc03', label: 'Centro de Custo 03' },
    { value: 'cc04', label: 'Centro de Custo 04' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fundo-modal-cadastroProjeto">
      <div className="caixa-modal-cadastroProjeto">
        <button className="fechar-modal-cadastroProjeto" onClick={onClose}>×</button>
        <h2 className="titulo-modal-cadastroProjeto">Cadastrar Novo Projeto</h2>
        
        <form onSubmit={handleSubmit} className="form-modal">
          <div className="grupo-form">
            <label htmlFor="id" className="marca-form">ID do Projeto</label>
            <input
              type="text"
              id="id"
              name="id"
              className="entrada-form"
              value={formData.id}
              onChange={handleChange}
              required
              placeholder=""
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="nome" className="marca-form">Nome do Projeto</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="entrada-form"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder=""
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="numero" className="marca-form">Número do Projeto</label>
            <input
              type="text"
              id="numero"
              name="numero"
              className="entrada-form"
              value={formData.numero}
              onChange={handleChange}
              required
              placeholder=""
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="centroCusto" className="marca-form">Centro de Custo</label>
            <select
              id="centroCusto"
              name="centroCusto"
              className="seletor-form"
              value={formData.centroCusto}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um centro de custo</option>
              {centrosCusto.map((centro) => (
                <option key={centro.value} value={centro.value}>
                  {centro.label}
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

export default ModalCadastroProjeto;