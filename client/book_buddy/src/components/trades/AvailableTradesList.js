import React from 'react';

const AvailableTradesList = ({trades, user}) => {

  const availableTrades = trades.filter((trade) => {
    return trade.completed === false && user.userName !== trade.user1.userName
  })

  const availableTradesList = availableTrades.map((trade, index) => (
    <div key={index}>
    <h1 >{trade.user1.userName} is looking to trade {trade.book1.title} by {trade.book1.author}</h1>
    </div>
  ))
  return(
    <div>
    {availableTradesList}
    </div>
  )
}

export default AvailableTradesList;
