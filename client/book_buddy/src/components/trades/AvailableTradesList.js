import React from 'react';

const AvailableTradesList = ({trades, user, books, handleTrade, users}) => {
  if(!user) {
    window.location = '/'
  }
  //TODO filter for not completed and not users trades. Needs option to select book to trade, and then submit to trade books.

  //Returns all books the user owns
  const booksUserHas = books.filter((book, index) => {
    return book.user.name === user.name
  })

  //Maps books to options
  const booksUserHasOptions = booksUserHas.map((book, index) => {
    return <option key={index} value={index}>{book.title}</option>
  })

  const findBookByTitle = (title, ownerName) => {
    return books.find((book) => {
      return title === book.title && ownerName === book.user.name
    })
  }

  const findUserByName = (name) => {
    return users.find((user) => {
      return user.name === name
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookToTrade = booksUserHas[event.target.book2.value]
    const bookToGet = findBookByTitle(event.target.book1.value, event.target.user1Name.value)
    const user1 = findUserByName(event.target.user1Name.value)
    const user2 = user
    const payload = {
      tradeId: event.target.trade.value,
      trade: {
        completed: true,
        user2: user2._links.self.href,
        book2: bookToTrade._links.self.href
      },
      book1Id: bookToGet.id,
      book1: {
        user: user2._links.self.href
      },
      book2Id: bookToTrade.id,
      book2 : {
        user: user1._links.self.href
      }
    }
    console.log(payload)
    handleTrade(payload)
  }

  //Filters for not completed and not users trade
  const availableTrades = trades.filter((trade) => {
    return trade.completed === false && user.name !== trade.user1.name
  })

  //Maps to JSX
  const availableTradesList = availableTrades.map((trade, index) => (
    <div key={index}>
    <p>{trade.user1.name} is looking to trade {trade.book1.title} by {trade.book1.author}</p>
    <form onSubmit={handleSubmit}>
    <input type="hidden" name="trade" value={trade.id} />
    <input type="hidden" name="book1" value={trade.book1.title} />
    <input type="hidden" name="user1Name" value={trade.user1.name} />
    <select name="book2">
    <option disabled value="default">Please select a book to trade</option>
    {booksUserHasOptions}
    </select>
    <button type="submit">Trade</button>
    </form>
    </div>
  ))



  return(
    <div>
    {availableTradesList}
    </div>
  )
}

export default AvailableTradesList;
