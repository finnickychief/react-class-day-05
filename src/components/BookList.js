import React from 'react';
import Books from './Books';
import AddBookForm from './AddBookForm';
import Navbar from './Navbar';

class BookList extends React.Component {
  constructor() {
    super();
    // Each book will need the following properties:
    // Title, Description, Author, Price
    this.state = {
      bookArray: [
        {
          title: 'Harry Potter',
          description: 'Wizard School stuff',
          author: 'JK Rowling',
          price: '14.99'
        },
        {
          title: 'Name of the Wind',
          description: 'Edgy Wizard school stuff',
          author: 'Patrick Rothfuss',
          price: '12.50'
        },
        {
          title: 'Wheel of Time',
          description: 'A few High fantasy novels',
          author: 'Robert Jordan',
          price: '19.99'
        }
      ],
      route: 'viewBooks'
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

  render() {
    let element;
    switch (this.state.route) {
      case 'viewBooks': {
        element = <Books bookArray={this.state.bookArray} />;
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
