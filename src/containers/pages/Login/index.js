import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {

	render() {
		return (
			<div className="container mt-5">
				<div className="col-md-6 mx-auto" >	
					<h2>Halaman Login</h2>
					<hr/>
					<LoginForm 
					/>
				</div>
			</div>
		)
	}

}

export default Login;