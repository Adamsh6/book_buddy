import React, {Component} from 'react';
import UserSelect from '../../components/users/UserSelect'
import UserAdd from '../../components/users/UserAdd'

class LogInContainer extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      <UserSelect users={this.props.users} selectedUser={this.props.selectedUser}/>
      <UserAdd />
      </div>
    )
  }
}

export default LogInContainer
