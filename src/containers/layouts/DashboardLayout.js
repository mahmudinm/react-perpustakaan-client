import React from 'react';

const DashboardLayout = (props) => (
	<React.Fragment>
		<h1>Sidebar</h1>
		<h1>Topbar</h1>
		{props.children}
	</React.Fragment>
)

export default DashboardLayout