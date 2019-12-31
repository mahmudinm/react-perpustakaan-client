import React from 'react';

import Sidebar from '../../components/Dashboard/Sidebar';
import Navbar from '../../components/Dashboard/Navbar';

const DashboardLayout = (props) => (
	<React.Fragment>
		<Sidebar />
		<Navbar />
		{props.children}
	</React.Fragment>
)

export default DashboardLayout