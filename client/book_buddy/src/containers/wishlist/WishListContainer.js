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
    // const currentUser = this.props.user
    request.patch(userUrl, payload)
    .then(() => this.props.getAllData())
    .then(() => this.forceUpdate())
  }

  render(){
    return(
      <WishList user={this.props.user}
      handleAddToWishList={this.handleAddToWishList}
      changed={this.props.changed}/>
    )
  }
}

export default WishListContainer
