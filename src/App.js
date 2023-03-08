import { useState } from "react";
import "./App.css";
import GamesList from "./components/GamesList";
import SearchBar from "./components/SearchBar";
import AllGamesButton from "./components/buttons/AllGamesButton";
import useGamesFetch from "./service/useGamesFetch";
import TopGamesButton from "./components/buttons/TopGamesButton";
import NewGamesButton from "./components/buttons/NewGamesButton";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
  const { games } = useGamesFetch();

  return (
    <div className="App">
      <div className="nav-bar">
        <SearchBar
          setSearchTerm={setSearchTerm}
          setSearchResults={setSearchResults}
          games={games}
          filterButtonClicked={filterButtonClicked}
          searchResults={searchResults}
        />
        <AllGamesButton
          games={games}
          setSearchResults={setSearchResults}
          setFilterButtonClicked={setFilterButtonClicked}
        />
        <TopGamesButton
          games={games}
          setSearchResults={setSearchResults}
          setFilterButtonClicked={setFilterButtonClicked}
        />
        <NewGamesButton
          games={games}
          setSearchResults={setSearchResults}
          setFilterButtonClicked={setFilterButtonClicked}
        />
      </div>
      <GamesList
        games={games}
        searchResults={searchResults}
        searchTerm={searchTerm}
        filterButtonClicked={filterButtonClicked}
      />
    </div>
  );
}

export default App;
