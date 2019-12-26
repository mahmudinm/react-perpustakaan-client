import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalida email address')
				.required('Required'),
			password: Yup.string()
				.required('Required')
		}),
		onSubmit: values => {
			console.log(values)
		}
	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="form-group">
				<label 
					className="form-label"
					htmlFor="email">Email</label>
				<input 
			        className={
			          formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'
			        }
					type="email"
					name="email"
					id="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="invalid-feedback">{formik.errors.email}</div>
				) : null}
			</div>

			<div className="form-group">
				<label 
					className="form-label"
					htmlFor="password">Password</label>
				<input  
			        className={
			          formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'
			        }				
					type="password"
					name="password"
					id="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="invalid-feedback">{formik.errors.password}</div>
				) : null}
				</div>
			<button type="submit">LOGIN</button>
		</form>
	)
}

export default LoginForm;