import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <div className="input-login">
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="Digite seu e-mail" 
          />
        </div>

        <div className="input-login">
          <input 
            type="password" 
            id="senha" 
            name="senha" 
            required 
            placeholder="Digite sua senha" 
          />
        </div>

        <button type="submit" className="btn-entrar">
          Entrar
        </button>

        <div className="forgot-password">
          <a href="#">Esqueceu a senha?</a>
        </div>

        <div className="register">
          <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;