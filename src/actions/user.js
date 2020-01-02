import api from '../utils/api';

export const getUserAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get('user')
				.then((res) => {
					dispatch({ type: 'GET_USER', value: res.data })
					console.log(res.data);
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const storeUserAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('user', data)
				.then((res) => {
					dispatch({ type: 'STORE_USER', value: data })
					resolve(res)
					console.log('this from user store');
				}, (err) => {
					reject(err)
					console.log('this from user store');
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
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const deleteUserAPI = (id) => (dispatch) => {
	dispatch({ type: 'DELETE_USER', value: id })

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