import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker'
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerInput.css";

export const DatePickerInput = ({ label, ...props }) => {
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(props);
	return (
		<>
			<div className="form-group">
				<label 
					className="form-label"
					htmlFor={props.id || props.name}>{label}</label> <br/>
				<DatePicker
					className={
			          meta.touched && meta.error ? 'form-control is-invalid' : 'form-control'
			        }
					{...field}
			        {...props}
			        selected={(field.value && new Date(field.value))}
			        onChange={val => {
			        	setFieldValue(field.name, moment(val).format("YYYY-MM-DD"));
			        }}
				/>
				{meta.touched && meta.error ? (
					<div style={{
						color: '#dc3545',
						marginTop: '.25rem',
						fontSize: '80%',
						width: '100%'
					}}>{meta.error}</div>
				) : null}					
			</div>	
		</>
	)
} 