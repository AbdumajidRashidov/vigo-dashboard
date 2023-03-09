import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Switch.scss";

export const Switch = ({
	className = "",
	label = "",
	onValueChange,
	field,
	name,
	form,
	...inputProps
}) => {
	const [checked, setChecked] = useState(field.value);

	const handleChange = (event) => {
		const newValue = event.target.checked;
		setChecked(newValue);
		form.setFieldValue(field.name, newValue);
		onValueChange && onValueChange(newValue);
	};

	useEffect(() => {
		setChecked(field.value);
	}, [field.value]);

	return (
		<div className="toggle-switch">
			<input
				className="toggle-switch-checkbox"
				type="checkbox"
				hidden
				name={field.name}
				id={field.name}
				checked={checked}
				onChange={handleChange}
				{...inputProps}
			/>
			<label className="toggle-switch-label" htmlFor={field.name}>
				<span className="toggle-switch-inner"></span>
				<span className="toggle-switch-switch"></span>
			</label>

			{label && <span className="control__text">{label}</span>}
		</div>
	);
};

Switch.propTypes = {
	isChecked: PropTypes.bool,
	className: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	checked: PropTypes.bool,
	field: PropTypes.object,
	form: PropTypes.object,
};
