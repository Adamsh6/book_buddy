import React from 'react';

const WishList = ({user, handleAddToWishList, users}) => {
  if(!user) {
    window.location = '/'
  }
  const getSelectedUserLocation = () => {
    return users.findIndex((userInArray) => (
      userInArray.id === user.id
    ))
  }

  const books = users[getSelectedUserLocation()].wishlist.map((title, index) => (
    <li key={index}>{title}</li>
  ))

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWishlist = [...users[getSelectedUserLocation()].wishlist, event.target.title.value]
    const payload = {
      wishlist: newWishlist
    }
    handleAddToWishList(user.id, payload)
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="title"/>
      <button type="submit">Add</button>
    </form>
    <ul>
    {books}
    </ul>
    </div>
  )
}

export default WishList
