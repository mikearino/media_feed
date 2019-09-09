import React from 'react';

function Post (props){
  // Post recieves a piece of the postList array
  return(
    <div>
      {/* we access the information in the object literal posts with props.post */}
      <h2>{props.post.name}</h2>
      <p>{props.post.content}</p>
      <h3>Likes: {props.post.likes}</h3>
      <button>Like</button>
    </div>
  )

}

export default Post;
