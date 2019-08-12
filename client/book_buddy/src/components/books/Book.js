import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Book = ({book}) => {
  if(!book){
    return "Loading..."
  }

  const url = '/books/' + book.id;
  return(
    <Fragment >
      <Link to={url} className='title'>{book.title} </Link>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
    </Fragment>
  )
}

export default Book;
