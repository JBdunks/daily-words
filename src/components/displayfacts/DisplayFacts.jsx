import './DisplayFacts.css';

const DisplayFacts = ({ facts }) =>{
    const randomFact = facts[Math.floor(Math.random() * facts.length)]
    

    return(
        <div className = 'displayFact'>
            {randomFact.charAt(0).toUpperCase() + randomFact.slice(1)}
        </div>
    )
}

export default DisplayFacts;

