import './Login.scss'
import {useState} from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useNavigate } from 'react-router';

const Login = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (setValue) => {
        return (event) => setValue(event.target.value);
    };

    const goToRegister = () => {
        navigate('/registrarse')
    }

    return (
        <div className='login-view'>
            <div className='login-container'>
                <h1>Iniciar sesión</h1>
                <label>Nombre de usuario</label>
                <input className='login-input' value={username}
                       onChange={handleChange(setUsername)}/>

                <label>Contraseña</label>
                <input className='login-input' type='password' value={password}  onChange={handleChange(setPassword)}/>

                <div className='login-buttons'>
                    <PrimaryButton handleClick={() => {}}>Login</PrimaryButton>
                    <PrimaryButton handleClick={() => goToRegister()}>Crear cuenta</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Login