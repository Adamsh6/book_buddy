import React, {Component} from 'react';
import Request from '../../helpers/request';
import BookForm from '../../components/books/BookForm';
import {Redirect} from 'react-router-dom'

class AddBookFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleBookPost = this.handleBookPost.bind(this);

    this.state = {
      redirect: false
    }
    if(!this.props.user) {
      window.location = '/'
    }
  }



  handleBookPost(book){
    const request = new Request();
    request.post('/api/books', book)
    .then(() => this.props.getAllData())
    .then(() => this.setState({ redirect: true}));

  }

  render(){

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to ='/books'/>;
    }

    return(
      <div>
      <h2>Add Book</h2>
      <BookForm users={this.props.users} handleBookPost={this.handleBookPost}
    user={this.props.user}/>
    </div>
  )
}
}

export default AddBookFormContainer;
