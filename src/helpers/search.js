export const handleInputChange = (event, setSearchQuery) => {
  setSearchQuery(event.target.value);
};

export const handleSearchClick = () => {
  setSearchQuery('');
};

export const handleKeyPress = (event, setSearchQuery) => {
  if (event.key === 'Enter') {
    setSearchQuery('');
  }
};