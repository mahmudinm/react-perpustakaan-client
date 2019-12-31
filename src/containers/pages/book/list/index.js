import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookListPage extends Component {

	render() {
		return (
			<React.Fragment>
				<Link to="/book/create" className="btn btn-primary">Create Book</Link>
			</React.Fragment>
		)
	}

}

export default BookListPage