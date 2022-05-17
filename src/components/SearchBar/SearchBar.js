import './SearchBar.css';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

const SearchBar = () => {
  const [data, setData] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('buscaste' + ' ' + data);
  };

  const handleChange = (setValue) => {
    console.log(data);
    return (event) => setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
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
