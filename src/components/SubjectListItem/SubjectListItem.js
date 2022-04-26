import './SubjectListItem.scss';
import eye from '../../assets/eye.png';

const SubjectListItem = ({nombre, periodoDeCursada, añoDeCursada, cursando, nota}) => {
    return (
        <div className="SubjectListItem">
            <p>{nombre}</p>
            <p>{periodoDeCursada}</p>
            <p>{añoDeCursada}</p>
            <p>{cursando ? "Cursando" : "Cursada"}</p>
            <p>{nota}</p>
            <img src={eye} alt="Eye button"/>
        </div>
    )
}

export default SubjectListItem;