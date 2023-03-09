import React from "react";
import { FastField } from "formik";
import { get, isFunction } from "lodash";

import { utils } from "services";
import { useGetLanguage } from "hooks";

import Containers from "containers";
import { Button, ModalDefault, Fields } from "components";

export const AddOutgo = ({
	isOpen,
	handleModalClose,
	onAddedNewRecord,
	cashboxId,
	username,
	position,
}) => {
	const { getLanguageValue } = useGetLanguage();

	return (
		<ModalDefault
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title="Расход"
			subtitle={() => (
				<>
					<span className="color_txt-primary fw_600">{username}</span> ({position})
				</>
			)}
			innerClass="max-width_700 p_40"
		>
			<Containers.Form
				url={`cash-box/${cashboxId}/outgo`}
				onSuccess={() => {
					handleModalClose();
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
						name: "payment_type_id",
						validationType: "object",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "amount",
						validations: [{ type: "required" }],
						onSubmitValue: (value) => utils.formatters.formatCurrencyApi(value),
					},
					{
						name: "comment",
					},
				]}
			>
				{({ isSubmitting }) => (
					<>
						<div className="row g-4">
							<div className="col-6">
								<FastField
									name="user_id"
									component={Fields.AsyncSelect}
									label="от кого"
									placeholder="admin"
									loadOptionsUrl="/user"
									getOptionLabel="username"
								/>
							</div>

							<div className="col-6">
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

							<div className="col-6">
								<FastField
									name="payment_type_id"
									component={Fields.AsyncSelect}
									label="способ оплаты"
									placeholder="способ оплаты"
									loadOptionsUrl="/payment-type"
									getOptionLabel={(option) =>
										getLanguageValue(get(option, "title"))
									}
								/>
							</div>

							<div className="col-6">
								<FastField
									name="amount"
									component={Fields.InputNumber}
									label="Cумма"
									placeholder="Cумма"
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
