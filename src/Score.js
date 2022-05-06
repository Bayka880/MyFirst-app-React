function Score(pros) {
  function handler(event) {
    pros.modifyScore(pros.getData.name, event.target.textContent);
  }
  return (
    <>
      <button onClick={handler}>+</button>
      <p>{pros.getData.score}</p>
      <button onClick={handler}>-</button>
    </>
  );
}

export default Score;
