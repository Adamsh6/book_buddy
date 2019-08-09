import React from 'react';

const PastTradesList = ({user}) => {
  if(!user) {
    window.location = '/'
  }
  const pastTrades = user.tradesHistory.map((trade, index) => (
    <li key={index}>{trade.user1.userName} traded {trade.book1.title} for {trade.book2.title} with {trade.user2.userName}</li>
  ))
  return(
    <ul>
    {pastTrades}
    </ul>
  )
}

export default PastTradesList;
