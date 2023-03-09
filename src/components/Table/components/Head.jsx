import React from "react";
import { get, isFunction } from "lodash";
import { Fields } from "components";

export const Head = ({ columns, deleteAction, editAction, renderButtons, isCheckbox }) => {
	return (
		<thead className="table__head">
			<tr>
				{/* {isCheckbox && <th className="table_th"></th>} */}
				{columns.map((col, index) => (
					<th
						key={index}
						className={`table__th ${get(col, "className", "")}`}
						onClick={isFunction(col.onHeadClick) ? () => col.onHeadClick(col) : null}
					>
						{get(col, "title")}
					</th>
				))}
				{(editAction || deleteAction || renderButtons) && <th className="table__th"></th>}
			</tr>
		</thead>
	);
};
