import React from 'react';

import Navbar from '../../components/Dashboard/Navbar';

const DashboardLayout = (props) => (
	<React.Fragment>
		<Navbar />
		<div className="container mt-5">
			{props.children}
		</div>
	</React.Fragment>
)

export default DashboardLayout