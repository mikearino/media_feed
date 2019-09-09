import React from "react";
import Post from './Post';

function PostList(props){

  // the aptly named PostList class receives the postList from App via props

  // this loops through the postList array, and returns an array of <Post /> components
  const posts = props.postList.map( (post, index) =>
    <Post post={post} key={index}/>
  )

  return(
  <div>
    {/* render the array of <Post /> components here */}
    {posts}
  </div>)
}

export default PostList;
