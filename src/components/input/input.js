import './input.scss';

const Input = ({children, handleChange, value, type="text", disabled}) => {
    return(
        <div className="Input">
            <label>{children}</label>
            <input disabled={disabled} onChange={handleChange} value={value} type={type}/>
        </div>
    )
}

export default Input;