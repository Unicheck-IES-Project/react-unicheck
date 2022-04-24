import Input from '../input/input';
import './AddSubject.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import React from 'react';


const AddSubject = ({onCancelClick}) => {
    return (
        <div className="AddSubject">
            <div className="dashboard">
                <h1>Agregar nueva materia</h1>
                <Input handleChange={() => {}} value={"1"}>Nombre de asignatura</Input>
                <Input handleChange={() => {}} value={"1"}>Período</Input>
                <Input handleChange={() => {}} value={"1"}>Año</Input>
                <Input handleChange={() => {}} value={"1"}>Estado</Input>
                <Input handleChange={() => {}} value={"1"}>Nota final</Input>
                <div className="buttons-container">
                    <PrimaryButton handleClick={() => {}}>
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