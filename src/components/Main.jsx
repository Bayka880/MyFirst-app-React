import Player from "./Player";
import Scoreboard from "./Scoreboard";
import Playerscore from "./Playerscore";
import Addplayer from "./Addplayer";
// import { useState, useEffect } from "react";
import { usePlayer } from "../context/PlayerContext";
import { useEffect } from "react";
function Main() {
  const [players, setPlayer] = usePlayer();

  function sortFunc() {
    let newData = new Array(...players);
    newData.sort((player1, player2) => {
      return player1.name < player2.name ? 1 : -1;
    });

    setPlayer(newData);
  }
  function sortNumber() {
    let newData = new Array(...players);
    newData.sort((a, b) => {
      return a.score < b.score ? 1 : -1;
    });
    setPlayer(newData);
    console.log(newData.sort());
  }

  function modifyScore(pm, index) {
    if (pm === "+") {
      players[index].score += 1;
    } else {
      players[index].score -= 1;
    }
    setPlayer([...players]);
  }
  function addplayer(obj) {
    setPlayer([...players, obj]);
  }
  function average() {
    let total = 0;
    players.forEach((player) => (total += player.score));
    return total / players.length;
  }
  let numberAva = average();
  function playerRemove(e) {
    let filter = players.filter((item) => item.name !== e);
    setPlayer(filter);
  }
  function max() {
    const score = players.map((object) => {
      return object.score;
    });
    return Math.max(...score);
  }
  let getmax = max();
  useEffect(() => {
    if (players.length !== 0) {
      localStorage.setItem("players", JSON.stringify(players));
    }
  }, [players]);
  return (
    <div className="card">
      <div className="cardHeader">
        <Scoreboard sortFunc={sortFunc} />
        <Playerscore sortNumber={sortNumber} />
      </div>
      {players &&
        players.map((player, index) => {
          return (
            <Player
              key={index}
              playerData={player}
              average={numberAva}
              index={index}
              modifyScore={(pm) => modifyScore(pm, index)}
              playerRemove={playerRemove}
              max={getmax}
            />
          );
        })}

      <Addplayer addplayer={addplayer} />
    </div>
  );
}

export default Main;
