import './Calificaciones.scss';
import '../PrimaryButton/PrimaryButton';
import {useState} from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import Api from '../../Api'

const Calificaciones = ({
    volver, 
    nombre, 
    notas, 
    id,
    getSubjects
}) => {
    const api = new Api();
    const [calificacion, setCalificacion] = useState({title:'', number:''})

    const handleChange = (propName) => (event) => {
        setCalificacion((prevState) => ({ ...prevState, [propName]: event.target.value }));
      };
    return (
        <div className="Calificaciones">
            <div className="dashboard">
                <h1>Calificaciones de {nombre}</h1>
                <div className="calificaciones-container">
                    <div className="calificacion">
                        <div>Nombre</div>
                        <div>Calificacion</div>
                    </div>
                    <div className="inputs-calificaciones">
                        <input onChange={handleChange('title')}></input>
                        <input onChange={handleChange('number')} type='number'></input>
                        <PrimaryButton disabled={calificacion.title.trim() === '' || calificacion.number.trim() === ''} handleClick={() => api.post(`/api/v1/${id}/grade`,calificacion).then(() => getSubjects())}>+</PrimaryButton>
                    </div>
                    {notas.map(calificacion => (
                        <div className='calificacion' key={calificacion.id}>
                             <div>{calificacion.title}</div>
                             <div>{calificacion.number}</div>
                        </div>
                    ))}
                </div>
                <PrimaryButton handleClick={volver}>Volver</PrimaryButton>
            </div>
         </div>)
}

export default Calificaciones;