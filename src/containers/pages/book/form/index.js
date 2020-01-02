import React, { Component } from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { createBookAPI, storeBookAPI, editBookAPI, updateBookAPI } from '../../../../actions/book';

class BookFormPage extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		if (id) {
			this.props.editBook(id)
		} else {
			this.props.createBook()
		}
	}

	render() {
		return(
			<div className="col-md-7 mx-auto">
				<h3>Book Form</h3>
				<hr/>
				<BookForm 
					storeBook={this.props.storeBook}
					updateBook={this.props.updateBook}
					book={this.props.book}
				/>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	book: state.book.book
})

const mapDispatchToProps = (dispatch) => ({
	createBook: () => dispatch(createBookAPI()),
	storeBook: (data) => dispatch(storeBookAPI(data)),
	editBook: (id) => dispatch(editBookAPI(id)),
	updateBook: (data, id) => dispatch(updateBookAPI(data, id))
})

export default connect(mapStateToProps , mapDispatchToProps)(BookFormPage);