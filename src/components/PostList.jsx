import React from "react";
import Post from './Post';

function PostList(props){
console.log(props);

  const posts = props.postList.map( (post, index) =>
    <Post post={post} key={index}/>
  )

  return(
  <div>
    {posts}
  </div>)
}

export default PostList;
