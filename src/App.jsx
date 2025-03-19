import { useState } from  'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())
  
  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))
  }

  // the hold() function updates the state of game by toggling the 
  // isHeld property of a specific die
  // It takes the 'id' a a parameter (id of a specific dice) so that it knows which die to change
  function hold(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die
    }))
  } 


  function handleRollClick() {
    setDice(generateAllNewDice());
  }
 
  const diceElements = dice.map(dieObj => (
    <Die hold={hold} id={dieObj.id} key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />)
  )

  return (
    <>
      <main>
        <div className="dice-container">
            {diceElements}
        </div>
        <button
          onClick={handleRollClick}
          className="roll-btn">
          Roll
        </button>
      </main>
    </>
  )
}
