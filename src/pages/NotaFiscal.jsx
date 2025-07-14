import { Link } from 'react-router-dom';

const NotaFiscal = () => {
  return (
    <div id="bloconotafiscal">
      <div className="boxnotafiscal">
        <img src="./src/images/cadastrarnotafiscal.png" className="imgboxnotafiscal" alt="Cadastrar nota fiscal" />
        <h3><Link to="/cadastrar-notafiscal">Cadastrar Nota Fiscal</Link></h3>
      </div>
      <div className="boxnotafiscal">
        <img src="./src/images/listarnotafiscal.png" className="imgboxnotafiscal" alt="Listar notas fiscais" />
        <h3><Link to="/listar-notasfiscais">Listar Notas Fiscais</Link></h3>
      </div>
      <div className="boxnotafiscal">
        <img src="./src/images/editarnotafiscal.png" className="imgboxnotafiscal" alt="Editar nota fiscal" />
        <h3><Link to="/editar-notafiscal">Editar Nota Fiscal</Link></h3>
      </div>
      <div className="boxnotafiscal">
        <img src="./src/images/excluirnotafiscal.png" className="imgboxnotafiscal" alt="Excluir nota fiscal" />
        <h3><Link to="/excluir-notafiscal">Excluir Nota Fiscal</Link></h3>
      </div>
    </div>
  );
};

export default NotaFiscal;
