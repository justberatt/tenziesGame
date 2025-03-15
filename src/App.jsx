import Die from './components/Die'

function App() {

  const generateAllNewDice = () => {
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

  return (
    <>
      <main>
        <div className="dice-container">
          <Die value={5}/>
          <Die value={3}/>
          <Die value={2}/>
          <Die value={3}/>
          <Die value={4}/>
          <Die value={2}/>
          <Die value={1}/>
          <Die value={6}/>
          <Die value={3}/>
          <Die value={4}/> 
        </div>
      </main>
    </>
  )
}

export default App
