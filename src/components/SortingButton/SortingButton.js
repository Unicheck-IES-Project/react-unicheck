import './SortingButton.css';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useState } from 'react';

const SortingButton = ({ handleSortingDirection }) => {
  const [sortAsc, setSortAsc] = useState(true);

  const handleChange = () => {
    setSortAsc(!sortAsc);
    handleSortingDirection(sortAsc);
  };

  return (
    <div class='sorting-icon' onClick={() => handleChange()}>
      {sortAsc ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
    </div>
  );
};

export default SortingButton;
