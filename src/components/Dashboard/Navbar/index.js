import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAPI } from '../../../actions/auth';
import jwt from 'jwt-decode'
import './Navbar.css';

const Navbar = () => {

  	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  	const token = useSelector(state => state.auth.token)
  	const dispatch = useDispatch();
  	const history = useHistory();

  	// Set untuk jwtDecode dan cek bilan token ada atau tidak
  	let jwtDecode 
  	if (Object.entries(token).length !== 0) {
	  	jwtDecode = jwt(token)
  	}

  	const handleLogout = () => {
		dispatch(logoutAPI())
			.then((res) => {
				history.push('/')
			})
  	}

  	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/book">Laravel React Perpustakaan</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/book">Book</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/peminjaman">Peminjaman</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user">User</Link>
						</li>
					</ul>
					<ul className="navbar-nav mr-right">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						  		{isAuthenticated ? jwtDecode.name : 'Belom Login'}
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							  <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
							</div>
						</li>
					</ul>
				</div>
			</div>			
		</nav>	
	)
}

export default Navbar