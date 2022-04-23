import SubjectListItem from '../SubjectListItem/SubjectListItem';

const SubjectList = () => {
    //{subjectName, enrollmentPeriod, yearOfSubject, isAttended, finalGrade}
    return (
        <>
            <SubjectListItem subjectName="Matematica" enrollmentPeriod="Anual" yearOfSubject="1998" isAttended="Cursada" finalGrade="10" />
            <SubjectListItem subjectName="Matematica" enrollmentPeriod="Anual" yearOfSubject="1998" isAttended="Cursada" finalGrade="10" />
            <SubjectListItem subjectName="Matematica" enrollmentPeriod="Anual" yearOfSubject="1998" isAttended="Cursada" finalGrade="10" />
            <SubjectListItem subjectName="Matematica" enrollmentPeriod="Anual" yearOfSubject="1998" isAttended="Cursada" finalGrade="10" />
            <SubjectListItem subjectName="Matematica" enrollmentPeriod="Anual" yearOfSubject="1998" isAttended="Cursada" finalGrade="10" />
                    
            {/* {
                presenter.contactsList.map(contact =>
                    <Contact
                        key={contact.id}
                        {...contact}
                    />
                )
            } */}
        </>
    )
}

export default SubjectList;