import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { closeToast } from '../../actions/toast';
import Navbar from '../../components/Dashboard/Navbar';

const DashboardLayout = (props) => {

	const dispatch = useDispatch();
	const message = useSelector(state => state.toast.message);
	const show = useSelector(state => state.toast.show);

	const handleToast = () => {
		dispatch(closeToast())
	}

	return (
		<React.Fragment>
			<Navbar />
			<div className="container mt-5">

				{/*Notif*/}
				{show ? 
					<div className="alert alert-success alert-dismissible fade show" role="alert">
					  {message}
					  <button type="button" onClick={handleToast} className="close" data-dismiss="alert" aria-label="Close">
					    <span aria-hidden="true">&times;</span>
					  </button>
					</div> :
					null
				}

				{props.children}
			</div>
		</React.Fragment>
	)
}

export default DashboardLayout