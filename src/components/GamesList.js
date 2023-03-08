import "./GameList.css";

function GamesList({ games, searchResults, searchTerm }) {
  const singleListComponent = (param) => {
    return (
      <img
        className="grid-item"
        src={param.url}
        alt="games-covers"
        key={param.id}
      ></img>
    );
  };

  const allGamesData = games?.map((obj) => singleListComponent(obj));

  const filteredGames = searchResults?.map((obj) => singleListComponent(obj));

  const contentToShow =
    (searchResults === undefined || searchResults.length === 0) && !searchTerm
      ? allGamesData
      : filteredGames;

  return <div className="game-list">{contentToShow}</div>;
}

export default GamesList;
