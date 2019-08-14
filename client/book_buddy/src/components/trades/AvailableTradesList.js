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

    const bookToGet = findBookByTitle(event.target.book1.value, event.target.user1Name.value)
    const user1 = findUserByName(event.target.user1Name.value)
    const matchedBooks = booksUserHas.filter((book) => {
      return user1.wishlist.includes(book.title)
    })
    const bookToTrade = matchedBooks[event.target.book2.value]
    const user2 = user
    const wishlist1 = [...user1.wishlist]
    const wishlist2 = [...user2.wishlist]
    console.log(bookToTrade.title)
    console.log(bookToGet.title)
    if(wishlist1.indexOf(bookToTrade.title) > -1){
      wishlist1.splice(wishlist1.indexOf(bookToTrade.title), 1)
    }
    if(wishlist2.indexOf(bookToGet.title) > -1){
      wishlist2.splice(wishlist2.indexOf(bookToGet.title), 1)
    }

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
      },
      user1Id: user1.id,
      wishlist1: {
        wishlist: wishlist1
      },
      user2Id: user2.id,
      wishlist2: {
        wishlist: wishlist2
      }
    }
    console.log(wishlist1)
    console.log(wishlist2)
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
      return trade.completed === false && user.name !== trade.user1.name && booksThatAreWanted(findUserByName(trade.user1.name)).length > 0 && findUserByName(user.name).wishlist.includes(trade.book1.title)
    }

  })

  //Maps to JSX
  const availableTradesList = availableTrades.map((trade, index) => {
    const user1 = findUserByName(trade.user1.name)
    const booksUserHasOptions = booksThatAreWanted(user1)
    console.log(booksUserHasOptions)
    return (
      <div key={index} className="trade-style">
      <p>{trade.user1.name} is looking to trade <b>{trade.book1.title}</b> by {trade.book1.author}</p>
      <form onSubmit={handleSubmit}>
      <input type="hidden" name="trade" value={trade.id} />
      <input type="hidden" name="book1" value={trade.book1.title} />
      <input type="hidden" name="user1Name" value={trade.user1.name} />
      <label for="book2">Select a book to trade:</label>
      <select name="book2">
      <option disabled value="default">Please select a book to trade</option>
      {booksUserHasOptions}
      </select>
      <button type="submit">Trade</button>
      </form>
      </div>
    )})

    if(availableTrades.length === 0){
      return(
        <div>
        <select name="filter" defaultValue={filtered} onChange={handleChange}>
        <option value={false}>All Trades</option>
        <option value={true}>Only Books I Want</option>
        </select>
        <h2>No Trades Available</h2>
        </div>
      )
    }

  return(
    <div>
    <h2>Available Trades</h2>
    <label for="page-select">Filter trades:  </label>
    <select name="filter" defaultValue={filtered} onChange={handleChange} className="page-select">
    <option value={false}>All Trades</option>
    <option value={true}>Only Books I Want</option>
    </select>
    <div className="trade-container">
    {availableTradesList}
    </div>
    </div>
  )
}

export default AvailableTradesList;
