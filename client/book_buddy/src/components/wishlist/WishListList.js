import React from 'react';
// import WishListItem from './WishLisItem';

const WishListList = (props) => {

  const getSelectedUserLocation = () => {
    return props.users.findIndex((userInArray) => (
      userInArray.id === props.user.id
    ))
  }

<<<<<<< HEAD
  const books = props.users[getSelectedUserLocation()].wishlist.map((title, index) => (
    <div>
    <li key={index} title={title}>{title}</li>
    <button>Delete</button>
=======
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
>>>>>>> fda3fe9cbce6f9536cfa062416e47a45470d9ba8
    </div>
  ))

  //change to wishlistitem

  return(
    <ul>
    {books}
    </ul>
  )
}

export default WishListList;
