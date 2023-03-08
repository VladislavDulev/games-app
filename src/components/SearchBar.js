import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import { filteredByName } from "../utils/filterBy";

function SearchBar({
  games,
  setSearchTerm,
  setSearchResults,
  filterButtonClicked,
  searchResults,
}) {
  const handleSubmit = (event) => event.preventDefault();

  const handleSearchChange = (event) => {
    if (filterButtonClicked) {
      setSearchTerm(event.target.value);
      setSearchResults(filteredByName(searchResults, event));
    }
    if (!filterButtonClicked) {
      setSearchTerm(event.target.value);
      setSearchResults(filteredByName(games, event));
    }
  };

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search-input"
          onChange={handleSearchChange}
          type="text"
          id="search"
          autoComplete="off"
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
