import React from 'react';
// import WishListItem from './WishLisItem';

const WishListList = (props) => {

  const getSelectedUserLocation = () => {
    return props.users.findIndex((userInArray) => (
      userInArray.id === props.user.id
    ))
  }

  const books = props.users[getSelectedUserLocation()].wishlist.map((title, index) => (
    <div>
    <li key={index} title={title}>{title}</li>
    <button>Delete</button>
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
