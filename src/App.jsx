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

  function hold(id) {
    console.log(id)
  } 


  function handleRollClick() {
    setDice(generateAllNewDice());
  }
 
  const diceElements = dice.map(dieObj => (
    <Die onClick={hold} id={dieObj.id} key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />)
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
