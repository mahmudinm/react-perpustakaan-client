import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './containers/pages/Login';

class App extends Component {

	render() {
		return(
			<Router>
				<Link to='/'>Home</Link>
				<Link to='/'>Login</Link>

				<Route to='/login' component={Login}/>
			</Router>			
		)
	}

}

export default App;