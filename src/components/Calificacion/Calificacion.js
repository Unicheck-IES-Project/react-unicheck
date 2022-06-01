import { useState } from 'react';
import PopUp from '../../components/PopUp/PopUp';
import tacho from '../../assets/tacho.svg';
import gallery from '../../assets/gallery-files.png';
import { GradeGallery } from '../GradeGallery/GradeGallery';

const Calificacion = ({
  id,
  titulo,
  nota,
  eliminarCalificacion,
  subjectName,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const [showGallery, setShowGallery] = useState(false);

  const eliminar = () => {
    eliminarCalificacion(id);
    setShowPopUp(false);
  };

  return (
    <div className='calificacion' key={id}>
      <div>{titulo}</div>
      <div>{nota}</div>
      <button onClick={() => setShowGallery(true)}>
        <img src={gallery} alt='tacho' />
      </button>
      <button onClick={() => setShowPopUp(true)}>
        <img src={tacho} alt='tacho' />
      </button>
      {showPopUp ? (
        <PopUp
          eliminar={eliminar}
          volver={() => setShowPopUp(false)}
          texto={'¿Seguro que quiere eliminar la calificación?'}
        ></PopUp>
      ) : (
        <></>
      )}
      {showGallery ? (
        <GradeGallery
          backToGrades={() => setShowGallery(false)}
          gradeId={id}
          gradeTitle={titulo}
          subjectName={subjectName}
          subjectId={id}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Calificacion;
