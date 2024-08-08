import React from 'react';

function SearchBox({ filterText, onFilterTextChange }) {
  const handleInputChange = (event) => {
    onFilterTextChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={handleInputChange}
    />
  );
}

export default SearchBox;
