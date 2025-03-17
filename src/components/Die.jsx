const Die = ({id, value, onClick, isHeld}) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white"
  }
  return (
    <button style={styles} onClick={() => onClick(id)} className="die">{value}</button>
  )
}

export default Die
