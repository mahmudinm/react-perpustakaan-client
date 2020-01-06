import api from '../utils/api';

export const getUserAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get('user')
				.then((res) => {
					dispatch({ type: 'GET_USER', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const createUserAPI = () => (dispatch) => {
	dispatch({type: 'CREATE_USER'});
}

export const storeUserAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('user', data)
				.then((res) => {
					dispatch({ type: 'STORE_USER', value: data })
					dispatch({ type: 'SHOW_TOAST', message: 'User has been created' })

					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const editUserAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get(`user/${id}/edit`)
				.then((res) => {
					dispatch({ type: 'EDIT_USER', value: res.data })

					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const updateUserAPI = (data, id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			data._method = "PUT"
			api.post(`user/${id}`, data)
				.then((res) => {
					dispatch({ type: 'UPDATE_USER', value: res.data })
					dispatch({ type: 'SHOW_TOAST', message: 'User has been updated' })

					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const deleteUserAPI = (id) => (dispatch) => {
	dispatch({ type: 'DELETE_USER', value: id })
	dispatch({ type: 'SHOW_TOAST', message: 'User has been delete' })

	const promise = new Promise((resolve, reject) => {
			api.post(`user/${id}`, { _method: 'DELETE' })
				.then((res) => {
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}