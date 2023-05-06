import './LoginForm.scss'
import Logo from '../../assets/logoFit.png'
const LoginForm = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes incluir el código para procesar el inicio de sesión
    }
  
    return (
      <div className="login-form-container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <h2> Bienvenido devuelta</h2>
        <p> Ingresa email y contraseña para entrar</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" required />
          </div>
  
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
  
  export default LoginForm;