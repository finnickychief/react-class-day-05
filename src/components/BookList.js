import React from 'react';
import uuid from 'uuid';

import Books from './Books';
import AddBookForm from './AddBookForm';
import Navbar from './Navbar';
import EditBookForm from './EditBookForm';

class BookList extends React.Component {
  constructor() {
    super();
    // Each book will need the following properties:
    // Title, Description, Author, Price
    this.state = {
      bookArray: [
        {
          id: uuid(),
          title: 'Harry Potter',
          description: 'Wizard School stuff',
          author: 'JK Rowling',
          price: '14.99'
        },
        {
          id: uuid(),
          title: 'Name of the Wind',
          description: 'Edgy Wizard school stuff',
          author: 'Patrick Rothfuss',
          price: '12.50'
        },
        {
          id: uuid(),
          title: 'Wheel of Time',
          description: 'A few High fantasy novels',
          author: 'Robert Jordan',
          price: '19.99'
        }
      ],
      route: 'viewBooks',
      currentBook: null
    };
  }

  addBook(book) {
    let newBookArray = this.state.bookArray;
    newBookArray.push(book);
    this.setState({ bookArray: newBookArray });
  }

  switchRoute = route => {
    this.setState({ route: route });
  };

  /* 
    Create an EditBookForm component - This will mostly be a copy of our AddBookForm
    Make your page reroute to it after the edit button in any book is clicked
  */

  editBook = id => {
    // Grab the book that has been clicked on
    const bookToUpdate = this.state.bookArray.filter(book => book.id === id)[0];

    this.setState({ route: 'editBook', currentBook: bookToUpdate });
  };

  updateBook = updatedBook => {
    const updatedArray = this.state.bookArray;

    // Find index takes a conditional to check against all array items and returns the index of the first one that matches the query.
    const index = updatedArray.findIndex(book => book.id === updatedBook.id);

    // Change the item that was found to be the new book
    updatedArray[index] = updatedBook;

    // Update the bookArray and force a rerender on the page.
    this.setState({ bookArray: updatedArray });
  };

  render() {
    let element;
    switch (this.state.route) {
      case 'viewBooks': {
        element = (
          <Books bookArray={this.state.bookArray} editBook={this.editBook} />
        );
        break;
      }
      case 'addBook': {
        element = (
          <AddBookForm
            onSubmit={this.addBook.bind(this)}
            switchRoute={this.switchRoute}
          />
        );
        break;
      }
      case 'editBook': {
        element = (
          <EditBookForm
            onSubmit={this.updateBook.bind(this)}
            switchRoute={this.switchRoute}
            book={this.state.currentBook}
          />
        );
        break;
      }
    }
    /*
      Add a way for the AddBook element to re-route back to 
      the BookList view after a book has been added.
    */
    return (
      <div>
        <Navbar switchRoute={this.switchRoute} />
        {element}
      </div>
    );
  }
}

export default BookList;
