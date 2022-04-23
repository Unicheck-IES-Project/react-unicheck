import './PrimaryButton.scss';

const PrimaryButton = ({disabled=false, handleClick, children}) => {
    return (
        <button className="primary-button" disabled={disabled} onClick={handleClick}>{children}</button>
    );
}

export default PrimaryButton;