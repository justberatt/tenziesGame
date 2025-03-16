import { useState } from  'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())
  
  function generateAllNewDice() {
    let arr = []
    for (let i=0; i<10; i++) {
      arr.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: nanoid()
      })
    }
    console.log(arr)
    return arr
    // Another way to do the above task
    //return new Array(10)
    // .fill(0)
    //  .map(() => Math.ceil(Math.random() * 6))
  }

  function handleRollClick() {
    setDice(generateAllNewDice());
  }
 
  const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value} />)
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
