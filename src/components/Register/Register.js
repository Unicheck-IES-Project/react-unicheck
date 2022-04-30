import './Register.scss'
import {useState} from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import {Link} from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (setValue) => {
        return (event) => setValue(event.target.value);
    };

    return (
        <div className='login-view'>
            <div className='login-container'>
                <h1>Crearse un nuevo usuario</h1>
                <label>Nombre de usuario</label>
                <input className='login-input' value={username}
                       onChange={handleChange(setUsername)}/>

                <label>Contraseña</label>
                <input className='login-input' type='password' value={password}  onChange={handleChange(setPassword)}/>

                <div className='login-buttons'>
                    <PrimaryButton handleClick={() => {}}>Registrarse</PrimaryButton>
                    <Link to={"/"}><PrimaryButton handleClick={() => {}}>Login</PrimaryButton></Link>
                </div>
            </div>
        </div>
    )
}

export default Register