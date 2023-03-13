import React from "react";
import { Field } from "formik";
import { get } from "lodash";

import { useGetLanguage } from "hooks";
import { constants, utils } from "services";

import { Fields, SearchFilter } from "components";
import Containers from "containers";

export const StolFilter = ({ setFilter }) => {
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
            name="currency_id"
            component={Fields.AsyncSelect}
            loadOptionsUrl="/currency"
            placeholder="Zal"
            size="sm"
            getOptionLabel={(option) =>
              "label" in option
                ? option.label
                : getLanguageValue(get(option, "name"))
            }
            initialValue={[constants.selectAll]}
            className="filter__control mr_15 w_340"
            onValueChange={(option) =>
              setFilter((prev) => ({ ...prev, currency_id: get(option, "id") }))
            }
          />
        </>
      )}
    </Containers.Form>
  );
};
