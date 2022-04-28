import './SecondaryButton.css';

const SecondaryButton = ({disabled=false, handleClick, children}) => {
    return (
        <button className="secondary-button" disabled={disabled} onClick={handleClick}>{children}</button>
    );
}

export default SecondaryButton;