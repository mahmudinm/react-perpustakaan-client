import React, { Component } from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { storeBookAPI } from '../../../../actions/book';

class BookFormPage extends Component {

	render() {
		return(
			<div className="col-md-7 mx-auto">
				<BookForm 
					storeBook={this.props.storeBook}
				/>
			</div>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
	storeBook: (data) => dispatch(storeBookAPI(data))
})

export default connect(null , mapDispatchToProps)(BookFormPage);