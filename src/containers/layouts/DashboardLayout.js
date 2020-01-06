import React from 'react';
import { useSelector } from 'react-redux'

import Navbar from '../../components/Dashboard/Navbar';

const DashboardLayout = (props) => {

	// const message = useSelector(state => state.book.message);

	return (
		<React.Fragment>
			<Navbar />
			<div className="container mt-5">

				{/*Notif*/}
				<div className="alert alert-success alert-dismissible fade show" role="alert">
				  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
				  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
				</div>

				{props.children}
			</div>
		</React.Fragment>
	)
}

export default DashboardLayout