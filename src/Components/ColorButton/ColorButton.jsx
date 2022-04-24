import React, { useState } from 'react';



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
                <td><button className='inactive' onClick={handleClick}> {props.message}</button></td>
            </tr> 
            <tr>
                <td><button className='inactive' onClick={handleClick}> {props.message}</button></td>
            </tr>
           
        </div>
               




    );
}
 
export default ColorButton;