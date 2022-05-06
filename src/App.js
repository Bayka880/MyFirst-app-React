import "./App.css";
import "./Player.css";
import Player from "./Player";
import Scoreboard from "./Scoreboard";
import Playerscore from "./Playerscore";

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

function App() {
  function modifyScore(name, plusMinus) {
    if (plusMinus == "+") {
      players[findPlayerIndex(name)].score++;
    } else {
      players[findPlayerIndex(name)].score--;
    }
    console.log(players);
  }
  function findPlayerIndex(playerName) {
    let foundIndex = 0;
    players.map((player, index) => {
      if (player.name == player.name) {
        foundIndex = index;
      }
    });
    return foundIndex;
  }
  return (
    <div className="card">
      <div className="cardHeader">
        <Scoreboard />
        <Playerscore />
      </div>
      {players.map((player, index) => {
        return (
          <Player key={index} playerData={player} modifyScore={modifyScore} />
        );
      })}
    </div>
  );
}

export default App;
