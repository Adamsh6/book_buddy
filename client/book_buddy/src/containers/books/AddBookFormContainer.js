import React, {Component} from 'react';
import Request from '../../helpers/request';
import BookForm from '../../components/books/BookForm';
import {Redirect} from 'react-router-dom'

class AddBookFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleBookPost = this.handleBookPost.bind(this);
  }

  handleBookPost(book){
    const request = new Request();
    request.post('/api/books', book).then(() => {
       let x = 4
    })
  }

  render(){
    return(
      <div>
      <BookForm users={this.props.users} handleBookPost={this.handleBookPost}
    user={this.props.user}/>
    <Redirect
    to={{
    pathname: "/books",
    state: { selectedUser: this.props.user }
  }}/>
    </div>
  )
  }
}

export default AddBookFormContainer;
