import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LogInContainer from './users/LogInContainer';
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
          userName: "jim1000",
          books: [
            {
              title: "Elantris",
              author: "Brandon Sanderson",
              genre: "fantasy"
            },
            {
              title: "A Feast for Crows",
              author: "George R.R. Martin",
              genre: "fantasy"
            }

          ],
          trades: [],
          tradesHistory: []
        },
        {
          userName: "dave34",
          books: [
            {
              title: "Catch-22",
              author: "Joseph Heller",
              genre: "comedy"
            }

          ],
          trades: [],
          tradesHistory: []
        }
      ],
      books: [],
      trades: [
        {
          user1: {
            userName: "jim1000"
          },
          book1: {
            title: "Elantris",
            author: "Brandon Sanderson",
            genre: "fantasy"
          },
          user2: null,
          book2: null,
          completed: false
        },
        {
          user1: {
            userName: "jim1000"
          },
          book1: {
            title: "Elantris",
            author: "Brandon Sanderson",
            genre: "fantasy"
          },
          user2: "dave34",
          book2: true,
          completed: true
        }
      ],
      selectedUser:         {
        userName: "jim1000",
        books: [
          {
            title: "Elantris",
            author: "Brandon Sanderson",
            genre: "fantasy"
          },
          {
            title: "A Feast for Crows",
            author: "George R.R. Martin",
            genre: "fantasy"
          }

        ],
        trades: [],
        tradesHistory: []
      },
      // TODO Delete this after testing
      nullSelectedUser: null
    }
  }
  render(){
    return (
      <div>
      <h1>BOOK BUDDY</h1>
      <Router>
      <NavBar />
      <Switch>
      <Route exact path='/books' render={() => <BooksList user={this.state.selectedUser}/>} />
      <Route exact path='/books/new' render={() => <AddBookFormContainer />} />
      <Route exact path='/trades' render={() => <AvailableTradesList />} />
      <Route exact path='/trades_history' render={() => <PastTradesList />} />
      <Route exact path='/' render={() => <LogInContainer users={this.state.users} selectedUser={this.state.selectedUser}/>} />
      </Switch>
      </Router>
      </div>

    )
  }
}

export default MainContainer
