import SubjectListItem from '../SubjectListItem/SubjectListItem';

const SubjectList = ({
  subjects,
  eliminarMateriaClick,
  guardarMateriaClick,
  sorting,
  filtering,
  searching,
  searchingData,
}) => {
  return (
    <>
      {searching(filtering(sorting(subjects)), searchingData).map((subject) => (
        <SubjectListItem
          key={subject.id}
          {...subject}
          eliminarMateriaClick={eliminarMateriaClick}
          guardarMateriaClick={guardarMateriaClick}
        />
      ))}
    </>
  );
};

export default SubjectList;
