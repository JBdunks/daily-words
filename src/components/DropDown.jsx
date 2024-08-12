import { useState } from 'react';

const DropDown = ({fontOptions, selection, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        console.log(option)
        setIsOpen(false)
        onSelect(option)
    };

    const renderedOptions = fontOptions.map((option)=>{
        return <div onClick = {()=>handleOptionClick(option)} key ={option.value}style ={{fontFamily: option.value}}>{option.label}</div>
    })

    let content = 'Font'
    if(selection){
        content = <span style={{fontFamily: selection.value}}>Font</span>

    }
    return(
    <div>
        <div className ='button is-primary is-dark' onClick ={handleClick}>{content}</div>
         {isOpen && <div>{renderedOptions}</div>}
    </div>
    )
}

export default DropDown;