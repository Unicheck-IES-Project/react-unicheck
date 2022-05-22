import './SearchBar.css';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

const SearchBar = ({ searchFunc }) => {
  const [data, setData] = useState('');

  const searcher = (subjects, dataToSearch) => {
    return subjects.filter((subject) =>
      subject.nombre.toLowerCase().includes(dataToSearch)
    );
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchFunc(searcher, data);
  };

  const handleChange = (setValue) => {
    return (event) => setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch} class='search-bar-container'>
        <input
          type='search'
          class='search-bar'
          value={data}
          onChange={handleChange(setData)}
        />
        <button type='submit' class='search-button'>
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
