import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginAPI } from '../../../actions/auth';

class Login extends Component {

	render() {
		return (
			<div className="container mt-5">
				<div className="col-md-5 mx-auto" >	
					<h2>Halaman Login</h2>
					<hr/>
					<LoginForm 
						login={this.props.login}
					/>
				</div>
			</div>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
	login: (data) => dispatch(loginAPI(data))
})

export default connect(null, mapDispatchToProps)(Login);