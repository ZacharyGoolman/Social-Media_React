import React, { useState } from 'react';
import './ColorButton.css'



const ColorButton = (props) => {
    const [buttonClass, setButtonClass] = useState('inactive');
    function handleClick(){
        if (buttonClass === 'inactive'){
            setButtonClass('active')
        }
        else{
            setButtonClass('inactive')
        }
    }


    return (  
        <div>
            <tr>
                <td><button className={buttonClass} onClick={handleClick}> {props.message} Like </button></td>
            </tr> 
            <tr>
                <td><button className={buttonClass} onClick={handleClick}> {props.message} Dislike </button></td>
            </tr>
           
        </div>
               




    );
}
 
export default ColorButton;