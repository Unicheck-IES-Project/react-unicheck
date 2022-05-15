import Input from '../input/input';
import './AddSubject.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import React from 'react';

const AddSubject = ({onCancelClick, onSaveClick, changeInputData, data, showAñoError, showNotaError}) => {
    return (
        <div className="AddSubject">
            <div className="dashboard">
                <h1>Agregar Nueva Materia</h1>
                <Input handleChange={changeInputData("nombre")} value={data.nombre}>Nombre de asignatura</Input>
                <Input 
                    type="number" 
                    handleChange={changeInputData("añoDeCursada")} 
                    value={data.añoDeCursada}
                    showError={showAñoError}
                    errorMessage="El año ingresado no es valido"
                >
                    Año
                </Input>
                <div className="select">
                    <label>Estado de cursada</label>
                    <select value={data.cursando} onChange={changeInputData("cursando")}> 
                        <option value="true">Cursando</option>
                        <option value="false">Ya fue cursada</option>
                    </select>
                </div>
                <div className="select">
                    <label>Periodo de cursada</label>
                    <select value={data.periodoDeCursada} onChange={changeInputData("periodoDeCursada")}> 
                        <option value="Primer Cuatrimestre">Primer Cuatrimestre</option>
                        <option value="Segundo Cuatrimestre">Segundo Cuatrimestre</option>
                        <option value="Anual">Anual</option>
                    </select>
                </div>
                <Input 
                    disabled={data.cursando == "true"? true : false} 
                    type="number" handleChange={changeInputData("nota")} 
                    value={data.nota}
                    showError={showNotaError}
                    errorMessage="La nota debe estar comprendida entre 1 y 10"
                    >
                        Nota final
                    </Input>
                <div className="buttons-container">
                    <PrimaryButton handleClick={() => onSaveClick(data)}>
                         Agregar
                    </ PrimaryButton>
                    <PrimaryButton handleClick={onCancelClick}>
                        Cancelar
                    </ PrimaryButton>
                </div>
            </div>
        </div>
    )
}
export default AddSubject;