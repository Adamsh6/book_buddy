import React from 'react';

const UserSelect = ({users, selectedUser, handleUserSelect}) => {
    let defaultUser = "default"
    if(selectedUser != null) {
      defaultUser = users.indexOf(selectedUser)
    }

  const options = users.map((user, index) => (
    <option key={index} value={index}>{user.name}</option>
  ))

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserSelect(event.target.user.value);
        window.alert("Hey Book Buddy User, please select from the menu!")
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
    <select name="user" defaultValue={defaultUser}>
    <option disabled value="default">Please select your username</option>
    {options}
    </select>
    <button type="submit">Select User</button>
    </form>
    </div>
  )
}

export default UserSelect;
