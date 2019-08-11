import React from 'react';

const AvailableTradesList = ({trades, user, books}) => {
  if(!user) {
    window.location = '/'
  }
  //TODO filter for not completed and not users trades. Needs option to select book to trade, and then submit to trade books.

  //Returns all books the user owns
  const booksUserHas = books.filter((book, index) => {
    return book.user.name === user.name
  })

  const booksUserHasOptions = booksUserHas.map((book, index) => {
    return <option key={index} value={index}>{book.title}</option>
  })

  //Filters for not completed and not users trade
  const availableTrades = trades.filter((trade) => {
    return trade.completed === false && user.name !== trade.user1.name
  })



  //Maps to JSX
  const availableTradesList = availableTrades.map((trade, index) => (
    <div key={index}>
    <p>{trade.user1.name} is looking to trade {trade.book1.title} by {trade.book1.author}</p>
    <select>
    <option disabled value="default">Please select a book to trade</option>
    {booksUserHasOptions}
    </select>
    </div>
  ))

  return(
    <div>
    {availableTradesList}
    </div>
  )
}

export default AvailableTradesList;
