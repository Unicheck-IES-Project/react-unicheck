import './SubjectListItem.scss';
import tacho from '../../assets/tacho.svg';
import {useState} from 'react';
import PopUp from '../PopUp/PopUp'

const SubjectListItem = ({nombre, periodoDeCursada, añoDeCursada, cursando, nota, id,eliminarMateriaClick}) => {
    

    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <div className="SubjectListItem">
            <p>{nombre}</p>
            <p>{periodoDeCursada}</p>
            <p>{añoDeCursada}</p>
            <p>{cursando ? "Cursando" : "Cursada"}</p>
            <p>{nota}</p>
            <button  onClick={() => setShowPopUp(true)}><img src={tacho} alt="tacho"/></button>
            {showPopUp ? <PopUp eliminar={() => eliminarMateriaClick(id)} volver={() => setShowPopUp(false)}></PopUp> : <></>}
        </div>
    )
}

export default SubjectListItem;