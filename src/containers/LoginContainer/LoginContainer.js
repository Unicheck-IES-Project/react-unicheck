import { connect } from 'react-redux';
import {useState} from 'react';
import Login from '../../components/Login/Login';
import {login} from '../../actions/index';
import {useNavigate} from 'react-router-dom';

// const mapStateToProps = (state) => {
//     return {
//         subjects: state.subjects
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (usuario, contraseña, redireccionar) => {
            dispatch(login(usuario, contraseña, redireccionar))
        }
    }
}

const LoginContainer = ({loginAction}) => {
    const navigate = useNavigate()

    const [data, setData] = useState({username: "", password: ""});
    
    const handleChange = (propName) => (event) =>{
        setData(prevState => ({...prevState, [propName]: event.target.value}))
    }

    const handleClick = (event) => {  
        event.preventDefault();
        loginAction(data, () => navigate('/home'))       
    }

    return <Login handleChange={handleChange} handleClick={handleClick} data={data} />
}

export default connect(
    null,
    mapDispatchToProps
)(LoginContainer);