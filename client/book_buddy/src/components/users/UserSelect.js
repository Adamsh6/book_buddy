import React from 'react';

const UserSelect = ({users, selectedUser, handleUserSelect}) => {


  const options = users.map((user, index) => (
    <option key={index} value={index}>{user.userName}</option>
  ))

  const handleSubmit = (event) => {
    event.preventDefault();
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
