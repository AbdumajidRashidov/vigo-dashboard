import React from "react";
import { FastField } from "formik";
import { get, isFunction } from "lodash";

import { utils } from "services";
import { useGetLanguage } from "hooks";

import Containers from "containers";
import { Button, ModalDefault, Fields } from "components";
import { Payments } from "./Payments";

import { ReactComponent as AddIcon } from "assets/icons/add-item.svg";

export const StuffIncomeModal = ({
	isOpen,
	handleOverlayClose,
	onAddedNewRecord,
	cashboxId,
	username,
	position,
}) => {
	const { getLanguageValue } = useGetLanguage();

	const handleRemovePayment = (selectedIndex, payments, setFieldValue) => {
		const newProducts = payments.filter((item, index) => index !== selectedIndex);
		setFieldValue("items", newProducts);
	};

	const handleAddPayment = (payments, setFieldValue) => {
		const newProduct = {
			payment_type_id: "",
			amount: "",
		};
		setFieldValue("items", [...payments, newProduct]);
	};

	return (
		<ModalDefault
			isOpen={isOpen}
			handleModalClose={handleOverlayClose}
			title="Приход (От сотрудников)"
			subtitle={() => (
				<>
					<span className="color_txt-primary fw_600">{username}</span> ({position})
				</>
			)}
			innerClass="max-width_700 p_40"
		>
			<Containers.Form
				url={`/cash-box/${cashboxId}/incoming`}
				onSuccess={() => {
					handleOverlayClose();
					isFunction(onAddedNewRecord) && onAddedNewRecord();
				}}
				fields={[
					{
						name: "user_id",
						validationType: "object",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "currency_id",
						validationType: "object",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "items",
						validationType: "array",
						value: [
							{
								amount: "",
								payment_type_id: "",
							},
						],
						lazy: (validator, yup) =>
							validator.of(
								yup.object().shape({
									amount: yup.string(),
									payment_type_id: yup.object(),
								})
							),
						onSubmitValue: (value) =>
							value.map((item) => ({
								amount: utils.formatters.formatCurrencyApi(item.amount),
								payment_type_id: get(item, "payment_type_id.id"),
							})),
					},
					{
						name: "comment",
					},
				]}
			>
				{({ isSubmitting, values, setFieldValue }) => (
					<>
						<div className="row g-4">
							<div className="col-12">
								<FastField
									name="user_id"
									component={Fields.AsyncSelect}
									label="от кого"
									placeholder="admin"
									loadOptionsUrl="/user"
									getOptionLabel="username"
								/>
							</div>

							<div className="col-12">
								<FastField
									name="currency_id"
									component={Fields.AsyncSelect}
									label="валюта"
									placeholder="валюта"
									loadOptionsUrl="/currency"
									getOptionLabel={(option) =>
										getLanguageValue(get(option, "name"))
									}
								/>
							</div>

							<div className="col-12">
								<Payments
									payments={values.items}
									onRemove={(index) =>
										handleRemovePayment(index, values.items, setFieldValue)
									}
								/>

								<Button
									prepend={<AddIcon />}
									className="add-item mt_20 mb_30"
									text="Добавить еще"
									onClick={() => handleAddPayment(values.items, setFieldValue)}
								/>
							</div>

							<div className="col-12">
								<FastField
									name="comment"
									component={Fields.Textarea}
									label="Комментарий"
									placeholder="Напишите что-нибудь"
									size="textarea"
								/>
							</div>
						</div>

						<Button
							type="submit"
							className="modal-btn fz_16 btn mt_40"
							design="primary"
							text="Сохранить"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
		</ModalDefault>
	);
};
