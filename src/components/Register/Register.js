import './Register.scss'
import {useState} from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useNavigate } from 'react-router';
import Api from '../../Api';

const Register = () => {
    const api = new Api()
    const navigate = useNavigate()
    const [data, setData] = useState({username: "", password: ""});

    const handleChange = (propName) => (event) =>{
        setData(prevState => ({...prevState, [propName]: event.target.value}))
    }

    const handleClick = (event) => {  
        event.preventDefault();
        
        api.post('api/v1/authenticate/students/register', data).
            then(res => {
                console.log("la respuesta en el registro es:", res)
                api.agregarToken(res.id);
            }).then(() => navigate("/home")).
            catch(() => {
            });        
    }
    return (
        <div className='login-view'>
            <div className='login-container'>
                <h1>Crear un nuevo usuario</h1>
                <label>Nombre de usuario</label>
                <input className='login-input' value={data.username}
                       onChange={handleChange("username")}/>

                <label>Contraseña</label>
                <input className='login-input' type='password' value={data.password}  onChange={handleChange("password")}/>

                <div className='login-buttons'>
                    <PrimaryButton handleClick={handleClick}>Registrarse</PrimaryButton>
                    <PrimaryButton handleClick={() => navigate('/')}>Login</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Register