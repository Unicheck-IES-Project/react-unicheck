import { connect } from 'react-redux';
import {useState} from 'react';
import Login from '../../components/Login/Login';
import {login} from '../../actions/index';
import {useNavigate} from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (data, redireccionar, setShowError) => {
            dispatch(login(data, redireccionar, setShowError))
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
        loginAction(data, () => navigate('/home'), setShowError)       
    }
    const [showError, setShowError] = useState(false);

    return <Login handleChange={handleChange} handleClick={handleClick} data={data} showError={showError}/>
}

export default connect(
    null,
    mapDispatchToProps
)(LoginContainer);