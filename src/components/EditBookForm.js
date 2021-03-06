import React from 'react';

class EditBookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.book.id,
      title: props.book.title,
      author: props.book.author,
      description: props.book.description,
      price: props.book.price
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  editBookHandler = e => {
    e.preventDefault(); // Prevent form from submitting and refreshing the page.

    const { id, title, author, description, price } = this.state;

    const updatedBook = {
      id,
      title,
      author,
      description,
      price
    };

    this.props.onSubmit(updatedBook);
    this.props.switchRoute('viewBooks'); // Reroute back to viewBooks page
  };

  render() {
    return (
      <div className="container mx-auto w-50">
        <form onSubmit={this.editBookHandler.bind(this)}>
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
            Edit Book
          </button>
        </form>
      </div>
    );
  }
}

export default EditBookForm;
