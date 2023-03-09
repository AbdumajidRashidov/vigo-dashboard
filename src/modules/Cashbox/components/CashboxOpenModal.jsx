import React from "react";
import { FastField, Field } from "formik";
import { get } from "lodash";
import cn from "classnames";

import { formatters } from "services/utils";
import { useGetLanguage, useOverlay } from "hooks";

import Containers from "containers";
import { Button, Fields, ModalDefault } from "components";

export const CashboxOpenModal = ({
	isOpen,
	handleModalClose,
	onSuccess,
	username,
	position,
	cashboxId,
	onCashboxIdChange,
	cashboxList,
}) => {
	const { getLanguageValue } = useGetLanguage();
	const modal = useOverlay({ uniqueName: "cashboxModalOpen" });

	return (
		<>
			<ModalDefault
				isOpen={isOpen}
				handleModalClose={handleModalClose}
				title="Выберите кассу"
				innerClass="max-width_500"
			>
				{cashboxList.data?.map((item, index) => (
					<Button
						key={item.id}
						design="grey"
						className={cn("upload-data w_full mb_20", { cashbox_opened: item.isOpen })}
						prepend={item.isOpen ? <span className="cashbox-circle"></span> : ""}
						text={`${getLanguageValue(get(item, "title"))} ${
							item.isOpen ? "(Открыто)" : ""
						}`}
						onClick={(event) => {
							onCashboxIdChange(item.id);
							handleModalClose(event);
							modal.handleOverlayOpen(event);
						}}
					/>
				))}
			</ModalDefault>

			<ModalDefault
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				title="Открыть новую смену"
				subtitle={() => (
					<>
						<span className="color_txt-primary fw_600">{username}</span> ({position})
					</>
				)}
				innerClass="max-width_700"
			>
				<Containers.Form
					url={`/cash-box/${cashboxId}/open`}
					onSuccess={() => {
						onSuccess();
						modal.handleOverlayClose();
					}}
					fields={[
						{
							name: "shift_id",
							validationType: "object",
							onSubmitValue: (value) => get(value, "id"),
						},
						{
							name: "previous_cashier_id",
							validationType: "object",
							onSubmitValue: (value) => get(value, "id"),
						},
						{
							name: "balance_on_open",
							onSubmitValue: (value) => formatters.formatCurrencyApi(value),
						},
						{
							name: "payment_type_id",
							validationType: "object",
							onSubmitValue: (value) => get(value, "id"),
						},
						{
							name: "currency_id",
							validationType: "object",
							onSubmitValue: (value) => get(value, "id"),
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
									<Field
										name="shift_id"
										component={Fields.AsyncSelect}
										label="Смена"
										placeholder="1-смена"
										loadOptionsUrl={`/cash-box/${cashboxId}/shift`}
										getOptionLabel={(option) =>
											getLanguageValue(get(option, "title"))
										}
									/>
								</div>

								<div className="col-6">
									<FastField
										name="previous_cashier_id"
										component={Fields.AsyncSelect}
										label="От кого"
										placeholder="от кого"
										loadOptionsUrl="/user"
										getOptionLabel="username"
									/>
								</div>

								<div className="col-6">
									<FastField
										name="balance_on_open"
										component={Fields.InputNumber}
										label="Оставшиеся деньги"
										placeholder="10000"
									/>
								</div>

								<div className="col-6">
									<FastField
										name="payment_type_id"
										component={Fields.AsyncSelect}
										label="способ оплаты"
										placeholder="Наличные"
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
								design="primary"
								className="modal-btn fz_16 btn mt_40"
								text="Открыть новую смену"
								isLoading={isSubmitting}
							/>
						</>
					)}
				</Containers.Form>
			</ModalDefault>
		</>
	);
};
