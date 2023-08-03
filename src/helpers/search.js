export const handleInputChange = (event, setSearchQuery) => {
  setSearchQuery(event.target.value);
};

export const handleSearchClick = (event, setSearchQuery) => {
  setSearchQuery(event.target.value);
};

export const handleKeyPress = (event, setSearchQuery) => {
  if (event.key === 'Enter') {
    setSearchQuery(event.target.value);
  }
};