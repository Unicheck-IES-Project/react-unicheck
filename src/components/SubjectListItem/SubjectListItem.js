import './SubjectListItem.scss';
import eye from '../../assets/eye.png';

const SubjectListItem = ({subjectName, enrollmentPeriod, yearOfSubject, isAttended, finalGrade}) => {
    return (
        <div className="SubjectListItem">
            <p>{subjectName}</p>
            <p>{enrollmentPeriod}</p>
            <p>{yearOfSubject}</p>
            <p>{isAttended}</p>
            <p>{finalGrade}</p>
            <img src={eye} alt="Eye button"/>
        </div>
    )
}

export default SubjectListItem;