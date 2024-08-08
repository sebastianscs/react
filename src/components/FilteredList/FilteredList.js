import React from 'react';

function FilteredList({ items, filterText }) {
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default FilteredList;
