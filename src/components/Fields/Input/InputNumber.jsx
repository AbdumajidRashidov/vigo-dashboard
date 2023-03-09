import React from "react";
import { NumericFormat } from "react-number-format";
import { isFunction, get } from "lodash";

import { InputBase } from "./InputBase";

export const InputNumber = ({
	placeholder = "",
	mask = "",

	label = "",
	isDisabled = false,
	size = "sm",
	outerClass = "",
	innerClass = "",
	append,
	prepend,
	field,
	form,
	allowNegative = false,

	...inputProps
}) => {
	return (
		<InputBase
			label={label}
			isDisabled={isDisabled}
			size={size}
			append={append}
			prepend={prepend}
			outerClass={outerClass}
			innerClass={innerClass}
			field={field}
			form={form}
		>
			<NumericFormat
				type="text"
				placeholder={placeholder}
				disabled={isDisabled}
				thousandSeparator=" "
				allowNegative={allowNegative}
				allowLeadingZeros={false}
				allowedDecimalSeparators={[",", " "]}
				className="control__input"
				{...field}
				{...inputProps}
				onChange={(event) => {
					isFunction(get(inputProps, "onChange")) && inputProps.onChange(event);
					field.onChange(event);
				}}
				onBlur={(event) => {
					isFunction(get(inputProps, "onBlur")) && inputProps.onBlur(event);
					field.onBlur(event);
				}}
			/>
		</InputBase>
	);
};
