import { Category } from "../categoryTypes";
import { filteredByUrl } from "../../utils/filterBy";

function AllGamesButton({ setSearchResults, setFilterButtonClicked, games }) {
  const handleClick = (event) => {
    setSearchResults(filteredByUrl(games, event));

    //Potentially here I could reuse the filterByCategory() method with Category.All argument if i'm sure that every single object has it inside.
    // setSearchResults(filterByCategory(games, Category.All));

    setFilterButtonClicked(false);
  };

  return <button onClick={handleClick}>{Category.All.toUpperCase()}</button>;
}

export default AllGamesButton;
