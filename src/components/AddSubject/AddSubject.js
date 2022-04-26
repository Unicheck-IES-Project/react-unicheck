import Input from '../input/input';
import './AddSubject.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import React from 'react';


const AddSubject = ({onCancelClick, onSaveClick, changeInputData, data}) => {
    return (
        <div className="AddSubject">
            <div className="dashboard">
                <h1>Agregar Nueva Materia</h1>
                <Input handleChange={changeInputData("nombre")} value={data.nombre}>Nombre de asignatura</Input>
                <Input handleChange={changeInputData("periodoDeCursada")} value={data.periodoDeCursada}>Período de cursada</Input>
                <Input handleChange={changeInputData("añoDeCursada")} value={data.añoDeCursada}>Año</Input>
                <Input handleChange={changeInputData("cursando")} value={data.cursando}>Estado de cursada</Input>
                <Input handleChange={changeInputData("nota")} value={data.nota}>Nota final</Input>
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