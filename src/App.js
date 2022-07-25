import './App.css';
import { useState } from 'react'
import Fighter from './components/Fighter'
import FighterScreen from './components/FighterScreen'

function App() {
  const fighters = [
    { name: 'Roy', color: 'blue' },
    { name: 'Yoshi', color: 'brown' },
    { name: 'Mario', color: 'lightskyblue' },
    { name: 'Luigi', color: 'pink' },
    { name: 'Marth', color: 'dodgerblue' },
    { name: 'Link', color: 'gray' },
    { name: 'Jigglypuff', color: 'orange' },
    { name: 'Pikachu', color: 'gold' },
    { name: 'Fox', color: 'mediumseagreen' },
    { name: 'Sheik', color: 'coral' },
    { name: 'Zelda', color: 'midnightblue' },
    { name: 'Ken', color: 'firebrick' }
  ]

  const [selectedFighter, setSelectedFighter] = useState()

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {
          fighters.map((element, index) => {
            return (
              <Fighter fighter={element} setSelectedFighter={setSelectedFighter} />
            )
          })
        }
      </div>
      {
        // Conditional render (based on ternary)
        selectedFighter ?
          <FighterScreen selectedFighter={selectedFighter} />
          : null
      }
    </div>
  );
}

export default App;