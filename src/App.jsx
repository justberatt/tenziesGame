import { useState, useRef, useEffect } from  'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice()) // Added lazy state initialization
  const newGameButtonRef = useRef(null) // In React the prefered way of accessing a DOM Node is by using ref. It is like a querySelector in JavaSacript

  useEffect(() => {
    gameWon && newGameButtonRef.current.focus()
  })

  const values = dice.map(die => die.value); // returns a new array with the values and assigns it to the 'values' variable
  const areAllHeld = dice.every(die => die.isHeld); // checks if all dice are held

  const allValuesMatch = values.every(value => value === values[0]); // check if all values are the same

  const gameWon = allValuesMatch && areAllHeld //This will ensure the gameWon value stays false until are conditions are met
  
  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: 1,
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
    setDice(oldDice => oldDice.map(die => 
        die.isHeld ?
            die :
            { ...die, value: Math.ceil(Math.random() * 6) }
    ))
  }

  function handleNewGameClick() {
    setDice(generateAllNewDice)
  }
 
  const diceElements = dice.map(dieObj => (
    <Die hold={hold} id={dieObj.id} key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />)
  )

  return (
    <main>
    <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
          {diceElements}
      </div>
      <button
        ref={newGameButtonRef}
        onClick={ gameWon ? handleNewGameClick : handleRollClick}
        className="roll-btn">
        {gameWon ? "New Game" : "Roll"}
      </button>
      { gameWon && <Confetti /> }
      <div aria-live="polite" className='sr-only'>
        {gameWon && <p>Congratulations! You won? Press "New Game" to start again.</p>}
      </div>
    </main>
  )
}
