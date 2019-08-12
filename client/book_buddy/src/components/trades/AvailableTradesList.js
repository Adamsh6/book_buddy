import React from 'react';

const AvailableTradesList = ({trades, user, books, handleTrade, users}) => {
  if(!user) {
    window.location = '/'
  }
  //TODO filter for not completed and not users trades. Needs option to select book to trade, and then submit to trade books.

  //Returns all books the user owns
  const booksUserHas = books.filter((book, index) => {
    const lastTrade = book.trades[book.trades.length - 1]
    return book.user.name === user.name && (lastTrade === undefined || lastTrade.completed === true)
  })

  const booksThatAreWanted = (user) => {
    const matchedBooks = booksUserHas.filter((book) => {
      return user.wishlist.includes(book.title)
    })
    console.log(user.wishlist)
    return matchedBooks.map((book, index) => {
      return <option key={index} value={index}>{book.title}</option>
    })
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

  //TODO: instead of preventing user from trading book if up for trade, delete last trade if completed is false
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
    return trade.completed === false && user.name !== trade.user1.name && booksThatAreWanted(findUserByName(trade.user1.name)).length > 0
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
    {availableTradesList}
    </div>
  )
}

export default AvailableTradesList;
