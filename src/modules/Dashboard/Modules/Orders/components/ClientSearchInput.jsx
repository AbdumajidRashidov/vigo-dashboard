import React from "react";
import { Field } from "formik";
import { get } from "lodash";

import { useGetLanguage } from "hooks";
import { constants, utils } from "services";

import { Fields, SearchFilter } from "components";
import Containers from "containers";

export const ClientsSearchInput = ({ setFilter }) => {
	const { getLanguageValue } = useGetLanguage();

	return (
		<Containers.Form
			className="filter mb_20"
            style={{padding:"0"}}
			onSubmit={setFilter}
			fields={[
				{
					name: "name",
					validationType: "object",
					onSubmitValue: (value) => get(value, "id"),
				},
			]}
		>
			{({ setFieldValue }) => (
				<>
					<Field
						name="name"
						component={Fields.AsyncSelect}
						loadOptionsUrl="/currency"
						placeholder="Mijoz qidirish"
						getOptionLabel={(option) =>
							"label" in option ? option.label : getLanguageValue(get(option, "name"))
						}
						initialValue={[constants.selectAll]}
						className="filter__control w_full p_0"
						onValueChange={(option) =>
							setFilter((prev) => ({ ...prev, currency_id: get(option, "id") }))
						}
					/>
				</>
			)}
		</Containers.Form>
	);
};
