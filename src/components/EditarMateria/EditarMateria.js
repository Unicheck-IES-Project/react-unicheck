import './EditarMateria.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Input from '../input/input';
import { useState } from 'react';

const EditarMateria = ({
  nombre,
  periodoDeCursada,
  añoDeCursada,
  cursando,
  nota,
  id,
  guardar,
  volver,
}) => {
  const [data, setData] = useState({
    nombre: nombre,
    periodoDeCursada: periodoDeCursada,
    añoDeCursada: añoDeCursada,
    cursando: cursando.toString(),
    nota: nota,
  });

  const hayErrorNota = () => {
    if(data.cursando === "true") {return false;}
    return (data.nota <= 0 || data.nota > 10);
  }

  const hayErrorAño = () => {
    return (data.añoDeCursada <= 1990 || data.añoDeCursada >= 2023);
  }

  const [showNotaError, setShowNotaError] = useState(false);
  const [showAñoError, setShowAñoError] = useState(false);

  const changeData = (propName) => (event) => {
    setData((prevState) => ({ ...prevState, [propName]: event.target.value }));
  };

  const [showNameError , setShowNameError] = useState(false);

  const hayErrorNombre = () => {
    return data.nombre.trim() === "";
}

  return (
    <div className='EditarMateria'>
      <div className='content'>
        <div className='AddSubject'>
          <div className='dashboard'>
            <h1>Editar Materia</h1>
            <Input 
              handleChange={changeData('nombre')} 
              value={data.nombre}
              showError={showNameError}
              errorMessage={"El nombre no puede ser vacio"}
              >
              Nombre de asignatura
            </Input>
            <Input
              type='number'
              handleChange={changeData('añoDeCursada')}
              value={data.añoDeCursada}
              showError={showAñoError}
              errorMessage="El año ingresado no es valido"
            >
              Año
            </Input>
            <div className='select'>
              <label>Estado de cursada</label>
              <select value={data.cursando} onChange={changeData('cursando')}>
                <option value='true'>Cursando</option>
                <option value='false'>Ya fue cursada</option>
              </select>
            </div>
            <div className='select'>
              <label>Periodo de cursada</label>
              <select
                value={data.periodoDeCursada}
                onChange={changeData('periodoDeCursada')}
              >
                <option value='Primer Cuatrimestre'>Primer Cuatrimestre</option>
                <option value='Segundo Cuatrimestre'>
                  Segundo Cuatrimestre
                </option>
                <option value='Anual'>Anual</option>
              </select>
            </div>
            <Input
              disabled={data.cursando === 'true'}
              type='number'
              handleChange={changeData('nota')}
              value={data.cursando === 'true' ? '' : data.nota}
              showError={showNotaError}
              errorMessage="La nota debe estar comprendida entre 1 y 10"
            >
              Nota final
            </Input>
            <div className='buttons-container'>
              <PrimaryButton
                handleClick={() => {
                  setShowNotaError(hayErrorNota())
                  setShowAñoError(hayErrorAño());
                  setShowNameError(hayErrorNombre());
                  if(!hayErrorAño() && !hayErrorNota() && !hayErrorNombre()) {
                    guardar(id, data);
                    volver();
                  }
                }}
              >
                Guardar
              </PrimaryButton>
              <PrimaryButton handleClick={() => volver()}>
                Cancelar
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditarMateria;
