import React from 'react'

class Like extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes: props.likes
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleLike(){
    let tempState = this.state
  }

  handleClick(){
    this.handleLike();
  }

  render(){
    return (
    <div>
      <h3>{this.state.likes}</h3>
      <button onClick={this.handleClick}>Like</button>
    </div>
    )
  }
}

export default Like
