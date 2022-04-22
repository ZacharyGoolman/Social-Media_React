const ColorButton = (props) => {

    function handleClick(){

    }


    return (  
        <div>
            <tr>
                <td> <button className='inactive' onClick={handleClick}> props.message</button>  </td>
            <tr>
                <td><button className='inactive' onClick={handleClick}> props.message</button></td>
            </tr>
            </tr>
        </div>
               




    );
}
 
export default ColorButton;