import { Link } from 'react-router-dom';

const GestaoEstoque = () => {
  return (
    <>
      <div id="bloco">
        <div className="box">
          <img src="./src/assets/images/cadastrarproduto.png" className="imgbox" alt="Cadastrar Produto" />
          <h3><Link to="/cadastrar-produto">Cadastrar Produto</Link></h3>
        </div>
        <div className="box">
          <img src="./src/assets/images/listarestoque.png" className="imgbox" alt="Listar Estoque" />
          <h3><Link to="/listar-estoque">Listar Estoque</Link></h3>
        </div>
      </div>
    </>
  );
};

export default GestaoEstoque;