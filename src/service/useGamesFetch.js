import axios from "axios";
import { useEffect, useState } from "react";

const useGamesFetch = () => {
  const [games, setGames] = useState();

  // fetch('data.json'
  // ,{
  //   headers : {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //    }
  // }

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get("data.json");

      setGames(response);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { games };
};

export default useGamesFetch;
