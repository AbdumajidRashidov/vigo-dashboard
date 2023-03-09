import React, { useEffect } from "react";
import { FastField } from "formik";
import { get, isArray } from "lodash";

import { useFetchList, useGetLanguage, useOverlay } from "hooks";
import { formatters } from "services/utils";

import { Button, ConfirmModal, Fields, ModalDefault, AttachFile, Spinning } from "components";
import Containers from "containers";

export const CashboxCloseModal = ({
	isOpen,
	handleModalClose,
	username,
	position,
	cashboxId,
	onSuccess,
}) => {
	const { getLanguageValue } = useGetLanguage();
	const confirmModal = useOverlay({ uniqueName: "closeModalConfirm" });

	const cashboxInformation = useFetchList({
		url: `/cash-box/${cashboxId}/before-close`,
		queryOptions: {
			enabled: false,
		},
		urlSearchParams: {
			include: "paymentType",
		},
	});

	useEffect(() => {
		if (isOpen === true) cashboxInformation.refetch();
	}, [isOpen]);

	const calculateTotal = () => {
		if (isArray(cashboxInformation.data)) {
			const total = cashboxInformation.data.reduce(
				(prev, item) => prev + Number(item.amount),
				0
			);
			return formatters.formatCurrencyView(total);
		}

		return "";
	};

	return (
		<>
			<ModalDefault
				isOpen={isOpen}
				handleModalClose={handleModalClose}
				title="Закрыть кассу"
				subtitle={() => (
					<>
						<span className="color_txt-primary fw_600">{username}</span> ({position})
					</>
				)}
				innerClass="max-width_700"
			>
				<Containers.Form
					url={`/cash-box/${cashboxId}/close`}
					onSuccess={onSuccess}
					fields={[
						{
							name: "balance_on_close",
							onSubmitValue: (value) => formatters.formatCurrencyApi(value),
						},
						{
							name: "collection",
							value: calculateTotal(),
							onSubmitValue: (value) => formatters.formatCurrencyApi(value),
						},
						{
							name: "currency_id",
							validationType: "object",
							onSubmitValue: (value) => get(value, "id"),
						},
						{
							name: "payment_type_id",
							validationType: "object",
							validations: [{ type: "required" }],
							onSubmitValue: (value) => get(value, "id"),
						},
						{
							name: "comment",
						},
						{
							name: "file_id",
							validationType: "object",
							onSubmitValue: (value) => get(value, "0.id"),
						},
					]}
				>
					{({ submitForm, values }) => (
						<>
							<div className="row g-4">
								<Spinning entity={cashboxInformation.data}>
									{cashboxInformation.data?.map((item, index) => (
										<div key={index} className="col-6">
											<FastField
												name={get(item, "payment_type_id")}
												component={Fields.InputNumber}
												label={getLanguageValue(
													get(item, "paymentType.title")
												)}
												value={get(item, "amount")}
												isDisabled={true}
											/>
										</div>
									))}
								</Spinning>

								<div className="col-6">
									<FastField
										name="balance_on_close"
										component={Fields.InputNumber}
										label="Остаток при закрытии"
										placeholder="10000"
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
										name="collection"
										component={Fields.InputNumber}
										label="По факту"
										placeholder="10000"
									/>
								</div>

								<div className="col-12 d-flex justify-content-end">
									<FastField name="file_id" component={AttachFile} />
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
								design="primary"
								type="button"
								className="modal-btn fz_16 btn mt_40"
								text="Закрыть Кассу"
								onClick={() => {
									handleModalClose();
									confirmModal.handleOverlayOpen();
								}}
							/>

							<ConfirmModal
								isOpen={confirmModal.isOverlayOpen}
								title="Вы уверены, что хотите закрыть кассу?"
								successText="Закрыть"
								successAction={() => {
									submitForm();
									confirmModal.handleOverlayClose();
								}}
								cancelAction={confirmModal.handleOverlayClose}
							/>
						</>
					)}
				</Containers.Form>
			</ModalDefault>
		</>
	);
};
