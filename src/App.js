import React from 'react';
import HelloWorld from './state/HelloWorld';
import Bomb from './state/Bomb';
import RouletteGun from './state/RouletteGun';
import Accordion from './state/Accordion';

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber={8}/>
      <Accordion sections={sectionsProp}/>
    </div>
  )
}

export default App;
