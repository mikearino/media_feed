import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

function Feed(props) {
  return (
    <div>
      <NewPostForm />
      <PostList postList={props.postList}/>
    </div>
  );
}

export default Feed;
