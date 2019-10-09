import React from 'react';
import HelloWorld from './state/HelloWorld';
import Bomb from './state/Bomb';
import RouletteGun from './state/RouletteGun';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber={8}/>
    </div>
  )
}

export default App;
