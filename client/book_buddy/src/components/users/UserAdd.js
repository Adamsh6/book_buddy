import React, {Component} from 'react';

class UserAdd extends Component{
  constructor(props){
    super(props)
    this.state = {
      userName: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({userName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const user = {
      name: userName
    }
    this.props.handleAddUser(user);
    this.setState({userName: ""})
  }

  render(){
  return(
    <div>
    <form onSubmit={this.handleSubmit} >
    <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName}/>
    <button type="submit">Add User</button>
    </form>
    </div>
  )
}
}

export default UserAdd;
