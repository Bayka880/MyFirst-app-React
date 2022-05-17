import Score from "./Score";

const style = {
  width: "20px",
};
function Player(pros) {
  console.log(pros.max);
  return (
    <div
      className={
        pros.average < pros.playerData.score ? "cardplayerBg" : "cardplayer"
      }
    >
      {pros.max === pros.playerData.score ? (
        <img src="crown.svg" style={style}></img>
      ) : (
        <img src=""></img>
      )}
      <p>{pros.playerData.name}</p>
      <Score
        score={pros.playerData.score}
        index={pros.index}
        modifyScore={pros.modifyScore}
        playerRemove={pros.playerRemove}
      />

      <button onClick={() => pros.playerRemove(pros.playerData.name)}>
        remove player
      </button>
    </div>
  );
}
// setScore={setScore}
export default Player;
