import React, {Component} from 'react';
import UserSelect from '../../components/users/UserSelect'
import UserAdd from '../../components/users/UserAdd';
import Request from '../../helpers/request';

class LogInContainer extends Component {
  constructor(props){
    super(props)
    this.handleAddUser = this.handleAddUser.bind(this);
  }


  handleAddUser(newUser){
    const request = new Request();
    if(this.props.users.some((user) => (
      user.name === newUser.name
    ))){
      window.alert("Duplicate user name, please enter something different")
    } else {
    request.post('/api/users', newUser)
    .then(() => this.props.getAllData())
  }

  }

  render(){
    return(
      <div>
      <h2>Log in or add a new user</h2>
      <div className="user-forms-wrapper">
      <h3>Log In</h3>
      <UserSelect users={this.props.users} selectedUser={this.props.selectedUser}
      handleUserSelect={this.props.handleUserSelect}/>
      <h3>Add a new User</h3>
      <UserAdd handleAddUser={this.handleAddUser}/>
      </div>
      </div>
    )
  }
}

export default LogInContainer
