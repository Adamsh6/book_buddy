import React from 'react';

const AvailableTradesList = ({trades, user, books, handleTrade, users, filtered, setFiltered}) => {
  if(!user) {
    window.location = '/'
  }

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

  //Returns all books the user owns
  const booksUserHas = books.filter((book, index) => {
    const lastTrade = book.trades[book.trades.length - 1]
    return book.user.name === user.name
  })

  //Handles the submission of a trade
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
    handleTrade(payload)
  }

  const handleChange = (event) => {
    setFiltered()
  }

  //Returns all books that are wanted by a user
  const booksThatAreWanted = (user) => {
    const matchedBooks = booksUserHas.filter((book) => {
      return user.wishlist.includes(book.title)
    })
    return matchedBooks.map((book, index) => {
      return <option key={index} value={index}>{book.title}</option>
    })
  }


  //Filters for not completed and not users trade
  const availableTrades = trades.filter((trade) => {
    if(filtered === false){
      return trade.completed === false && user.name !== trade.user1.name && booksThatAreWanted(findUserByName(trade.user1.name)).length > 0
    } else {
      return trade.completed === false && user.name !== trade.user1.name && booksThatAreWanted(findUserByName(trade.user1.name)).length > 0 && user.wishlist.includes(trade.book1.title)
    }

  })

  //Maps to JSX
  const availableTradesList = availableTrades.map((trade, index) => {
    const user1 = findUserByName(trade.user1.name)
    const booksUserHasOptions = booksThatAreWanted(user1)
    console.log(booksUserHasOptions)
    return (
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
    )})



  return(
    <div>
    <select name="filter" defaultValue={filtered} onChange={handleChange}>
    <option value={false}>All Trades</option>
    <option value={true}>Only Books I Want</option>
    </select>
    {availableTradesList}
    </div>
  )
}

export default AvailableTradesList;
