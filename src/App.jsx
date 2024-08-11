import { useState } from 'react'
import data from './facts.json'
import DisplayFacts from './components/displayfacts/DisplayFacts'
function App() {

  return (
   
    <div>
    <DisplayFacts facts = {data.facts}/>
    </div>
  )
}

export default App
