import Player from "./Player";

function Playerscore(props) {
  let playercount = 4;
  return (
    <div>
      Player:{playercount}
      <button onClick={props.sortNumber}>Sort</button>
    </div>
  );
}

export default Playerscore;
