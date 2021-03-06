import React from 'react';
import {Link} from 'react-router-dom';


const BooksList = ({user, books, trades, handleDeleteTrade, handleAddTrade}) => {
  if(!user) {
    window.location = '/'
  }

  const usersBooks = books.filter((book) => {
    return book.user.name === user.name
  })



  const handleChange = (event) => {
    event.preventDefault();
    const book = usersBooks[event.target.value];
    const lastTrade = book.trades[book.trades.length - 1]
    //Add trade if book isn't being traded, delete trade if it is
    if(lastTrade === undefined || lastTrade.completed === true){
      const newTrade = {
        user1: user._links.self.href,
        book1: book._links.self.href
      }
      console.log(newTrade);
      handleAddTrade(newTrade)
    } else {
      const trade = trades.find((trade) => (
        trade.completed === false && trade.book1.title === book.title
      ))
      handleDeleteTrade(trade.id)
    }
  }


  const usersBooksJSX = usersBooks.map((book, index) => {
    //Equals -1 if trades array is empty
    const lastTradeIndex = book.trades.length - 1
    if(lastTradeIndex === -1 || book.trades[lastTradeIndex].completed === true)
    {
      return(
        <div className="book-container">
        <li className="book-style" key={index}>
          <h3>{book.title} </h3>
          <h5>by: {book.author}</h5>
          <p><label for="forTrade">Select to trade</label></p>
          <input type="checkbox" id="forTrade" name="forTrade" onChange={handleChange} value={index} checked={false}/>
        </li>
        </div>
      )
    } else {
      return (
        <div className="book-container">
        <li className="book-style" key={index}>
          <h3>{book.title} </h3>
          <h5>by: {book.author}</h5>
          <p><label for="forTrade">Selected for trade</label></p>
          <input type="checkbox" id="forTrade" name="forTrade" onChange={handleChange} value={index} checked={true}/>
        </li>
        </div>
      )
    }
  }
)


if(usersBooks.length === 0){
  return(<div>
    <h2>You have no books saved. Click <Link to="/books/new">here</Link> to add a new book.</h2>
  </div>)
}

  return(
    <div >
    <h2>My Books</h2>
    <ul className="book-container">
      {usersBooksJSX}
    </ul>

    </div>
  )
}

export default BooksList
