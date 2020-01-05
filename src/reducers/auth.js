const initialState = {
	isAuthenticated: false,
	loading: false,
	token: {},
	message: ''
}

const auth = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'SET_LOGIN':
			return {
				...state,
				isAuthenticated: true,
				token: action.value
			}
		case 'SET_LOGOUT':
			return {
				...state,
				isAuthenticated: false,
				token: {}
			}
		default: return state;		
	}
}

export default auth;