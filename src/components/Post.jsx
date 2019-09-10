import React from 'react';
import Likes from './Likes'

function Post (props){
  // Post recieves a piece of the postList array
  return(
    <div>
      {/* we access the information in the object literal posts with props.post */}
      <h2>{props.post.name}</h2>
      <p>{props.post.content}</p>
      <Likes likes={props.post.likes}/>
    </div>
  )

}

export default Post;
