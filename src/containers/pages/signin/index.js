import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginAPI } from '../../../actions/auth';

class LoginPage extends Component {

	render() {
		return (
			<div className="container mt-5">
				<div className="col-md-5 mx-auto" >	
					<div className="card card-primary">
						<div className="card-header">
							<h4>Halaman Login</h4>
						</div>
						<div className="card-body">
							<LoginForm 
								login={this.props.login}
							/>
						</div>
					</div>	
				</div>
			</div>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
	login: (data) => dispatch(loginAPI(data))
})

export default connect(null, mapDispatchToProps)(LoginPage);