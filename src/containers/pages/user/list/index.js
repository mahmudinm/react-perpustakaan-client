import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBookAPI, deleteBookAPI } from '../../../../actions/book';
import BookList from './BookList';

class BookListPage extends Component {

	componentDidMount() {
		this.props.getBook();
	}

	render() {
		return (
			<React.Fragment>
				<Link to="/book/create" className="btn btn-primary">Create Book</Link>

				<BookList 
					books={this.props.books} 
					deleteBook={this.props.deleteBook}
				/>

			</React.Fragment>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
	getBook: () => dispatch(getBookAPI()),
	deleteBook: (id) => dispatch(deleteBookAPI(id))
})

const mapStateToProps = (state) => ({
	books: state.book.books
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListPage)