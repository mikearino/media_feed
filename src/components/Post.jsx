import React from 'react';

function Post (props){
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.content}</p>
      <h3>Likes: {props.likes}</h3>
      <button>Like</button>
    </div>
  )

}

export default Post;
