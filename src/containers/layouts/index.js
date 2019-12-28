import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import DashboardLayout from './DashboardLayout';
import Login from '../pages/login';

function Layouts() {
	return (
		<Switch>
			{/*<Route path="/" exact component={Login} />*/}
			{/*<Route path="/" exact component={Login} />*/}
			<Route component={AuthLayout} />
			{/*<Route path="/" component={AuthLayout} />*/}
			<Route path="/admin" component={DashboardLayout} />
		</Switch>
	)
}

export default Layouts