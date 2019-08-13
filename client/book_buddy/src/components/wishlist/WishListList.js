import React from 'react'

const WishListList = (props) => {

  const getSelectedUserLocation = () => {
    return props.users.findIndex((userInArray) => (
      userInArray.id === props.user.id
    ))
  }

  const books = props.users[getSelectedUserLocation()].wishlist.map((title, index) => (
    <li key={index}>{title}</li>
  ))

  return(
    <ul>
    {books}
    </ul>
  )
}

export default WishListList;
