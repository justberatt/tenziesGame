import { useState } from  'react'
import Die from './components/Die'

export default function App() {
  const [numbers, setNumbers] = useState(generateAllNewDice())

  function generateAllNewDice() {
    let arr = []
    for (let i=0; i<10; i++) {
      arr.push(Math.floor(Math.random() * 6 + 1))
    }
    return arr
    // Another way to do the above task
    //return new Array(10)
    // .fill(0)
    //  .map(() => Math.ceil(Math.random() * 6))
  }

  function handleRollClick() {
    setNumbers(generateAllNewDice());
  }
 
  const dice = numbers.map(number => <Die value={number} />)
  return (
    <>
      <main>
        <div className="dice-container">
            {dice}
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
