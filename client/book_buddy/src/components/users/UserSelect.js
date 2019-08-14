import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class UserSelect extends Component{
  constructor(props){
    super(props)
    this.state = {
      redirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleUserSelect(event.target.user.value);
    this.setState({redirect: true})
  }
render(){
  const options = this.props.users.map((user, index) => (
    <option key={index} value={index}>{user.name}</option>
  ))

  const { redirect } = this.state;

  if (redirect) {
    return <Redirect to ='/books'/>;
  }

  return(
    <div>
    <form onSubmit={this.handleSubmit}>
    <select name="user" defaultValue="default">
    <option disabled value="default">Please select your username</option>
    {options}
    </select>
    <button type="submit">Select User</button>
    </form>
    </div>
  )
}
}

export default UserSelect;
