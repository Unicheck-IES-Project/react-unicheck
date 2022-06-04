import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import './FilterModal.css';
import {
  filterAttendedSubjects,
  filterAttendingSubjects,
  filterNothing,
  filterNotPassedSubjects,
  filterPassedSubjects,
} from '../utilities/FilteringFunctions';

const FilterModal = ({ filterByCondition }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(!showModal);
  };

  const handleFilter = (aFilteringMethod) => {
    handleShow();
    filterByCondition(aFilteringMethod);
  };

  return (
    <>
      <div onClick={handleShow} class='filter-icon'>
        {' '}
        <FiFilter />
      </div>
      {showModal ? (
        <div class='modal-content'>
          <span
            class='filter-option'
            onClick={() => handleFilter(filterNothing)}
          >
            Quitar filtro
          </span>
          <span
            class='filter-option'
            onClick={() => handleFilter(filterAttendedSubjects)}
          >
            Materias cursadas
          </span>
          <span
            class='filter-option'
            onClick={() => handleFilter(filterAttendingSubjects)}
          >
            Materias en curso
          </span>
          <span
            class='filter-option'
            onClick={() => handleFilter(filterNotPassedSubjects)}
          >
            Materias desaprobadas
          </span>
          <span
            class='filter-option'
            onClick={() => handleFilter(filterPassedSubjects)}
          >
            Materias aprobadas
          </span>
        </div>
      ) : null}
    </>
  );
};

export default FilterModal;
