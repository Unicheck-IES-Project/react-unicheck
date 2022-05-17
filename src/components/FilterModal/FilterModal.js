import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import './FilterModal.css';

const FilterModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(!showModal);
  };

  const handleFilter = () => {
    handleShow();
    // Do something to filter.
  };

  return (
    <>
      <div onClick={handleShow} class='filter-icon'>
        {' '}
        <FiFilter />
      </div>
      {showModal ? (
        <div class='modal-content'>
          <span class='filter-option' onClick={handleFilter}>
            Materias cursadas
          </span>
          <span class='filter-option' onClick={handleFilter}>
            Materias en curso
          </span>
        </div>
      ) : null}
    </>
  );
};

export default FilterModal;
