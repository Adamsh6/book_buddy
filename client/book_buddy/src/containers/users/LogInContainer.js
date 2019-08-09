import React, {Component} from 'react';
import UserSelect from '../../components/users/UserSelect'

class LogInContainer extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <UserSelect users={this.props.users} selectedUser={this.props.selectedUser}/>
    )
  }
}

export default LogInContainer
