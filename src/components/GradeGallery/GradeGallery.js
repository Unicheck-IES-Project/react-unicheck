import './GradeGallery.scss';
import addImageIcon from '../../assets/add-image.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import trashIcon from '../../assets/tacho.svg';
import eyeIcon from '../../assets/eye.png';
import galleryFiles from '../../assets/gallery-files.png';

export const GradeGallery = ({
  backToGrades,
  gradeId,
  gradeTitle,
  subjectName,
}) => {
  const isUploadedFile = true;
  const thereAreNotUploadedImages = true;
  //El boton SubirArchivo es porque pensé:
  // El flaco selecciona el archivo con el boton de la imagen
  // Pero despues hay que disparar el subir, y pensé en ese boton
  // Que solo se habilite cuando haya efectivamente alguna imagen seleccionada
  // En el value del input

  return (
    <div className='GradesGallery'>
      <div className='background'></div>

      <div className='content'>
        <h1>
          Capturas de {gradeTitle} de {subjectName}
        </h1>
        <div className='upload-section'>
          <button
            className={
              isUploadedFile
                ? 'upload-button-enabled'
                : 'upload-button-disabled'
            }
          >
            Subir archivo
          </button>
          <label className='upload-label'>
            <img src={addImageIcon} className='upload-file-icon' />
            <input
              type='file'
              accept='image/png, image/jpeg'
              style={{ display: 'none' }}
            />
          </label>
        </div>

        <div>
          {thereAreNotUploadedImages ? (
            <div className='no-images-alert'>
              <img src={galleryFiles} width='80' style={{ margin: 'auto' }} />
              <p>No hay capturas subidas</p>
            </div>
          ) : (
            <>
              <div className='file-row'>
                <h3>Parcial hoja 1</h3>
                <div>
                  <button>
                    <img src={eyeIcon} />
                  </button>
                  <button>
                    <img src={trashIcon} />
                  </button>
                </div>
              </div>
              <div className='file-row'>
                <h3>Parcial hoja 1</h3>
                <div>
                  <button>
                    <img src={eyeIcon} />
                  </button>
                  <button>
                    <img src={trashIcon} />
                  </button>
                </div>
              </div>
              <div className='file-row'>
                <h3>Parcial hoja 1</h3>
                <div>
                  <button>
                    <img src={eyeIcon} />
                  </button>
                  <button>
                    <img src={trashIcon} />
                  </button>
                </div>
              </div>
              <div className='file-row'>
                <h3>Parcial hoja 1</h3>
                <div>
                  <button>
                    <img src={eyeIcon} />
                  </button>
                  <button>
                    <img src={trashIcon} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <PrimaryButton className='primary-button' handleClick={backToGrades}>
          Volver
        </PrimaryButton>
      </div>
    </div>
  );
};
