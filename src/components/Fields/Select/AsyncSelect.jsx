import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AsyncPaginate, wrapMenuList } from "react-select-async-paginate";
import { isFunction, get } from "lodash";
import cn from "classnames";

import { httpClient, queryBuilder } from "services";

import { ControlLabel, ControlError } from "components/Common";
import { DropdownIndicator, ValueContainer, MenuList } from "./components";

import "./Select.scss";

export const AsyncSelect = ({
	label = "",
	placeholder = "",
	size = "sm",
	className = "",
	append,
	style,
	prepend,
	onNewClick,
	initialValue = [],

	options = [],
	isMulti = false,
	isDisabled = false,
	isSearchable = true,
	isClearable = true,
	isFetchOnOpen = false,
	getOptionValue = "id",
	getOptionLabel = "label",

	loadOptionsUrl,
	loadOptionsParams = () => {},
	loadOptionsKey = "data",
	setDefaultValue,

	onValueChange,
	field,
	form,
	...rest
}) => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const handleChange = (option, action) => {
		form.setFieldValue(field.name, option);
		onValueChange && onValueChange(option);
	};

	const handleBlur = (event) => {
		form.setFieldTouched(field.name, true);
	};

	const loadOptions = async (search, prevOptions, params) => {
		const { data } = await httpClient.get(
			queryBuilder(loadOptionsUrl, {
				page: get(params, "page", 1),
				...loadOptionsParams(search),
			})
		);

		return {
			options: isFunction(loadOptionsKey)
				? loadOptionsKey(data)
				: [...initialValue, ...get(data, loadOptionsKey, [])],
			hasMore: get(data, "meta.currentPage", 1) < get(data, "meta.pageCount", 1),
			additional: { page: get(data, "meta.currentPage", 1) + 1 },
		};
	};

	useEffect(() => {
		if (isFunction(setDefaultValue)) {
			loadOptions(null, null, loadOptionsParams).then((res) => setDefaultValue(res.options));
		}
	}, []);

	return (
		<div
			style={style}
			className={cn("control", `control_${size}`, className, {
				control_disabled: isDisabled,
				control_error: get(form.touched, field.name) && get(form.errors, field.name),
			})}
		>
			<ControlLabel label={label} />

			<AsyncPaginate
				value={field.value}
				options={options}
				placeholder={placeholder}
				isSearchable={isSearchable}
				isDisabled={isDisabled}
				isMulti={isMulti}
				isClearable={isClearable}
				// blurInputOnSelect={true}
				// closeMenuOnSelect={true}
				// closeMenuOnScroll={true}
				// escapeClearsValue={false}
				backspaceRemovesValue={true}
				classNamePrefix="select"
				onChange={handleChange}
				onBlur={handleBlur}
				getOptionLabel={(option) =>
					isFunction(getOptionLabel)
						? getOptionLabel(option)
						: get(option, getOptionLabel)
				}
				getOptionValue={(option) =>
					isFunction(getOptionValue)
						? getOptionValue(option)
						: get(option, getOptionValue)
				}
				onMenuOpen={
					isFunction(onNewClick) || isFetchOnOpen
						? () => setIsMenuOpened((prev) => !prev)
						: null
				}
				loadOptions={loadOptions}
				components={{
					DropdownIndicator,
					// ValueContainer: ValueContainer(append, prepend),
					MenuList: wrapMenuList(MenuList(onNewClick)),
				}}
				cacheUniqs={[isMenuOpened]}
				styles={{
					dropdownIndicator: (provided, state) => ({
						...provided,
						transition: ".1s linear",
						transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
					}),
				}}
				{...rest}
			/>

			<ControlError form={form} field={field} />
		</div>
	);
};

AsyncSelect.propTypes = {
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	placeholder: PropTypes.string,
	options: PropTypes.array,
	append: PropTypes.node,
	prepend: PropTypes.node,
	size: PropTypes.string,
	className: PropTypes.string,
	isMulti: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isSearchable: PropTypes.bool,
	isClearable: PropTypes.bool,
	loadOptionsUrl: PropTypes.string,
	loadOptionsParams: PropTypes.func,
	loadOptionsKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	defaultValue: PropTypes.object,
	getOptionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	getOptionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	onValueChange: PropTypes.func,
	field: PropTypes.object,
	form: PropTypes.object,
	style: PropTypes.object
};
