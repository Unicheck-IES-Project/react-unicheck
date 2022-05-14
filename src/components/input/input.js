import './input.scss';
import ErrorAlert from '../ErrorAlert/ErrorAlert'

const Input = ({children, handleChange, value, type="text", disabled, showError=false, errorMessage=""}) => {
    return(
        <div className="Input">
            <label>{children}</label>
            <input disabled={disabled} onChange={handleChange} value={value} type={type}/>
            {showError ? <ErrorAlert message={errorMessage} /> : null }
        </div>
    )
}

export default Input;