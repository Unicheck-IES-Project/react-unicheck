import './Calificaciones.scss';
import '../PrimaryButton/PrimaryButton';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Api from '../../Api';
import Calificacion from '../../components/Calificacion/Calificacion';

const Calificaciones = ({ volver, nombre, notas, id, getSubjects }) => {
  const api = new Api();
  const [calificacion, setCalificacion] = useState({ title: '', number: '' });

  const esCalificacionInvalida = () =>
    calificacion.title.trim() === '' ||
    calificacion.number.trim() === '' ||
    calificacion.number < 1 ||
    calificacion.number > 10;

  const handleClick = () => {
    api
      .post(`api/v1/${id}/grade`, calificacion)
      .then(() => getSubjects())
      .then(() => setCalificacion(() => ({ title: '', number: '' })));
  };

  const eliminarCalificacion = (calificacionID) => {
    api
      .delete(`api/v1/${id}/grade/${calificacionID}`, calificacion)
      .then(() => getSubjects());
  };

  const handleChange = (propName) => (event) => {
    setCalificacion((prevState) => ({
      ...prevState,
      [propName]: event.target.value,
    }));
  };
  return (
    <div className='Calificaciones'>
      <div className='dashboard'>
        <h1>Calificaciones de {nombre}</h1>
        <div className='calificaciones-container'>
          <div className='calificacion'>
            <div>Nombre</div>
            <div>Calificacion</div>
          </div>
          <div className='inputs-calificaciones'>
            <input
              onChange={handleChange('title')}
              value={calificacion.title}
            ></input>
            <input
              onChange={handleChange('number')}
              value={calificacion.number}
              type='number'
            ></input>
            <PrimaryButton
              disabled={esCalificacionInvalida()}
              handleClick={handleClick}
            >
              +
            </PrimaryButton>
          </div>
          {notas.map((calificacion) => (
            <Calificacion
              eliminarCalificacion={eliminarCalificacion}
              titulo={calificacion.titulo}
              nota={calificacion.nota}
              id={calificacion.id}
              subjectName={nombre}
            />
          ))}
        </div>
        <PrimaryButton handleClick={volver}>Volver</PrimaryButton>
      </div>
    </div>
  );
};

export default Calificaciones;
