import './SubjectListItem.scss';
import tacho from '../../assets/tacho.svg';
import lapiz from '../../assets/lapiz.svg';
import {useState} from 'react';
import PopUp from '../PopUp/PopUp'
import EditarMateria from '../EditarMateria/EditarMateria';

const SubjectListItem = ({nombre, periodoDeCursada, añoDeCursada, cursando, nota, id, eliminarMateriaClick, guardarMateriaClick}) => {
    

    const [showPopUp, setShowPopUp] = useState(false);
    const [showEditarMateria, setEditarMateria] = useState(false);


    return (
        <div className="SubjectListItem">
            <p>{nombre}</p>
            <p>{periodoDeCursada}</p>
            <p>{añoDeCursada}</p>
            <p>{cursando ? "Cursando" : "Cursada"}</p>
            <p>{nota}</p>
            <button  onClick={() => setEditarMateria(true)}><img src={lapiz} alt="lapiz"/></button>
            <button  onClick={() => setShowPopUp(true)}><img src={tacho} alt="tacho"/></button>
            {showPopUp ? <PopUp eliminar={() => eliminarMateriaClick(id)} volver={() => setShowPopUp(false)}></PopUp> : <></>}
            {showEditarMateria ? <EditarMateria setShowPopUp={setShowPopUp} nombre={nombre} periodoDeCursada={periodoDeCursada} añoDeCursada={añoDeCursada} cursando={cursando} nota={nota} id={id} guardar={guardarMateriaClick} volver={() => setEditarMateria(false)}></EditarMateria> : <></>}
   </div>
    )
}

export default SubjectListItem;