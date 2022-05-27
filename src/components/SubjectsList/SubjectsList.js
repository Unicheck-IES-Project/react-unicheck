import SubjectListItem from '../SubjectListItem/SubjectListItem';

const SubjectList = ({
  subjects,
  eliminarMateriaClick,
  guardarMateriaClick,
  sorting,
  filtering,
  searching,
  searchingData,
  getSubjects
}) => {
  return (
    <>
      {searching(filtering(sorting(subjects)), searchingData).map((subject) => (
        <SubjectListItem
          key={subject.id}
          {...subject}
          eliminarMateriaClick={eliminarMateriaClick}
          guardarMateriaClick={guardarMateriaClick}
          getSubjects={getSubjects}
        />
      ))}
    </>
  );
};

export default SubjectList;
