import Input from '../input/input';
import './AddSubject.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import React from 'react';


const AddSubject = ({onCancelClick, onSaveClick, changeInputData, data}) => {
    return (
        <div className="AddSubject">
            <div className="dashboard">
                <h1>Add new Subject</h1>
                <Input handleChange={changeInputData("subjectName")} value={data.name}>Name</Input>
                <Input handleChange={changeInputData("enrollmentPeriod")} value={data.enrollmentPeriod}>Enrollment Period</Input>
                <Input handleChange={changeInputData("yearOfSubject")} value={data.yearOfSubject}>Year Of Subject</Input>
                <Input handleChange={changeInputData("isAttended")} value={data.isAttended}>Is Attended</Input>
                <Input handleChange={changeInputData("finalGrade")} value={data.finalGrade}>Final Grade</Input>
                <div className="buttons-container">
                    <PrimaryButton handleClick={() => onSaveClick(data)}>
                        Save Changes
                    </ PrimaryButton>
                    <PrimaryButton handleClick={onCancelClick}>
                        Cancel
                    </ PrimaryButton>
                </div>
            </div>
        </div>
    )
}
export default AddSubject;