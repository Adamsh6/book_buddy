import React from 'react';



const UserAdd = ({handleAddUser}) => {


  const handleSubmit =(event) => {
    event.preventDefault();
    const userName = event.target.userName.value;
    const user = {
      name: userName
    }
    handleAddUser(user);
  }

  return(
    <div>
    <form onSubmit={handleSubmit} >
    <input type="text" name="userName"/>
    <button type="submit">Add User</button>
    </form>
    </div>
  )
}

export default UserAdd;
