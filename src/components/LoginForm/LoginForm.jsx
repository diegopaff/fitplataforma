import './LoginForm.scss'
import Logo from '../../assets/logoFit.png'
import { useState, useContext } from 'react';
import { userAuthContext } from '../../context/UserAuthContext';

const LoginForm = () => {

    const { logIn } = useContext(userAuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState('');

    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
  
    }
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      setError('');
      try{
        await logIn(email, password);

      }catch(error){
        setError(error.message);
      }

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
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              onChange={handleChangeEmail}
              required />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={password}
              onChange={handleChangePassword}
              required />
          </div>
  
          <button type="submit">Entrar</button>
          {error && <p> error </p>}
        </form>

      </div>
    );
  }
  
  export default LoginForm;