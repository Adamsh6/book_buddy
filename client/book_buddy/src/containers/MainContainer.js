import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserSelect from '../components/UserSelect';
import BooksList from '../components/books/BooksList';
import AvailableTradesList from '../components/trades/AvailableTradesList';
import PastTradesList from '../components/trades/PastTradesList';
import AddBookFormContainer from './books/AddBookFormContainer';
import NavBar from '../NavBar'

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          userName: "jim",
          books: [
            {
              title: "Elantris",
              author: "Brandon Sanderson",
              genre: "fantasy"
            }
          ],
          trades: [],
          tradesHistory: []
        }
      ],
      books: [],
      trades: []
    }
  }
  render(){
    return (
      <div>
      <h1>BOOK BUDDY</h1>
      <Router>
      <NavBar />
      <Switch>
      <Route exact path='/books' render={() => <BooksList />} />
      <Route exact path='/books/new' render={() => <AddBookFormContainer />} />
      <Route exact path='/trades' render={() => <AvailableTradesList />} />
      <Route exact path='/trades_history' render={() => <PastTradesList />} />
      <Route exact path='/' render={() => <UserSelect />} />
      </Switch>
      </Router>
      </div>

    )
  }
}

export default MainContainer
