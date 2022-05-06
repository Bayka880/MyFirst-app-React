import Score from "./Score";

function Player(pros) {
  return (
    <div className="cardplayer">
      <p>{pros.playerData.name}</p>
      <Score getData={pros.playerData} modifyScore={pros.modifyScore} />
    </div>
  );
}

export default Player;
