import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Layout from './containers/layouts'


class App extends Component {

	render() {
		return(
			<Router>
				<Layout />
			</Router>			
		)
	}

}

export default App;