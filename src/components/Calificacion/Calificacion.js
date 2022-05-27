import {useState} from 'react';
import PopUp from '../../components/PopUp/PopUp';
import tacho from '../../assets/tacho.svg';

const Calificacion = ({id, titulo, nota, eliminarCalificacion}) => {
    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <div className='calificacion' key={id}>
            <div>{titulo}</div>
            <div>{nota}</div>
            <button  onClick={() => setShowPopUp(true)}><img src={tacho} alt="tacho"/></button>
            {showPopUp ? <PopUp eliminar={() => eliminarCalificacion(id)} volver={() => setShowPopUp(false)}></PopUp> : <></>}
        </div>
    )
}
export default Calificacion