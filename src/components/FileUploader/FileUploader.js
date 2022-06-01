import React, { useRef } from 'react';
import addImageIcon from '../../assets/add-image.png';

export const FileUploader = ({ onFileSelectSuccess, onFileSelectError }) => {
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 102400)
      onFileSelectError({ error: 'File size cannot exceed more than 1MB' });
    else onFileSelectSuccess(file);
  };

  return (
    <label className='upload-label'>
      <img src={addImageIcon} className='upload-file-icon' alt='add-icon' />
      <input
        type='file'
        accept='image/png, image/jpeg'
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />
    </label>
  );
};
