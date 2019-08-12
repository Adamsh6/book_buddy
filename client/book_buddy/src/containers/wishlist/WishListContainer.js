import React, {Component} from 'react';
import WishList from '../../components/wishlist/WishList'
import Request from '../../helpers/request'

class WishListContainer extends Component {
  constructor(props){
    super(props)
    // if(this.props.user){
    // this.state = {
    // userWishlist: this.props.user.wishlist
    // };
  // }

    this.handleAddToWishList = this.handleAddToWishList.bind(this)
  }



// componentDidUpdate(prevProps) {
//   if(prevProps.user.wishlist !== this.state.userWishlist) {
//     this.setState({userWishlist: this.props.user.wishlist});
//   }
// }

  handleAddToWishList(id, payload){
    const request = new Request();
    const userUrl = '/api/users/' + id
    request.patch(userUrl, payload)
    .then(() => this.props.getAllData())

  }

  render(){
    return(
      <WishList user={this.props.user}
      users={this.props.users}
      handleAddToWishList={this.handleAddToWishList}
      />
    )
  }
}

export default WishListContainer
