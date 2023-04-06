export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.currentTarget.elements.query.value.trim());
    e.currentTarget.reset();
  };

  return (
    <div>
      <header className="SearchBar">
        <form onSubmit={handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="query"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
