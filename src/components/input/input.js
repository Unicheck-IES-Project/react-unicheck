import './input.scss';

const Input = ({children, handleChange, value}) => {
    return(
        <div className="Input">
            <label>{children}</label>
            <input onChange={handleChange} value={value} />
        </div>
    )
}

export default Input;