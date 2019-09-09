import React from "react";
import Feed from "./components/Feed";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [{ name: "John Doe", content: "This is a test post", likes: 0 }]
    };
  }

  render() {
    return(
      <div>
        <h1>App is Working</h1>
        <Feed postList={this.state.postList} />
      </div>
    )
  }
}

export default App
