import React from "react";
import Feed from "./components/Feed";

class App extends React.Component {
  // needs a constructor so it can have state
  constructor(props) {
    super(props);
    // set the state to the list of posts, this will be updated as more posts are added
    this.state = {
      // postList is an array of objects that represent posts
      postList: [{ name: "John Doe", content: "This is a test post", likes: 0 }]
    };

    this.handlePostListChange = this.handlePostListChange.bind(this);
  }

  handlePostListChange (newPost){
    let tempState = this.state;
    tempState.postList.push(newPost);
    console.log(tempState)
    this.setState(tempState)
    console.log("app state: ", this.state)
  }

  render() {
    return(
      <div>
        <h1>App is Working</h1>
        {/* passing the App State into the Feed, so that it can display them via PostList */}
        <Feed postList={this.state.postList} onPostListChange={this.handlePostListChange} />
      </div>
    )
  }
}

export default App
