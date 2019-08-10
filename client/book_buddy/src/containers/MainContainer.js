import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LogInContainer from './users/LogInContainer';
import BooksList from '../components/books/BooksList';
import AvailableTradesList from '../components/trades/AvailableTradesList';
import PastTradesList from '../components/trades/PastTradesList';
import AddBookFormContainer from './books/AddBookFormContainer';
import NavBar from '../NavBar';
import Request from '../helpers/request';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // users: [
      //   {
      //     userName: "jim1000",
      //     books: [
      //       {
      //         title: "Elantris",
      //         author: "Brandon Sanderson",
      //         genre: "fantasy"
      //       },
      //       {
      //         title: "A Feast for Crows",
      //         author: "George R.R. Martin",
      //         genre: "fantasy"
      //       }
      //
      //     ],
      //     trades: [],
      //     tradesHistory: [
      //       {
      //         user1: {
      //           userName: "dave34"
      //         },
      //         book1: {
      //           title: "Catch-22",
      //           author: "Joseph Heller",
      //           genre: "comedy"
      //         },
      //         user2: {
      //           userName: "jim1000"
      //         },
      //         book2: {
      //           title: "Catch-22",
      //           author: "Joseph Heller",
      //           genre: "comedy"
      //         },
      //         completed: true
      //       }
      //     ]
      //   },
      //   {
      //     userName: "dave34",
      //     books: [
      //       {
      //         title: "Catch-22",
      //         author: "Joseph Heller",
      //         genre: "comedy"
      //       }
      //
      //     ],
      //     trades: [],
      //     tradesHistory: []
      //   }
      // ],
      // books: [],
      // trades: [
      //   {
      //     user1: {
      //       userName: "jim1000"
      //     },
      //     book1: {
      //       title: "Elantris",
      //       author: "Brandon Sanderson",
      //       genre: "fantasy"
      //     },
      //     user2: null,
      //     book2: null,
      //     completed: false
      //   },
      //   {
      //     user1: {
      //       userName: "dave34"
      //     },
      //     book1: {
      //       title: "ABOOK",
      //       author: "Person Personson",
      //       genre: "good"
      //     },
      //     user2: null,
      //     book2: null,
      //     completed: false
      //   },
      //   {
      //     user1: {
      //       userName: "dave34"
      //     },
      //     book1: {
      //       title: "Catch-22",
      //       author: "Joseph Heller",
      //       genre: "comedy"
      //     },
      //     user2: "jim1000",
      //     book2: true,
      //     completed: true
      //   }
      // ],
      books: [],
      users: [],
      trades: [],
      selectedUser: null,
      waiting: false
    }
    this.handleUserSelect = this.handleUserSelect.bind(this)
    this.getAllData = this.getAllData.bind(this)
    this.handleAddTrade = this.handleAddTrade.bind(this)
    this.handleDeleteTrade = this.handleDeleteTrade.bind(this)
  }

  getAllData(){
    const request = new Request()
    const promise1 = request.get('/api/books')
    const promise2 = request.get('/api/users')
    const promise3 = request.get('/api/trades')
    const promises = [promise1, promise2, promise3]

    Promise.all(promises).then((data) => {
      this.setState({
        books: data[0]._embedded.books,
        users: data[1]._embedded.users,
        trades: data[2]._embedded.trades
      })
      console.log(this.state.waiting)
    })
  }

  componentDidMount(){
     this.getAllData();
   }


  handleUserSelect(index){
    this.setState({selectedUser: this.state.users[index]})
  }

  handleDeleteTrade(id){
    this.state.waiting = true
    const request = new Request();
    const url = '/api/trades/' + id
    request.delete(url).then(() => this.getAllData())

    // window.alert("You took the book off trade!")
  }

  handleAddTrade(payload){
    this.state.waiting = true;
    const request = new Request();
    request.post('/api/trades', payload).then(() => this.getAllData())

    // window.alert("You added the book to trade!")
  }


  render(){
    return (
      <div>
      <h1>BOOK BUDDY</h1>
      <Router>
      <NavBar />
      <Switch>
      <Route exact path='/books'
      render={() => <BooksList
        user={this.state.selectedUser}
        books={this.state.books}
        trades={this.state.trades}
        handleDeleteTrade={this.handleDeleteTrade}
        handleAddTrade={this.handleAddTrade}/>} />
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
