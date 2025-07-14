import { Link } from 'react-router-dom';

const Produtos = () => {
  return (
    <div id="blocoprodutos">
      <div className="boxprodutos">
        <img src="./src/images/cadastrarproduto.png" className="imgboxprodutos" alt="Cadastrar produto" />
        <h3><Link to="/cadastrar-produto">Cadastrar Produto</Link></h3>
      </div>
      <div className="boxprodutos">
        <img src="./src/images/listarproduto.png" className="imgboxprodutos" alt="Listar produtos" />
        <h3><Link to="/listar-produtos">Listar Produtos</Link></h3>
      </div>
      <div className="boxprodutos">
        <img src="./src/images/editarproduto.png" className="imgboxprodutos" alt="Editar produto" />
        <h3><Link to="/editar-produto">Editar Produto</Link></h3>
      </div>
      <div className="boxprodutos">
        <img src="./src/images/excluirproduto.png" className="imgboxprodutos" alt="Excluir produto" />
        <h3><Link to="/excluir-produto">Excluir Produto</Link></h3>
      </div>
    </div>
  );
};

export default Produtos;
