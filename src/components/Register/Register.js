import './Register.scss';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useNavigate } from 'react-router';
import Api from '../../Api';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

const Register = () => {
  const api = new Api();
  const navigate = useNavigate();
  const [data, setData] = useState({ username: '', password: '' });

  const [error, setError] = useState(null);

  const handleChange = (propName) => (event) => {
    setError(null);
    setData((prevState) => ({ ...prevState, [propName]: event.target.value }));
  };

  const isValidData = () => {
    if (!data.password || data.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    return true;
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (isValidData()) {
      api
        .post('api/v1/authenticate/students/register', data)
        .then((res) => {
          api.agregarToken(res.id);
        })
        .then(() => navigate('/home'))
        .catch((exception) => {
          console.log(exception);
          setError('Server Error: ' + exception);
          if (exception.status === 409) {
            setError('El nombre de usuario elegido ya se encuentra en uso.');
          }
          if (exception.status === 400) {
            setError('El nombre de usuario no puede ser vacío.');
          }
        });
    }
  };

  return (
    <div className='login-view'>
      <div className='login-container'>
        <h1>Crear un nuevo usuario</h1>
        <label>Nombre de usuario</label>
        <input
          className='login-input'
          value={data.username}
          onChange={handleChange('username')}
        />

        <label>Contraseña</label>
        <input
          className='login-input'
          type='password'
          value={data.password}
          onChange={handleChange('password')}
        />

        {error ? <ErrorAlert message={error} /> : null}

        <div className='login-buttons'>
          <PrimaryButton handleClick={handleClick}>Registrarse</PrimaryButton>
          <PrimaryButton handleClick={() => navigate('/')}>Login</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Register;
