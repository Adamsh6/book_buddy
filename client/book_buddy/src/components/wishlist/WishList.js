import React, {Component} from 'react';
import WishListList from './WishListList'
import Request from '../../helpers/request'

class WishList extends Component {
  constructor(props){
    super(props)
    if(!this.props.user) {
      window.location = '/'
    }
    this.state = {
      title: ""
    }



    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getSelectedUserLocation = this.getSelectedUserLocation.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  handleChange(event){
    this.setState({title: event.target.value});
  }

  getSelectedUserLocation() {
    return this.props.users.findIndex((userInArray) => (
      userInArray.id === this.props.user.id
    ))
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.props.users[this.getSelectedUserLocation()].wishlist.includes(event.target.title.value)){
      window.alert("You already have this on your wishlist")
      this.setState({title: ""})
      return
    }
    const newWishlist = [...this.props.users[this.getSelectedUserLocation()].wishlist, event.target.title.value]
    const payload = {
      wishlist: newWishlist
    }
    this.setState({title: ""})
    this.props.handleAddToWishList(this.props.user.id, payload)

  }
  render(){

  return(
    <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
    <button type="submit">Add</button>
    </form>
    <WishListList
    users={this.props.users}
    user={this.props.user}
    handleDeleteItem={this.props.handleDeleteItem}/>
    </div>
  )
}
}

export default WishList
