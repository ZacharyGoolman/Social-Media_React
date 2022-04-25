import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import AddPost from './Components/AddPost/AddPost';
import './App.css';


function App() {
  // this hook will hold all of our post data, when calling it make sure to note the ... you used in the previous project 
  // ... makes it so the current value of posts does not get replaced when we call setPost, it keeps the old values ... and adds our new value to it!
  const [posts, setPosts] = useState([{name : "Zach", post: "I used to think a physical map was hard to use then I learned about a coding map"}, {name : "Pascal", post: "I got the styles to keep your website versatile"}]) 

  function AddNewPost(entry){

    let tempEntries = [...posts, entry]

    setPosts(tempEntries)
  }

  return (
    <div>
      <div className="header">
        <h1>Social Feed</h1>
        
        <AddPost addNewPost = {AddNewPost}/>
        <DisplayPost posts={posts}/>
        
      </div>
    </div>

  );
}

export default App;
