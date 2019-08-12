import React from 'react';

const BookForm = (props) => {

  // const options = props.users.map((user, index) => {
  //   return <option key={index} value={user._links.self.href}>{user.name}</option>
  // })


  const handleSubmit =(event) => {
    event.preventDefault();
    const book = {
      "title": event.target.title.value,
      "author": event.target.author.value,
      "genre": event.target.genre.value,
      "user": props.user._links.self.href
    }
    props.handleBookPost(book);
  }

  // <select name="users">
  //   {options}
  // </select>

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title"/>
        <input type="text" placeholder="Author" name="author"/>
        <input type="text" placeholder="Genre" name="genre"/>

        <button type="submit">Save</button>
      </form>
    </div>




  )
}

export default BookForm;
