import './Home.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SubjectsListContainer from '../../containers/SubjectsListContainer/SubjectsListContainer';
import { useState } from 'react';
import AddSubjectContainer from '../../containers/AddSubjectContainer/AddSubjectContainer';
import SearchBar from '../SearchBar/SearchBar';
import SortingButton from '../SortingButton/SortingButton';
import FilterModal from '../FilterModal/FilterModal';
import {
  sortByNameAsc,
  sortByNameDesc,
  sortByScoreAsc,
  sortByScoreDesc,
  identity,
} from '../utilities/SortingFunctions';

const Home = () => {
  const [showAddSubject, setShowAddSubject] = useState(false);
  const onAddSubjectClick = () => {
    setShowAddSubject(true);
  };
  const onCancelClick = () => {
    setShowAddSubject(false);
  };

  // Search bar
  const [searchingFunc, setSearchingFunc] = useState(() => identity);
  const [dataToSearch, setDataToSearch] = useState('');

  const searchingFunction = (searcherFunc, data) => {
    setSearchingFunc(() => searcherFunc);
    setDataToSearch(data);
  };

  // Search bar

  const [sortingFunc, setSortingFunc] = useState(() => identity);
  const [filterFunc, setFilterFunc] = useState(() => identity);

  const handleSortByNameAsc = (aBoolean) => {
    aBoolean
      ? setSortingFunc(() => sortByNameAsc)
      : setSortingFunc(() => sortByNameDesc);
  };

  const handleSortByScoreAsc = (aBoolean) => {
    aBoolean
      ? setSortingFunc(() => sortByScoreDesc)
      : setSortingFunc(() => sortByScoreAsc);
  };

  const handleFilter = (aFilterFunc) => {
    setFilterFunc(() => aFilterFunc);
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
              <SearchBar searchFunc={searchingFunction} />
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
                <div style={{ marginLeft: '50px' }}>
                  <FilterModal filterByCondition={handleFilter} />
                </div>
              </div>
              <SubjectsListContainer
                sorting={sortingFunc}
                filtering={filterFunc}
                searching={searchingFunc}
                searchingData={dataToSearch}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
