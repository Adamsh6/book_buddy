import React from 'react';

const WishList = ({user, handleAddToWishList}) => {
  if(!user) {
    window.location = '/'
  }

  const books = user.wishlist.map((title, index) => (
    <li key={index}>{title}</li>
  ))

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWishlist = [...user.wishlist, event.target.title.value]
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
