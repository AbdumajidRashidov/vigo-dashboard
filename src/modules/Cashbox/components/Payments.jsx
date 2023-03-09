import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { useGetLanguage } from "hooks";

import { Fields, Button, Typography } from "components";

export const Payments = ({ payments, onRemove }) => {
	const { getLanguageValue } = useGetLanguage();

	return payments.map((product, index) => (
		<div key={index} className="mt_30">
			<div className="d-flex align-items-center justify-content-between mb_20">
				<Typography
					Type="span"
					className="color_brand-blue product__btn"
					text={`${index + 1}-ПЛАТЁЖ`}
				/>

				{index !== 0 && (
					<Button
						className="color_primary-red product__btn"
						text="Удалить"
						onClick={(event) => onRemove(index, event)}
					/>
				)}
			</div>

			<div key={index} className="row g-4">
				<div className="col-6">
					<FastField
						name={`items.${index}.amount`}
						component={Fields.InputNumber}
						label="Cумма"
						placeholder="Cумма"
					/>
				</div>

				<div className="col-6">
					<FastField
						name={`items.${index}.payment_type_id`}
						component={Fields.AsyncSelect}
						label="способ оплаты"
						placeholder="способ оплаты"
						loadOptionsUrl="/payment-type"
						getOptionLabel={(option) => getLanguageValue(get(option, "title"))}
					/>
				</div>
			</div>
		</div>
	));
};
