import { Category } from "../categoryTypes";
import { filterByCategory } from "../../utils/filterBy";

function NewGamesButton({ setSearchResults, setFilterButtonClicked, games }) {
  const handleClick = () => {
    setFilterButtonClicked(true);

    setSearchResults(filterByCategory(games, Category.New));
  };

  return <button onClick={handleClick}>{Category.New.toUpperCase()}</button>;
}

export default NewGamesButton;
