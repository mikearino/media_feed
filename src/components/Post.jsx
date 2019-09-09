import React from 'react';

function Post (props){
  console.log("Post props:", props);
  return(
    <div>
      <h2>{props.post.name}</h2>
      <p>{props.post.content}</p>
      <h3>Likes: {props.post.likes}</h3>
      <button>Like</button>
    </div>
  )

}

export default Post;
