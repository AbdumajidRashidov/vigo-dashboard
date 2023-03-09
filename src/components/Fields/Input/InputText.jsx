import React from "react";
import { get, isFunction } from "lodash";

import { InputBase } from "./InputBase";

export const InputText = ({
	placeholder = "",
	type = "",

	isUpperCase = false,
	isLowerCase = false,
	label = "",
	isDisabled = false,
	size = "sm",
	outerClass = "",
	innerClass = "",
	append,
	prepend,
	field,
	form,
	isValid = () => true,
	getValue,

	...inputProps
}) => {
	return (
		<InputBase
			label={label}
			isDisabled={isDisabled}
			size={size}
			outerClass={outerClass}
			innerClass={innerClass}
			append={append}
			prepend={prepend}
			field={field}
			form={form}
		>
			<input
				type={type}
				disabled={isDisabled}
				placeholder={placeholder}
				className="control__input"
				{...field}
				{...inputProps}
				value={
					isFunction(getValue)
						? getValue(field.value)
						: get(inputProps, "value", field.value)
				}
				onChange={(event) => {
					if (isUpperCase) {
						event.target.value = event.target.value.toUpperCase();
					}

					if (isLowerCase) {
						event.target.value = event.target.value.toLowerCase();
					}

					if (isValid(event)) {
						isFunction(get(inputProps, "onChange")) && inputProps.onChange(event);
						field.onChange(event);
					}
				}}
			/>
		</InputBase>
	);
};
