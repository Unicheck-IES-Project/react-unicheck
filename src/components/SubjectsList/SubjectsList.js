import SubjectListItem from '../SubjectListItem/SubjectListItem';

const SubjectList = ({subjects, eliminarMateriaClick}) => {
    return (
        <>   
            {

                subjects.map(subject =>
                    <SubjectListItem
                        key={subject.id}
                        {...subject}
                        eliminarMateriaClick={eliminarMateriaClick}
                    />
                )
            }
        </>
    )
}

export default SubjectList;