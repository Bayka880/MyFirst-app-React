function Score(pros) {
  function incAndDec(e) {
    if (e.target.textContent === "+") {
      pros.modifyScore("+", pros.index);
    } else {
      pros.modifyScore("-", pros.index);
    }
  }

  return (
    <>
      <button onClick={(e) => incAndDec(e)}>+</button>
      <p>{pros.score}</p>
      <button onClick={(e) => incAndDec(e)}>-</button>
    </>
  );
}

export default Score;
