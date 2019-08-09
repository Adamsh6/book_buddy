import React from 'react';

const UserSelect = ({users, selectedUser}) => {

  const options = users.map((user, index) => (
    <option key={index} value={user}>{user.userName}</option>
  ))

  return(
    <div>
    <form>
    <select name="user">
    {options}
    </select>
    <button type="submit">Select User</button>
    </form>
    </div>
  )
}

export default UserSelect;