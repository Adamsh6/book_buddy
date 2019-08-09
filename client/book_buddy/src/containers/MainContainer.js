import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom'
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
          tradesHistory: [
            {
              user1: {
                userName: "dave34"
              },
              book1: {
                title: "Catch-22",
                author: "Joseph Heller",
                genre: "comedy"
              },
              user2: {
                userName: "jim1000"
              },
              book2: {
                title: "Catch-22",
                author: "Joseph Heller",
                genre: "comedy"
              },
              completed: true
            }
          ]
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
            userName: "dave34"
          },
          book1: {
            title: "ABOOK",
            author: "Person Personson",
            genre: "good"
          },
          user2: null,
          book2: null,
          completed: false
        },
        {
          user1: {
            userName: "dave34"
          },
          book1: {
            title: "Catch-22",
            author: "Joseph Heller",
            genre: "comedy"
          },
          user2: "jim1000",
          book2: true,
          completed: true
        }
      ],
      selectedUser: null,
      // TODO Delete this after testing
      nullSelectedUser: null
    }
    this.handleUserSelect = this.handleUserSelect.bind(this)
  }

  handleUserSelect(index){
    this.setState({selectedUser: this.state.users[index]})
  }


  render(){
    return (
      <div>
      <h1>BOOK BUDDY</h1>
      <Router>
      <NavBar />
      <Switch>
      <Route exact path='/books'
      render={() => <BooksList user={this.state.selectedUser}/>} />
      <Route exact path='/books/new'
      render={() => <AddBookFormContainer />} />
      <Route exact path='/trades'
      render={() => <AvailableTradesList
        trades={this.state.trades}
        user={this.state.selectedUser}/>} />
      <Route exact path='/trades_history'
      render={() => <PastTradesList
        user={this.state.selectedUser}/>} />
      <Route exact path='/'
      render={() => <LogInContainer
        users={this.state.users}
        selectedUser={this.state.selectedUser}
        handleUserSelect={this.handleUserSelect}/>} />
      </Switch>
      </Router>
      </div>

    )
  }
}

export default MainContainer
