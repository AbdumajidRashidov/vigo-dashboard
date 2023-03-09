import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Button } from "components";

import "./Tab.scss";

export const TabBase = ({ onPaneChange, className, labels = [], currentLabel, vertical=false }) => {
	return (
		<div className={cn(className, vertical ? "tab-vertical" : "tab" )}>
			{labels.map((tabLabel, index) => (
				<Button
					key={index}
					className={cn( vertical ? "tab-vertical__label" : "tab__label", {
						tab__label_active: tabLabel === currentLabel,
					})}
					text={tabLabel}
					onClick={(event) => onPaneChange(tabLabel, event)}
				/>
			))}
		</div>
	);
};

TabBase.propTypes = {
	className: PropTypes.string,
	onPaneChange: PropTypes.func,
	labels: PropTypes.array,
	vertical: PropTypes.bool,
	currentLabel: PropTypes.string,
};
