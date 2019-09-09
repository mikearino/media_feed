import React from "react";
import Feed from "./components/Feed";

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [{ name: "John Doe", content: "This is a test post", likes: 0 }]
    };
  }

  render() {
    return <Feed />;
  }
}
