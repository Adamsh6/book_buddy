import React, {Component} from 'react';
import Request from '../../helpers/request';
import BookForm from '../../components/books/BookForm';

class AddBookFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleBookPost = this.handleBookPost.bind(this);
  }

  handleBookPost(book){
    const request = new Request();
    request.post('/api/books', book).then(() => {
      window.location = '/books'
    })
  }

  render(){
    return<BookForm users={this.props.users} handleBookPost={this.handleBookPost}
    user={this.props.user}/>
  }
}

export default AddBookFormContainer;
