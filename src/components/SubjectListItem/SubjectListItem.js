import './SubjectListItem.scss';
import tacho from '../../assets/tacho.svg';
import papeles from '../../assets/papeles.png';
import lapiz from '../../assets/lapiz.svg';
import {useState} from 'react';
import PopUp from '../PopUp/PopUp'
import EditarMateria from '../EditarMateria/EditarMateria';
import Calificaciones from '../Calificaciones/Calificaciones';

const SubjectListItem = ({nombre, periodoDeCursada, añoDeCursada, cursando, notaFinal, id, eliminarMateriaClick, guardarMateriaClick, notas, getSubjects}) => {
    
    const [showCalificaciones, setShowCalificaciones] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [showEditarMateria, setEditarMateria] = useState(false);


    return (
        <div className="SubjectListItem">
            <p>{nombre}</p>
            <p>{periodoDeCursada}</p>
            <p>{añoDeCursada}</p>
            <p>{cursando ? "Cursando" : "Cursada"}</p>
            <p>{notaFinal}</p>
            <button  onClick={() => setShowCalificaciones(true)}><img src={papeles} alt="papeles"/></button>
            <button  onClick={() => setEditarMateria(true)}><img src={lapiz} alt="lapiz"/></button>
            <button  onClick={() => setShowPopUp(true)}><img src={tacho} alt="tacho"/></button>
            {showPopUp ? <PopUp eliminar={() => eliminarMateriaClick(id)} volver={() => setShowPopUp(false)}></PopUp> : <></>}
            {showEditarMateria ? <EditarMateria setShowPopUp={setShowPopUp} nombre={nombre} periodoDeCursada={periodoDeCursada} añoDeCursada={añoDeCursada} cursando={cursando} nota={notaFinal} id={id} guardar={guardarMateriaClick} volver={() => setEditarMateria(false)} notas={notas}></EditarMateria> : <></>}
            {showCalificaciones ? <Calificaciones volver={() => setShowCalificaciones(false)} nombre={nombre} id={id} notas={notas} getSubjects={getSubjects} /> : <></>}
   </div>
    )
}

export default SubjectListItem;
