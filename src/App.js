import React, { useState } from 'react';
import FilteredList from './components/FilteredList/FilteredList';
import SearchBox from './components/SearchBox/Searchbox';

function App() {
  const [items, setItems] = useState(["Sergio","Sebastián","David"]);
  const [filterText, setFilterText] = useState('');

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  return (
    <div className="App">
      <h1>List Filtering App</h1>
      <SearchBox filterText={filterText} onFilterTextChange={handleFilterTextChange} />
      <FilteredList items={items} filterText={filterText} />
    </div>
  );
}

export default App;
