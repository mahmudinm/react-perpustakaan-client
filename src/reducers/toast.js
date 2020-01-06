const initialState = {
	message: '',
	show: false
}

const toast = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'SHOW_TOAST':
			return {
				...state,
				message: action.message,
				show: true
			}
		case 'CLOSE_TOAST': 
			return {
				...state,
				message: '',
				show: false
			}
		default: return state;
	}
}

export default toast;