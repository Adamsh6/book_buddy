import React from 'react';

const WishList = ({user}) => {
  if(!user) {
    window.location = '/'
  }

  const books = user.wishlist.map((title, index) => (
    <li key={index}>{title}</li>
  ))

  return(
    <div>I am a wishlist
    <ul>
    {books}
    </ul>
    </div>
  )
}

export default WishList
