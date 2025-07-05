import { Link } from 'react-router-dom';

const Fornecedores = () => {
  return (
    <div id="blocofornecedores">
      <div className="boxfornecedores">
        <img src="./src/assets/images/cadastrarfornecedor.png" className="imgboxfornecedores" alt="Cadastrar fornecedor" />
        <h3><Link to="/cadastrar-fornecedor">Cadastrar Fornecedor</Link></h3>
      </div>
      <div className="boxfornecedores">
        <img src="./src/assets/images/listarfornecedor.png" className="imgboxfornecedores" alt="Listar fornecedores" />
        <h3><Link to="/listar-fornecedores">Listar Fornecedor</Link></h3>
      </div>
      <div className="boxfornecedores">
        <img src="./src/assets/images/editarfornecedor.png" className="imgboxfornecedores" alt="Editar fornecedor" />
        <h3><Link to="/editar-fornecedor">Editar Fornecedor</Link></h3>
      </div>
      <div className="boxfornecedores">
        <img src="./src/assets/images/excluirfornecedor.png" className="imgboxfornecedores" alt="Excluir fornecedor" />
        <h3><Link to="/excluir-fornecedor">Excluir Fornecedor</Link></h3>
      </div>
    </div>
  );
};

export default Fornecedores;