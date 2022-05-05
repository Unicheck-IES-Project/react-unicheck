import SubjectListItem from '../SubjectListItem/SubjectListItem';

const SubjectList = ({subjects, eliminarMateriaClick,guardarMateriaClick}) => {
    return (
        <>   
            {

                subjects.map(subject =>
                    <SubjectListItem
                        key={subject.id}
                        {...subject}
                        eliminarMateriaClick={eliminarMateriaClick}
                        guardarMateriaClick={guardarMateriaClick}
                    />
                )
            }
        </>
    )
}

export default SubjectList;