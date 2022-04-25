import Input from '../input/input';
import './AddSubject.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import React from 'react';


const AddSubject = ({onCancelClick, onSaveClick, changeInputData, data}) => {
    return (
        <div className="AddSubject">
            <div className="dashboard">
                <h1>Add new Subject</h1>
                <Input handleChange={changeInputData("subjectName")} value={data.name}>Nombre de asignatura</Input>
                <Input handleChange={changeInputData("enrollmentPeriod")} value={data.enrollmentPeriod}>Período</Input>
                <Input handleChange={changeInputData("yearOfSubject")} value={data.yearOfSubject}>Año</Input>
                <Input handleChange={changeInputData("isAttended")} value={data.isAttended}>Estado</Input>
                <Input handleChange={changeInputData("finalGrade")} value={data.finalGrade}>Nota final</Input>
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