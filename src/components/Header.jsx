import { useState } from 'react';
import DropDown from './DropDown'

const Header = ({ fontChoice }) => {
    const [selection, setSelection] = useState(null);

    const handleSelect =(option) =>{
        setSelection(option)
        fontChoice(option)
    };

    const fontOptions = [
        {label: "Times New Roman", value: "Times New Roman"},
        {label: "Cursive", value: "Cursive"},
        {label: "Impact", value: "Impact"}
    ]
    return(
        <div>
            <button onClick={()=>location.reload()}className = 'button is-info'>New Fact</button>
            <DropDown fontOptions={fontOptions} selection ={selection}  onSelect = {handleSelect}/>
        </div>
    )
}

export default Header;