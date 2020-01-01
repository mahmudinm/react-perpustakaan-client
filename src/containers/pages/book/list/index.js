import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBookAPI } from '../../../../actions/book';

class BookListPage extends Component {

	componentDidMount() {
		this.props.getBook();
	}

	render() {
		return (
			<React.Fragment>
				<Link to="/book/create" className="btn btn-primary">Create Book</Link>

				{this.props.books.map((item, key) =>  
					
						<div key={key}>
							<b>{item.name}</b> 
							<br/>
						</div>
					
				)}

			</React.Fragment>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
	getBook: () => dispatch(getBookAPI())
})

const mapStateToProps = (state) => ({
	books: state.book.books
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListPage)