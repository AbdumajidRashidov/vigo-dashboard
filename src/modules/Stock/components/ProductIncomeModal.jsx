import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { time, utils } from "services";
import { useGetLanguage } from "hooks";

import { Button, Fields, ModalDefault } from "components";
import Containers from "containers";

export const ProductIncomeModal = ({ isOpen, handleModalClose, onSuccess, username, storeId }) => {
	const { getLanguageValue } = useGetLanguage();
	return (
		<ModalDefault
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title="Добавить Продукт (вручную)"
			subtitle={() => (
				<>
					<span className="color_txt-primary fw_600">{username}</span> (Кассир)
				</>
			)}
			innerClass="max-width_700"
		>
			<Containers.Form
				url="/stock-product"
				onSuccess={() => {
					onSuccess();
					handleModalClose();
				}}
				fields={[
					{
						name: "product_id",
						validationType: "object",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "stock_id",
						value: storeId,
					},
					{
						name: "provider_id",
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
						name: "payment_type_id",
						validationType: "object",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "quantity",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => utils.formatters.formatCurrencyApi(value),
					},
					{
						name: "price",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => utils.formatters.formatCurrencyApi(value),
					},
					{
						name: "expired_date",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => time.toTimestamp(value),
					},
					{
						name: "order_id",
						value: 1,
					},
					{
						name: "type",
						value: 1,
					},
				]}
			>
				{({ isSubmitting }) => (
					<>
						<div className="row g-4">
							<div className="col-6">
								<FastField
									name="provider_id"
									component={Fields.AsyncSelect}
									label="поставщик"
									placeholder="поставщик"
									loadOptionsUrl="/provider"
									getOptionLabel="company_name"
								/>
							</div>

							<div className="col-6">
								<FastField
									name="product_id"
									component={Fields.AsyncSelect}
									label="Наименование"
									placeholder="наименование"
									loadOptionsUrl="/product"
									getOptionLabel="title"
								/>
							</div>

							<div className="col-6">
								<FastField
									name="quantity"
									component={Fields.InputNumber}
									label="Количество"
									placeholder="количество"
								/>
							</div>

							<div className="col-6">
								<FastField
									name="payment_type_id"
									component={Fields.AsyncSelect}
									label="Способ оплаты"
									placeholder="способ оплаты"
									loadOptionsUrl="/payment-type"
									getOptionLabel={(option) =>
										getLanguageValue(get(option, "title"))
									}
								/>
							</div>

							<div className="col-6">
								<FastField
									name="currency_id"
									component={Fields.AsyncSelect}
									label="Валюта"
									placeholder="валюта"
									loadOptionsUrl="/currency"
									getOptionLabel={(option) =>
										getLanguageValue(get(option, "name"))
									}
								/>
							</div>

							<div className="col-6">
								<FastField
									name="price"
									component={Fields.InputNumber}
									label="Сумма"
									placeholder="сумма"
								/>
							</div>

							<div className="col-6">
								<FastField
									name="expired_date"
									component={Fields.DatePicker}
									label="Срок годности"
									placeholder="срок годности"
									prepend=""
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
							text="Добавить продукт"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
		</ModalDefault>
	);
};
