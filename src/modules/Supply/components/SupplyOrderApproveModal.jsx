import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { time, utils } from "services";

import { Button, Fields, ModalDefault, Typography } from "components";
import Containers from "containers";
import { useFetchOne } from "hooks";

export const SupplyOrderApproveModal = ({
	isOpen,
	orderId,
	username,
	handleModalClose,
	onSuccess,
}) => {
	const orderSingle = useFetchOne({
		url: `/order/${orderId}`,
		queryOptions: {
			enabled: !!orderId,
		},
		urlSearchParams: {
			include: "items.product",
		},
	});

	const calculatePrice = (setFieldValue, products) => {
		const totalSum = products.reduce(
			(prev, item) => prev + utils.formatters.formatCurrencyApi(item.price),
			0
		);
		setFieldValue("total_price", totalSum);
	};

	return (
		<ModalDefault
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title="Одобрить заказ"
			subtitle={() => (
				<>
					<span className="color_txt-primary fw_600">{username}</span> (Кассир)
				</>
			)}
			innerClass="max-width_700"
		>
			<Containers.Form
				url={`/order/${orderId}/approved`}
				onSuccess={() => {
					onSuccess();
					handleModalClose();
				}}
				fields={[
					{
						name: "provider_id",
						validationType: "object",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "expired_at",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => time.toTimestamp(value),
					},
					{
						name: "total_price",
						value: 0,
						onSubmitValue: (value) => utils.formatters.formatCurrencyApi(value),
					},

					{
						name: "items",
						validationType: "array",
						value: get(orderSingle.data, "items", []).map((item) => ({
							product_id: get(item, "product"),
							price: "",
							quantity: get(item, "quantity"),
						})),
						lazy: (validator, yup) =>
							validator.of(
								yup.object().shape({
									product_id: yup.object(),
									price: yup.number(),
									quantity: yup.string(),
								})
							),
						onSubmitValue: (value) =>
							value.map((item) => ({
								product_id: get(item, "product_id.id"),
								price: utils.formatters.formatCurrencyApi(item.price),
								quantity: utils.formatters.formatCurrencyApi(item.quantity),
							})),
					},
				]}
			>
				{({ isSubmitting, values, errors, setFieldValue }) => (
					<>
						<div className="row g-4">
							<div className="col-6">
								<FastField
									name="provider_id"
									component={Fields.AsyncSelect}
									loadOptionsUrl="/provider"
									label="поставщик"
									getOptionLabel="full_name"
									placeholder="поставщик"
								/>
							</div>

							<div className="col-6">
								<FastField
									name="expired_at"
									component={Fields.DatePicker}
									label="Срок"
									prepend=""
								/>
							</div>
						</div>

						<Products
							products={values.items}
							handlePriceChange={() => {
								calculatePrice(setFieldValue, values.items);
							}}
						/>

						<FastField
							name="total_price"
							component={Fields.InputNumber}
							placeholder="0"
							label="Общая сумма"
							outerClass="mt_40"
						/>

						<Button
							type="submit"
							className="modal-btn fz_16 btn mt_40"
							design="primary"
							text="Одобрить"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
		</ModalDefault>
	);
};

const Products = ({ products, handlePriceChange }) =>
	products.map((product, index) => (
		<div key={index} className="mt_40">
			<div className="d-flex align-items-center justify-content-between mb_20">
				<Typography
					Type="span"
					className="color_brand-blue product__btn"
					text={`${index + 1}-ПРОДУКТ`}
				/>
			</div>

			<div key={index} className="row g-4">
				<div className="col-6">
					<FastField
						name={`items.${index}.product_id`}
						component={Fields.AsyncSelect}
						label="Продукт"
						placeholder="продукт"
						loadOptionsUrl="/product"
						getOptionLabel="title"
						isDisabled={true}
					/>
				</div>

				<div className="col-6">
					<FastField
						name={`items.${index}.quantity`}
						component={Fields.InputNumber}
						label="Колличество"
						placeholder="колличество"
						isDisabled={true}
					/>
				</div>

				<div className="col-6">
					<FastField
						name={`items.${index}.price`}
						component={Fields.InputNumber}
						label="Сумма"
						placeholder="0"
						onBlur={handlePriceChange}
					/>
				</div>
			</div>
		</div>
	));
