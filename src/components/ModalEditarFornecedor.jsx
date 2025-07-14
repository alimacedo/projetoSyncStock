import { useState, useEffect } from 'react';

const ModalEditarFornecedor = ({ onClose, onSave, fornecedorParaEditar }) => {
  const [formData, setFormData] = useState({
    id: '',
    razaoSocial: '',
    nomeFantasia: '',
    endereco: '',
    email: '',
    telefone: '',
    inscricaoEstadual: '',
    inscricaoMunicipal: '',
    cpf: '',
    cnpj: '',
    tipoPessoa: 'juridica'
  });

  const tiposPessoa = [
    { value: 'fisica', label: 'Pessoa Física' },
    { value: 'juridica', label: 'Pessoa Jurídica' }
  ];

  useEffect(() => {
    if (fornecedorParaEditar) {
      setFormData({
        id: fornecedorParaEditar.id || '',
        razaoSocial: fornecedorParaEditar.razaoSocial || '',
        nomeFantasia: fornecedorParaEditar.nomeFantasia || '',
        endereco: fornecedorParaEditar.endereco || '',
        email: fornecedorParaEditar.email || '',
        telefone: fornecedorParaEditar.telefone || '',
        inscricaoEstadual: fornecedorParaEditar.inscricaoEstadual || '',
        inscricaoMunicipal: fornecedorParaEditar.inscricaoMunicipal || '',
        cpf: fornecedorParaEditar.cpf || '',
        cnpj: fornecedorParaEditar.cnpj || '',
        tipoPessoa: fornecedorParaEditar.cnpj ? 'juridica' : 'fisica'
      });
    }
  }, [fornecedorParaEditar]);

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
  };

  return (
    <div className="fundo-modal-editarFornecedor">
      <div className="caixa-modal-editarFornecedor">
        <button className="fechar-modal-editarFornecedor" onClick={onClose}>×</button>
        <h2 className="titulo-modal-editarFornecedor">Editar Fornecedor</h2>
        
        <form onSubmit={handleSubmit} className="form-modal">
          <div className="grupo-form">
            <label htmlFor="id" className="marca-form">Código do Fornecedor</label>
            <input
              type="text"
              id="id"
              name="id"
              className="entrada-form"
              value={formData.id}
              onChange={handleChange}
              required
              disabled
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="tipoPessoa" className="marca-form">Tipo de Pessoa</label>
            <select
              id="tipoPessoa"
              name="tipoPessoa"
              className="seletor-form"
              value={formData.tipoPessoa}
              onChange={handleChange}
              required
            >
              {tiposPessoa.map((tipo) => (
                <option key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grupo-form">
            <label htmlFor="razaoSocial" className="marca-form">Razão Social</label>
            <input
              type="text"
              id="razaoSocial"
              name="razaoSocial"
              className="entrada-form"
              value={formData.razaoSocial}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="nomeFantasia" className="marca-form">Nome Fantasia</label>
            <input
              type="text"
              id="nomeFantasia"
              name="nomeFantasia"
              className="entrada-form"
              value={formData.nomeFantasia}
              onChange={handleChange}
            />
          </div>

          {formData.tipoPessoa === 'juridica' && (
            <div className="grupo-form">
              <label htmlFor="cnpj" className="marca-form">CNPJ</label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                className="entrada-form"
                value={formData.cnpj}
                onChange={handleChange}
                required={formData.tipoPessoa === 'juridica'}
              />
            </div>
          )}

          {formData.tipoPessoa === 'fisica' && (
            <div className="grupo-form">
              <label htmlFor="cpf" className="marca-form">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                className="entrada-form"
                value={formData.cpf}
                onChange={handleChange}
                required={formData.tipoPessoa === 'fisica'}
              />
            </div>
          )}

          {formData.tipoPessoa === 'juridica' && (
            <div className="grupo-form">
              <label htmlFor="inscricaoEstadual" className="marca-form">Inscrição Estadual</label>
              <input
                type="text"
                id="inscricaoEstadual"
                name="inscricaoEstadual"
                className="entrada-form"
                value={formData.inscricaoEstadual}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="grupo-form">
            <label htmlFor="inscricaoMunicipal" className="marca-form">Inscrição Municipal</label>
            <input
              type="text"
              id="inscricaoMunicipal"
              name="inscricaoMunicipal"
              className="entrada-form"
              value={formData.inscricaoMunicipal}
              onChange={handleChange}
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="endereco" className="marca-form">Endereço</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              className="entrada-form"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="email" className="marca-form">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="entrada-form"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>

          <div className="grupo-form">
            <label htmlFor="telefone" className="marca-form">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className="entrada-form"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="acoes-form">
            <button 
              type="submit" 
              className="btn-salvar"
            >
              Salvar
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

export default ModalEditarFornecedor;