import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

function Feed() {
  return (
    <div>
      <NewPostForm />
      <PostList />
    </div>
  );
}

export default Feed;
