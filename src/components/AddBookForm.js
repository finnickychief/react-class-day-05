import React from 'react';
import uuid from 'uuid';

class AddBookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      description: '',
      price: ''
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addBookHandler = e => {
    e.preventDefault(); // Prevent form from submitting and refreshing the page.

    // const newBook = {
    //   title: this.state.title,
    //   author: this.state.author,
    //   description: this.state.description,
    //   price: this.state.price
    // };

    const { title, author, description, price } = this.state;

    const newBook = {
      id: uuid(),
      title,
      author,
      description,
      price
    };

    this.props.onSubmit(newBook);
    this.props.switchRoute('viewBooks'); // Reroute back to viewBooks page
  };

  render() {
    return (
      <div className="container mx-auto w-50">
        <form onSubmit={this.addBookHandler.bind(this)}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={this.state.author}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label />
            <textarea
              type="text"
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={this.state.price}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

export default AddBookForm;
