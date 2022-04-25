import ColorButton from "../ColorButton/ColorButton";

const DisplayPost = (props) => {


    return ( 
            <table>  
              {props.posts.map((post, index) => {
                  return (
                    
                    <tbody>
                            <tr>
                                <td>{post.name}</td>
                                
                            </tr>
                            <tr>
                                <td>{post.post}</td>
                                
                            </tr>
                            <tr>
                            <td> <ColorButton/> </td>
                            
                            </tr>
                    </tbody>
                
                  );
              })}
            </table>
       
     );
}
 
export default DisplayPost;