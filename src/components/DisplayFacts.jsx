let font ='Times New Roman'

const DisplayFacts = ({ facts, font}) =>{
    const randomFact = facts[Math.floor(Math.random() * facts.length)]

    console.log(font)

    return(
        <div className ={`has-text-centered`} >
            <p style ={{fontFamily: font}}>{randomFact.charAt(0).toUpperCase() + randomFact.slice(1)}</p>
        </div>
    )
}

export default DisplayFacts;

