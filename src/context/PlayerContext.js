import { useContext, createContext, useState, useEffect } from "react";

const PlayerContext = createContext();

export function usePlayer() {
  return useContext(PlayerContext);
}

export default function PlayerProvider(props) {
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("players")) {
      console.log("locald baigaa");
      setPlayer(JSON.parse(localStorage.getItem("players")));
    } else {
      console.log("locald baihgui");
      fetch("players.json")
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("players", JSON.stringify(res.players));
          setPlayer(res.players);
        });
    }
  }, []);

  return (
    <PlayerContext.Provider value={[players, setPlayer]}>
      {props.children}
    </PlayerContext.Provider>
  );
}
