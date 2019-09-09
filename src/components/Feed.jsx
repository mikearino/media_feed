import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

function Feed(props) {
  // feed takes in props, which is the postList from App state
  return (
    <div>
      {/*feed contains a New Post Form*/}
      <NewPostForm />
      {/*Since the master list of posts was passed down from the App into feed, it's available here as props.postList*/}
      <PostList postList={props.postList}/>
    </div>
  );
}

export default Feed;
