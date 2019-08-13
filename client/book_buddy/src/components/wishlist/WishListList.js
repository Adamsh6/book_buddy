import React from 'react'

const WishListList = (props) => {

  const getSelectedUserLocation = () => {
    return props.users.findIndex((userInArray) => (
      userInArray.id === props.user.id
    ))
  }

  const wishlist = props.users[getSelectedUserLocation()].wishlist

  const handleDelete = (event) => {
    const newWishlist = [...wishlist];
    const index = newWishlist.indexOf(event.target.value);
    newWishlist.splice(index, 1);
    const id = props.user.id
    const payload = {
      wishlist: newWishlist
    }
    props.handleDeleteItem(id, payload)
  }

  const books = wishlist.map((title, index) => (
    <div>
    <li key={index}>{title}</li>
    <button value={title} onClick={handleDelete}>Delete</button>
    </div>
  ))

  return(
    <ul>
    {books}
    </ul>
  )
}

export default WishListList;
