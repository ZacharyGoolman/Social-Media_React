// need to import userState
import React, { useState } from 'react';
// you will need to change the context of the form to be name and post
// you will need to setup a hook for name and a 2nd one for post, example const [name, setName] = useState("")
// these hooks are what will catch the values coming from the inputs 
// you will need to pull up the slides from the form lectures and make sure you setup onChange for both inputs
// you will also need to setup onSubit for the form and have it call a handleSubmit 
// you will have a good example of a handleSubmit function in this slide also


// hooks will go here

//handle submit funcion will go here
//do this last 
//inside of handle submit will be where we pass down the "set" call from a hook you need to make on the app level 
// this will be how we get the post data to app so we can then pass it down to the DisplayPost



const AddPost = (props) => {
        const [name, setName] = useState(' ');
        const [post, setPost] = useState(' ');

        function handleSubmit(formEvent){
            formEvent.preventDefault()
            let newEntry = {
                name: name,
                post: post
            }
            console.log(newEntry)
            props.addNewPost(newEntry)
        }
        return ( 
        <form onSubmit={handleSubmit}>
        <div className= 'border-box'/>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input 
                    type="text" 
                    value={name}
                    onChange={(event)=> setName(event.target.value)} />
                    
                    </div>
                </div>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Post</label>
                <div className="col-sm-10">
                    <input 
                    type="text" 
                    value={post}
                    onChange={(event)=> setPost(event.target.value)} />
                    
                </div>
                <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>
            </div>
        </form>
     );
}

export default AddPost;