import './Login.scss'
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useNavigate } from 'react-router';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

const Login = ({handleClick, handleChange, data, showError}) => {

    const navigate = useNavigate()
    const goToRegister = () => {
        navigate('/register')
    }

    return (
        <div className='login-view'>
            <div className='login-container'>
                <h1>Iniciar sesión</h1>
                <label>Nombre de usuario</label>
                <input className='login-input' value={data.username}
                       onChange={handleChange("username")}/>

                <label>Contraseña</label>
                <input className='login-input' type='password' value={data.password}  onChange={handleChange("password")}/>
                {showError ? <ErrorAlert message={"Usuaro o Contraseña invalidos"} /> : null}

                <div className='login-buttons'>
                    <PrimaryButton handleClick={handleClick}>Login</PrimaryButton>
                    <PrimaryButton handleClick={() => goToRegister()}>Crear cuenta</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Login