import React, { Component } from 'react';
import BookForm from './BookForm';

class BookFormPage extends Component {

	render() {
		return(
			<div className="col-md-7 mx-auto">
				<BookForm />
			</div>
		)
	}

}

export default BookFormPage;