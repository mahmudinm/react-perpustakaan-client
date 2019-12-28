import React from 'react';
import Login from '../pages/login';
import { Route } from 'react-router-dom';

function AuthLayout() {
  	return (
	    <div>
			<Route path="/" exact component={Login} />			
	    </div>  		
  	);
}

export default AuthLayout