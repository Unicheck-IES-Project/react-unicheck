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
}) => {
  const areUploadedImages = true;
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUploadedFile = (file) => {
    console.log('selecc');
    setUploadedFile(file);
  };

  const submitFile = () => {
    const formData = new FormData();
    formData.append('file', uploadedFile);

    axios
      .post(
        `http://localhost:8080/api/v1/${subjectId}/grade/${gradeId}`,
        formData
      )
      .then((res) => {
        alert('File Upload success');
        console.log(res);
      })
      .catch((err) => alert('File Upload Error'));
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
            onFileSelectSuccess={(file) => handleUploadedFile(file)}
            onFileSelectError={({ error }) => alert(error)}
          />
        </div>

        <div>
          {!areUploadedImages ? (
            <div className='no-images-alert'>
              <img
                src={galleryFiles}
                width='80'
                style={{
                  margin: 'auto',
                  filter: 'opacity(0.1) drop-shadow(0 0 0 gray)',
                }}
                alt='no-files-uploaded-icon'
              />
              <h2>No hay capturas subidas</h2>
            </div>
          ) : (
            <>
              <div className='file-row'>
                <h3>Parcial hoja 1</h3>
                <div>
                  <button>
                    <img src={eyeIcon} alt='eye-icon' />
                  </button>
                  <button>
                    <img src={trashIcon} alt='trash-icon' />
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
