import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import cn from "classnames";

import { ControlError, ControlLabel } from "components/Common";

import "./TimePicker.scss";

export const CustomTimePicker = ({
	outerClass,
	innerClass = "",
	label = "",
	format = "HH:mm",
	size = "sm",
	field,
	form,
	onDateChange,
	placeholder,
}) => {
	const classNames = cn("time-picker", `control_${size}`, outerClass);

	const handleChange = (date) => {
		form.setFieldValue(field.name, date?.toDate());
		onDateChange && onDateChange(date);
	};

	return (
		<div className={classNames}>
			<div className={innerClass}>
				<ControlLabel label={label} />

				<DatePicker
					value={field.value}
					disableDayPicker
					format={format}
					plugins={[<TimePicker hideSeconds />]}
					onChange={handleChange}
					placeholder={placeholder}
				/>

				<ControlError form={form} field={field} />
			</div>
		</div>
	);
};

CustomTimePicker.propTypes = {
	format: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	outerClass: PropTypes.string,
	innerClass: PropTypes.string,
	size: PropTypes.string,
	isDisabled: PropTypes.bool,
	onDateChange: PropTypes.func,
	field: PropTypes.object,
	form: PropTypes.object,
};
