import SubjectListItem from '../SubjectListItem/SubjectListItem';

const SubjectList = ({subjects}) => {
    console.log(subjects)
    return (
        <>   
            {
                subjects.map(subject =>
                    <SubjectListItem
                        key={subject.id}
                        {...subject}
                    />
                )
            }
        </>
    )
}

export default SubjectList;