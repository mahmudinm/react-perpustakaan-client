import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserAPI, deleteUserAPI } from '../../../../actions/user';
import UserList from './UserList';

class UserListPage extends Component {

	componentDidMount() {
		this.props.getUser();
	}

	render() {
		return (
			<React.Fragment>
				<Link to="/user/create" className="btn btn-primary">Create User</Link>

				<UserList 
					users={this.props.users} 
					deleteUser={this.props.deleteUser}
				/>

			</React.Fragment>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
	getUser: () => dispatch(getUserAPI()),
	deleteUser: (id) => dispatch(deleteUserAPI(id))
})

const mapStateToProps = (state) => ({
	users: state.user.users
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage)