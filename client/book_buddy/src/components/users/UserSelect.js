import React from 'react';

const UserSelect = ({users, selectedUser, handleUserSelect}) => {
  console.log(users[1])
  const options = users.map((user, index) => (
    <option key={index} value={index}>{user.userName}</option>
  ))

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.user)
    handleUserSelect(event.target.user.value);
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
    <select name="user">
    {options}
    </select>
    <button type="submit">Select User</button>
    </form>
    </div>
  )
}

export default UserSelect;
