import Player from "./Player";
import Scoreboard from "./Scoreboard";
import Playerscore from "./Playerscore";
import Addplayer from "./Addplayer";
import { useState } from "react";

let players = [
  {
    name: "Erhes",
    age: "15",
    gender: "male",
    score: 10,
  },
  {
    name: "mygaa",
    age: "26",
    gender: "male",
    score: 12,
  },
  {
    name: "odko",
    age: "24",
    gender: "female",
    score: 10,
  },
  {
    name: "sarnai",
    age: "20",
    gender: "female",
    score: 8,
  },
];

function Main() {
  const [player, setPlayer] = useState(players);
  function sortFunc() {
    let newData = new Array(...player);
    newData.sort((player1, player2) => {
      return player1.name < player2.name ? 1 : -1;
    });

    setPlayer(newData);
  }
  function sortNumber() {
    let newData = new Array(...player);
    newData.sort((a, b) => {
      return a.score < b.score ? 1 : -1;
    });
    setPlayer(newData);
    console.log(newData.sort());
  }

  function modifyScore(pm, index) {
    if (pm == "+") {
      player[index].score += 1;
    } else {
      player[index].score -= 1;
    }
    setPlayer([...player]);
  }
  function addplayer(obj) {
    console.log(obj);
    setPlayer([...player, obj]);
  }
  function average() {
    let total = 0;
    players.forEach((player) => (total += player.score));
    return total / players.length;
  }
  let numberAva = average();
  function playerRemove(e) {
    let filter = player.filter((item) => item.name !== e);
    setPlayer(filter);
  }
  function max() {
    const score = player.map((object) => {
      return object.score;
    });
    return Math.max(...score);
  }
  let getmax = max();

  return (
    <div className="card">
      <div className="cardHeader">
        <Scoreboard sortFunc={sortFunc} />
        <Playerscore sortNumber={sortNumber} />
      </div>
      {player.map((player, index) => {
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
