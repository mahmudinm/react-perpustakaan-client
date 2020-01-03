
const jwt = localStorage.getItem('jwt');

export const requiredAuth = ({ component: Component }) => {
	if (jwt) {
		return <Component />
	}
} 