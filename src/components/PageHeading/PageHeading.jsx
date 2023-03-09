import React from "react";
import { isFunction } from "lodash";

import { Button } from "components";
import { Breadcrumb, Statistics } from "./components";

import "./PageHeading.scss";

export const PageHeading = ({ links, btnText, mainAction, statistics,btnIcon, actions }) => {
	return (
		<div className="page-heading">
			<div className="page-heading__inner">
				<Breadcrumb links={links} />
				{isFunction(mainAction) && (
					<div className="d-flex">
					{actions}
					<Button
						className="btn page-heading__btn"
						design="primary"
						prepend={btnIcon}
						text={btnText}
						onClick={mainAction}
					/>
					</div>
					
				)}
			</div>

			<Statistics statistics={statistics} />
		</div>
	);
};
