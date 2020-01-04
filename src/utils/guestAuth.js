import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function guestAuth (ComposedComponent) {

	const jwt = localStorage.getItem('jwt');

	class Authentication extends Component {

		componentDidMount() {
			if (this.props.isAuthenticated) {
				this.props.history.push('/peminjaman')
			} 
		}

		componentWillUpdate(nextProps) {
			if (this.props.isAuthenticated) {
				this.props.history.push('/peminjaman')
			} 
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	const mapStateToProps = (state) => ({
		isAuthenticated: state.auth.isAuthenticated
	})

	return connect(mapStateToProps, null)(Authentication);
}