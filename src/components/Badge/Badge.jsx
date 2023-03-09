import React from "react";
import { isFunction } from "lodash";
import PropTypes from "prop-types";
import cn from "classnames";
import "./Badge.scss"

export const Badge = ({
	design = "",
	className = "",
	style,
	text,
	append,
	prepend,
	onClick,
	...spanProps
}) => {
	const classNames = cn(design ? `bdg__${design}` : "", "bdg", className);

	return (
		<span
			className={classNames}
			style={style}
			onClick={isFunction(onClick) ? onClick : null}
			{...spanProps}
		>
			{prepend}
			{text}
			{append}

		</span>
	);
};

Badge.propTypes = {
	design: PropTypes.oneOf(["primary", "secondary", "circled", "grey"]),
	className: PropTypes.string,
	style: PropTypes.object,
	text: PropTypes.string,
	onClick: PropTypes.func,
	append: PropTypes.node,
	prepend: PropTypes.node,
	children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
