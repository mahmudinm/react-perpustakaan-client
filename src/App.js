import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import LayoutRoute from './components/Router/LayoutRoute'
// Layout
// import Layout from './containers/layouts'
import AuthLayout from './containers/layouts/AuthLayout'
import DashboardLayout from './containers/layouts/DashboardLayout'
// Page
import Login from './containers/pages/login'
import Book from './containers/pages/book'


class App extends Component {

	render() {
		return(
			<Router>
				<Switch>
					<LayoutRoute exact path="/" layout={AuthLayout} component={Login} />
					<LayoutRoute path="/book" layout={DashboardLayout} component={Book} />
				</Switch>
			</Router>			
		)
	}

}

export default App;