import './Home.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SubjectsListContainer from '../../containers/SubjectsListContainer/SubjectsListContainer';
import { useState } from 'react';
import AddSubjectContainer from '../../containers/AddSubjectContainer/AddSubjectContainer';
import SearchBar from '../SearchBar/SearchBar';
import SortingButton from '../SortingButton/SortingButton';
import FilterModal from '../FilterModal/FilterModal';

const Home = () => {
  const [showAddSubject, setShowAddSubject] = useState(false);
  const onAddSubjectClick = () => {
    setShowAddSubject(true);
  };
  const onCancelClick = () => {
    setShowAddSubject(false);
  };

  const handleSortByNameAsc = (aBoolean) => {
    if (aBoolean) {
      console.log('Ordena por nombre ascendente bro.');
    } else {
      console.log('Ordena por nombre descscendente bro.');
    }
    // Do something.
  };

  const handleSortByScoreAsc = (aBoolean) => {
    if (aBoolean) {
      console.log('Ordena por nota ascendente bro.');
    } else {
      console.log('Ordena por nota descscendente bro.');
    }
    // Do something.
  };

  return (
    <>
      {showAddSubject ? (
        <AddSubjectContainer onCancelClick={onCancelClick} />
      ) : (
        <div className='Home'>
          <div className='popup'></div>
          <div className='dashboard'>
            <div className='dashboard-title-button'>
              <h1>Materias</h1>
              <PrimaryButton handleClick={onAddSubjectClick}>
                Agregar Materia
              </PrimaryButton>
              <SearchBar />
            </div>
            <div className='contacts-grid'>
              <div className='columns-names'>
                <div class='compound-column-name'>
                  <p>Nombre</p>
                  <SortingButton handleSortingDirection={handleSortByNameAsc} />
                </div>
                <p>Periodo</p>
                <p>Año</p>
                <p>Estado</p>
                <div class='compound-column-name'>
                  <p>Nota</p>
                  <SortingButton
                    handleSortingDirection={handleSortByScoreAsc}
                  />
                </div>
                <div>
                  <FilterModal />
                </div>
              </div>
              <SubjectsListContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
