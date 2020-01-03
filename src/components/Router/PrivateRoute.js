import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Private Route untuk user yang sudah login ketika ingin mengunjungi halaman login makan akan redirect ke halaman admin
export const PrivateRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => {
		// const token = JSON.parse(localStorage.getItem('token'));
		const jwt = JSON.parse(localStorage.getItem('jwt'));
		if(!jwt) {
			return <Redirect to={{pathname: '/'}} />
		}

		return <Component {...props} />
	}} />

)