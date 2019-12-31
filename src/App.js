import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LayoutRoute from './components/Router/LayoutRoute'
// Layout
// import Layout from './containers/layouts'
import AuthLayout from './containers/layouts/AuthLayout'
import DashboardLayout from './containers/layouts/DashboardLayout'
// Page
import LoginPage from './containers/pages/login'
import BookListPage from './containers/pages/book/list'
import BookFormPage from './containers/pages/book/form'

class App extends Component {

	render() {
		return(
			<Router>
				<Switch>
					<LayoutRoute exact path="/" layout={AuthLayout} component={LoginPage} />
					<LayoutRoute exact path="/book" layout={DashboardLayout} component={BookListPage} />
					<LayoutRoute path="/book/create" layout={DashboardLayout} component={BookFormPage} />
				</Switch>
			</Router>			
		)
	}

}

export default App;