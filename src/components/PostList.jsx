import React from "react";
import Post from './Post';
// UUID here generates unique keys for components
import {v4} from 'uuid';

function PostList(props){

  // aptly named PostList class receives the postList from App via props

  // this loops through the postList array, and returns an array of <Post /> components
  const posts = props.postList.map( (post, index) =>
    <Post post={post} key={v4()}/>
  )

  return(
  <div>
    {/* render the array of <Post /> components here */}
    {posts}
  </div>)
}

export default PostList;
