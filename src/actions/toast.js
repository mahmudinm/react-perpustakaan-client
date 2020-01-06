export const showToast = (message, show) => ({
	type: 'SHOW_TOAST',
	message: message,
	show: show
})

export const closeToast = (message, show) => ({
	type: 'CLOSE_TOAST',
	message: message,
	show: show
})