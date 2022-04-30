import './Login.scss'
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import {Link} from 'react-router-dom';

const Login = ({handleClick, handleChange, data}) => {

    return (
        <div className='login-view'>
            <div className='login-container'>
                <h1>Iniciar sesión</h1>
                <label>Nombre de usuario</label>
                <input className='login-input' value={data.username}
                       onChange={handleChange("username")}/>

                <label>Contraseña</label>
                <input className='login-input' type='password' value={data.password}  onChange={handleChange("password")}/>

                <div className='login-buttons'>
                    <PrimaryButton handleClick={handleClick}>Login</PrimaryButton>
                    <Link to={"/register"}><PrimaryButton handleClick={() => {}}>Crear cuenta</PrimaryButton></Link>
                </div>
            </div>
        </div>
    )
}

export default Login