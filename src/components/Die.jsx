const Die = ({id, value, hold, isHeld}) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white"
  }
  return (
    <button
      style={styles}
      onClick={() => hold(id)}
      className="die"
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, 
      ${isHeld ? "held" : "not held"}`}
    >{value}</button>
  )
}

export default Die
