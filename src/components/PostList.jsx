import React from "react";
import Post from './Post';

function PostList(props) {

  posts = props.postList.map( (post) =>
    <Post post={post} />
  )
  
  return(
  <div>
    <Post />
  </div>)
}

export default PostList;
