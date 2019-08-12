import React from 'react';


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
        <div className="book-style">
        <li className="book_element-style"key={index}>
        <p>{book.title} by {book.author}</p>
        <input type="checkbox" id="forTrade" name="forTrade" onChange={handleChange} value={index} checked={false}/>
        </li>
        </div>
      )
    } else {
      return (
        <div className="book-style">
        <li key={index}>
        <p>{book.title} by {book.author}</p>
        <input type="checkbox" id="forTrade" name="forTrade" onChange={handleChange} value={index} checked={true}/>
        </li>
        </div>
      )
    }
  }
)

  return(
    <div >
    <h3>My Books</h3>
    <ul className="book-container">
    {usersBooksJSX}
    </ul>

    </div>
  )
}

export default BooksList
