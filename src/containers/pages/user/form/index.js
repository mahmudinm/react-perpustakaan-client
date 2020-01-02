import React, { Component } from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { createUserAPI, storeUserAPI, editUserAPI, updateUserAPI } from '../../../../actions/user';

class UserFormPage extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		if (id) {
			this.props.editUser(id)
		} else {
			this.props.createUser();
		}
	}

	render() {
		return(
			<div className="col-md-7 mx-auto">
				<h3>User Form</h3>
				<hr/>
				<UserForm
					storeUser={this.props.storeUser}
					updateUser={this.props.updateUser}
					user={this.props.user}
				/>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
	createUser: () => dispatch(createUserAPI()),
	storeUser: (data) => dispatch(storeUserAPI(data)),
	editUser: (id) => dispatch(editUserAPI(id)),
	updateUser: (data, id) => dispatch(updateUserAPI(data, id))
})

export default connect(mapStateToProps , mapDispatchToProps)(UserFormPage);