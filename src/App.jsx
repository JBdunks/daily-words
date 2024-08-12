import { useState } from 'react'
import data from './facts.json';
import './assets/fonts.css'
import DisplayFacts from './components/DisplayFacts';
import Header from './components/Header';
function App() {
  const [isFont, setIsFont] = useState('New Times Roman');

  const fontChoice = (choice) =>{
   console.log(choice.value)
   setIsFont(choice.value)
  }

  return (
   
    <div>
     <Header fontChoice ={fontChoice}/>
    <DisplayFacts facts = {data.facts} font = {isFont}/>
    </div>
  )
}

export default App
