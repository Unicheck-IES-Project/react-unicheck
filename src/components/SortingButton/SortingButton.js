import './SortingButton.css';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useState } from 'react';

const SortingButton = ({ handleSortingDirection }) => {
  const [sortAsc, setSortAsc] = useState(false);

  const handleChange = () => {
    setSortAsc(!sortAsc);
    handleSortingDirection(sortAsc);
  };

  return (
    <div class='sorting-icon' onClick={() => handleChange()}>
      {sortAsc ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
    </div>
  );
};

export default SortingButton;
