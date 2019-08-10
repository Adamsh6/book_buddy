import React from 'react';

const BooksList = ({user, books}) => {
  if(!user) {
    window.location = '/'
  }
  //TODO Need to figure out whether the book is on a trade or not. Then create a toggle button that creates a new trade or deletes the trade if you don't want it on trade.
  //HOW Need to get the books trades data, pull off the last trade and see if it was completed. If not, it should be on trade.
  //To add to a trade, we need to create a new trade, with user1 being selected user and book1 being the book the button is associated with.
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  const checkedBox = () => (
    <input type="checkbox" id="forTrade" name="forTrade" checked />
  )

  const usersBooks = books.filter((book) => {
    return book.user.name === user.name
  })
  const usersBooksJSX = usersBooks.map((book, index) => {
    //Equals -1 if trades array is empty
    const lastTrade = book.trades.length - 1
    if(lastTrade === -1 || book.trades[lastTrade].completed === true)
    {
      return(
        <li key={index}>
        <p>{book.title} by {book.author}</p>
        <input type="checkbox" id="forTrade" name="forTrade" onChange={handleChange} value={index}/>
        </li>
      )
    } else {
      return (
        <li key={index}>
        <p>{book.title} by {book.author}</p>
        <input type="checkbox" id="forTrade" name="forTrade" onChange={handleChange} value={index} checked/>
        </li>
      )
    }
  }
)



//Old way of mapping
  // const books1 = user.books.map((book, index) => (
  //   <li key={index}>
  //   <p>{book.title} by {book.author}</p>
  //   <form>
  //   <input type="checkbox" />
  //   </form>
  //   </li>
  // ))
  return(
    <div>
    <h3>My Books</h3>
    <ul>
    {usersBooksJSX}
    </ul>

    </div>
  )
}

export default BooksList
