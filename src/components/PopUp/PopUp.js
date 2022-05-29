import './PopUp.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const PopUp = ({ eliminar, volver, texto }) => {
  return (
    <div className='PopUp'>
      <div className='background'></div>

      <div className='content'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='60'
          height='60'
          fill='#FABD8A'
          class='bi bi-exclamation-circle'
          viewBox='0 0 16 16'
          style={{ paddingTop: '0.3rem' }}
        >
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
        </svg>
        <p className='delete-text'>{texto}</p>
        <div>
          <PrimaryButton handleClick={eliminar}>Si</PrimaryButton>
          <PrimaryButton handleClick={volver}>No</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
