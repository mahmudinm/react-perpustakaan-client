import React from 'react';
import { Route } from 'react-router-dom';
import Book from '../pages/book';

function DashboardLayout () {
	return (
		<div>
			<h1>Dashboard Layout</h1>
			<Route path="/admin/book" exact component={Book} />			
		</div>
	)
}

export default DashboardLayout