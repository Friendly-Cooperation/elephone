import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = e => {
    e.preventDefault()

    // there may be AJAX request also)
    console.log('Send AJAX request', searchText);
  };

  const handleInputChange = e => {
    setSearchText(e.target.value);

    // there may be AJAX request
    console.log('Send AJAX request', e.target.value);
  };

  return (<div className="search__container">
    <form className="search__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Введіть щось для пошуку..."
      />
      <button type="submit">ШУКАТИ</button>
    </form>
  </div>)
};

export default SearchForm;
