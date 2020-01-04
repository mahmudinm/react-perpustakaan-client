import React, { useEffect } from 'react';

const AuthLayout = (props) => {

	useEffect(() => {
	    const ac = new AbortController();

		return () => {
			ac.abort()
		}
	}, [])

	return (
		<React.Fragment>
			{props.children}
		</React.Fragment>
	)
}

export default AuthLayout