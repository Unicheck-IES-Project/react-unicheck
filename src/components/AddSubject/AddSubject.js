import Input from '../input/input';
import './AddSubject.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import React from 'react';


const AddSubject = ({onCancelClick}) => {
    return (
        <div className="AddSubject">
            <div className="dashboard">
                <h1>Add new Subject</h1>
                <Input handleChange={() => {}} value={"1"}>Name</Input>
                <Input handleChange={() => {}} value={"1"}>Enrollment Period</Input>
                <Input handleChange={() => {}} value={"1"}>Year Of Subject</Input>
                <Input handleChange={() => {}} value={"1"}>Is Attended</Input>
                <Input handleChange={() => {}} value={"1"}>Final Grade</Input>
                <div className="buttons-container">
                    <PrimaryButton handleClick={() => {}}>
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