import React from "react";
import { Field } from "formik";
import { get } from "lodash";

import { useGetLanguage } from "hooks";
import { constants, utils } from "services";

import { Fields, SearchFilter } from "components";
import Containers from "containers";

export const OrdersAddFilter = ({ setFilter }) => {
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
                    {/* <Field
                        name = "search_filter"
                        component={SearchFilter}
                        className="mr_15"
					/> */}

                    <div className="d-flex justify-content-between align-items-center" style={{width:"100%"}}>
                        <div className="d-flex justify-content-between align-items-center" style={{width:"60%"}}>
                        <Field
                            name="currency_id"
                            component={Fields.AsyncSelect}
                            style={{width:"50%"}}
                            loadOptionsUrl="/currency"
                            placeholder="Buyurtma turi"
                            getOptionLabel={(option) =>
                                "label" in option ? option.label : getLanguageValue(get(option, "name"))
                            }
                            initialValue={[constants.selectAll]}
                            className="mr_15"
                            onValueChange={(option) =>
                                setFilter((prev) => ({ ...prev, currency_id: get(option, "id") }))
                            }
                        />
                        <Field
                            name="payment_type_id"
                            component={Fields.AsyncSelect}
                            loadOptionsUrl="/payment-type"
                            placeholder="Tanlang"
                            style={{width:"50%"}}
                            size="sm"
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
                        </div>
                        <Field
                            name="payment_type_id"
                            component={Fields.AsyncSelect}
                            loadOptionsUrl="/status"
                            placeholder="Taom qidirish"
                            size="sm"
                            style={{width:"40%"}}
                            className="ml_15"
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
                    </div>
                    
				</>
			)}
		</Containers.Form>
	);
};
