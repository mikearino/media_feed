import React, {Component} from 'react';

let _name = null
let _content = null

class NewPostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: { name: "", content: "", likes: 0 },
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event){
    console.log("submitted")
    console.log("this is the state in handleSubmit", this.state)

    // this finds the thing with name="name" in the submit event
    let name = event.target.name.value

    // this finds the thing with name="content" in the submit event
    let content = event.target.content.value
    event.preventDefault();
    this.props.onPostListChange({name: name, content: content, likes: 0});
  }

  handleChange(event){

    // make a copy of the state
    let tempState = this.state
    // get the name property of the part of the form being changed
    let name = event.target.name

    // this syntax allows us to access any property of the post based on the value of let name
    // similar to hash in ruby
    tempState.post[name] = event.target.value

    this.setState(tempState)
    console.log(this.state)
  }



  render(){


    return(

      <div>
        {/* these inputs have an onChange property that triggers a handle change function  */ }
        {/* that function basically updates the state of the post, so that there is a current post stored in its state */ }
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input   name="name" value = {this.state.post.name} onChange = {this.handleChange}/>
          <label>Content</label>
          <textarea  name="content" value = {this.state.post.content} onChange = {this.handleChange} />
          <button type='submit'>Post</button>
        </form>
      </div>
    );

  }
}

export default NewPostForm;
