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
      <UserSelect users={this.props.users} selectedUser={this.props.selectedUser}
      handleUserSelect={this.props.handleUserSelect}/>
      <UserAdd handleAddUser={this.handleAddUser}/>
      </div>
    )
  }
}

export default LogInContainer
