function Scoreboard(props) {
  return (
    <div className="score">
      Scoreboard
      <button onClick={props.sortFunc}>Sort</button>
    </div>
  );
}
export default Scoreboard;
