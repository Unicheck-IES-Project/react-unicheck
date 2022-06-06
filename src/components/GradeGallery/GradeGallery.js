import './GradeGallery.scss';
import addImageIcon from '../../assets/add-image.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import trashIcon from '../../assets/tacho.svg';
import eyeIcon from '../../assets/eye.png';
import galleryFiles from '../../assets/gallery-files.png';
import { useState } from 'react';
import { FileUploader } from '../FileUploader/FileUploader';
import axios from 'axios';

export const GradeGallery = ({
  backToGrades,
  gradeId,
  gradeTitle,
  subjectName,
  subjectId,
  images,
  getSubjects,
}) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const [showPopUp, setShowPopUp] = useState(false);

  const submitFile = () => {
    const formData = new FormData();
    formData.append('file', uploadedFile);

    axios
      .post(
        `http://localhost:8080/api/v1/${subjectId}/grade/${gradeId}`,
        formData
      )
      .then((res) => {
        console.log('File Upload success');
        getSubjects();
        console.log(res);
      })
      .catch((err) => console.log('File Upload Error'));
    setUploadedFile(null);
  };

  const deletePicture = (aImageId) => {
    axios
      .delete(
        `http://localhost:8080/api/v1/${subjectId}/grade/${gradeId}/${aImageId}`
      )
      .then((res) => {
        getSubjects();
        console.log(res);
      })
      .catch((err) => console.log('Error en borrado'));
  };

  return (
    <div className='GradesGallery'>
      <div className='background'></div>

      <div className='content'>
        <h1>
          Capturas de {gradeTitle} de {subjectName}
        </h1>
        <div className='upload-section'>
          <button
            onClick={submitFile}
            className={
              uploadedFile
                ? 'upload-button-enabled upload-button'
                : 'upload-button-disabled upload-button'
            }
          >
            Subir archivo
          </button>

          <FileUploader
            onFileSelectSuccess={(file) => setUploadedFile(file)}
            onFileSelectError={({ error }) => alert(error)}
          />
        </div>

        <div>
          {images.length == 0 ? (
            <div className='no-images-alert'>
              <img
                src={galleryFiles}
                width='60'
                style={{
                  margin: 'auto',
                  filter: 'opacity(0.1) drop-shadow(0 0 0 gray)',
                }}
                alt='no-files-uploaded-icon'
              />
              <h2 style={{ fontSize: '1.2rem' }}>No hay capturas subidas</h2>
            </div>
          ) : (
            <div>
              {images.map((img, key) => (
                <div className='file-row'>
                  <h3>{'Archivo ' + (key + 1)}</h3>
                  <div>
                    <button onClick={() => setShowPopUp(true)}>
                      <img src={eyeIcon} alt='eye-icon' />
                    </button>
                    <button>
                      <img
                        src={trashIcon}
                        alt='trash-icon'
                        onClick={() => deletePicture(img.id)}
                      />
                    </button>
                  </div>
                  <div className={`img-popup ${showPopUp && 'show'}`}>
                    <div className='img-container'>
                      <img
                        className='img'
                        src={'data:image/png;base64,' + img.picture}
                        alt='trash-icon'
                      />
                      <button onClick={() => setShowPopUp(false)}>X</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <PrimaryButton className='primary-button' handleClick={backToGrades}>
          Volver
        </PrimaryButton>
      </div>
    </div>
  );
};
