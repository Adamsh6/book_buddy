import React from 'react';

const BooksList = ({user}) => {
  if(!user) {
    window.location = '/'
  }
  const books = user.books.map((book, index) => (
    <li key={index}>{book.title} || {book.author}</li>
  ))
  return(
    <div>
    <ul>
    {books}
    </ul>

    </div>
  )
}

export default BooksList
