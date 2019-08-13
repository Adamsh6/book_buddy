import React, {Component} from 'react';
import WishList from '../../components/wishlist/WishList'
import Request from '../../helpers/request'

class WishListContainer extends Component {
  constructor(props){
    super(props)
    this.handleAddToWishList = this.handleAddToWishList.bind(this)
  }

  handleAddToWishList(id, payload){
    const request = new Request();
    const userUrl = '/api/users/' + id
    request.patch(userUrl, payload)
    .then(() => this.props.getAllData())

  }

  handleDeleteWishListItem(id){
    const request = new Request();
    const url = '/api/wishlist/' + id
    request.delete(url).then(() => this.getAllData())

    // window.alert("You took the book off the wish list!")
  }

  render(){
    return(
      <WishList user={this.props.user}
      users={this.props.users}
      handleAddToWishList={this.handleAddToWishList}
      getAllData={this.props.getAllData}
      />
    )
  }
}

export default WishListContainer
