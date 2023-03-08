import { filterByCategory } from "../../utils/filterBy";
import { Category } from "../categoryTypes";

function TopGamesButton({ setSearchResults, setFilterButtonClicked, games }) {
  const handleClick = () => {
    setSearchResults(filterByCategory(games, Category.Top));
    setFilterButtonClicked(true);
  };

  return <button onClick={handleClick}>{Category.Top.toUpperCase()}</button>;
}

export default TopGamesButton;
