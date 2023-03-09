import React from "react";
import { Field } from "formik";
import { get } from "lodash";

import { useGetLanguage } from "hooks";
import { constants, utils } from "services";

import { Fields, SearchFilter } from "components";
import Containers from "containers";

export const OrdersFilter = ({ setFilter }) => {
	const { getLanguageValue } = useGetLanguage();

	return (
		<Containers.Form
			className="filter"
			onSubmit={setFilter}
			fields={[
				{
					name: "currency_id",
					validationType: "object",
					onSubmitValue: (value) => get(value, "id"),
				},
				{
					name: "range",
					validationType: "object",
					onSubmitValue: (value) => utils.formatters.getRange(value),
				},
				{
					name: "payment_type_id",
					validationType: "object",
					onSubmitValue: (value) => get(value, "id"),
				},
			]}
		>
			{({ setFieldValue }) => (
				<>
                    <Field
                        name = "search_filter"
                        component={SearchFilter}
                        className="mr_15"
					/>

					<Field
						name="currency_id"
						component={Fields.AsyncSelect}
						loadOptionsUrl="/currency"
						placeholder="Buyurtma holati"
						size="xsm"
						getOptionLabel={(option) =>
							"label" in option ? option.label : getLanguageValue(get(option, "name"))
						}
						initialValue={[constants.selectAll]}
						className="filter__control mr_15 min-width_150"
						onValueChange={(option) =>
							setFilter((prev) => ({ ...prev, currency_id: get(option, "id") }))
						}
					/>
					<Field
						name="payment_type_id"
						component={Fields.AsyncSelect}
						loadOptionsUrl="/payment-type"
						placeholder="To'lov holati"
						size="xsm"
						className="filter__control min-width_150"
						initialValue={[constants.selectAll]}
						getOptionLabel={(option) =>
							"label" in option
								? option.label
								: getLanguageValue(get(option, "title"))
						}
						onValueChange={(option) =>
							setFilter((prev) => ({ ...prev, payment_type_id: get(option, "id") }))
						}
					/>
                    <Field
						name="payment_type_id"
						component={Fields.AsyncSelect}
						loadOptionsUrl="/status"
						placeholder="Vaqti"
						size="xsm"
						className="filter__control min-width_150 ml_15"
						initialValue={[constants.selectAll]}
						getOptionLabel={(option) =>
							"label" in option
								? option.label
								: getLanguageValue(get(option, "title"))
						}
						onValueChange={(option) =>
							setFilter((prev) => ({ ...prev, payment_type_id: get(option, "id") }))
						}
					/>
				</>
			)}
		</Containers.Form>
	);
};
