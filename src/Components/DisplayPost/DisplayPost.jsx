const DisplayPost = (props) => {


    return ( 
            <table>  
              {props.posts.map((post, index) => {
                  return (
                    <tbody>
                            <tr>
                                <th>{post.name}</th>
                            </tr>
                        <tr>
                            <td>{post.post}</td>
                            {/* you will replace this button with a new component and that "Button" component will have a like and dislike button */}
                        </tr>  
                        <button>like</button>
                        <button>Dislike</button>
                    </tbody>
                
                  );
              })}
            </table>
       
     );
}
 
export default DisplayPost;