import React from "react";
import { FastField } from "formik";
import { useSelector } from "react-redux";
import { get } from "lodash";

import { userSelector } from "store/selectors";
import { useGetLanguage, useOverlay } from "hooks";
import { constants, time, utils } from "services";

import Containers from "containers";
import { ModalDefault, Fields, Button, PatientModal } from "components";

export const AddDebtorModal = ({
	isOpen,
	handleOverlayClose,
	handleOverlayOpen,
	onAddedNewRecord,
}) => {
	const { getLanguageValue } = useGetLanguage();
	const user = useSelector(userSelector);

	const patientModal = useOverlay({ uniqueName: "patientModalDebtor" });

	return (
		<>
			<PatientModal
				isUpdate={false}
				isOpen={patientModal.isOverlayOpen}
				handleModalClose={patientModal.handleOverlayClose}
				onSuccess={() => {
					patientModal.handleOverlayClose();
					handleOverlayOpen();
				}}
			/>
			<ModalDefault
				isOpen={isOpen}
				handleModalClose={handleOverlayClose}
				title="Добавить должника"
				subtitle={() => (
					<>
						<span className="color_txt-primary fw_600">{get(user, "username")}</span> (
						{getLanguageValue(get(user, "position.title"))})
					</>
				)}
				innerClass="max-width_700"
			>
				<Containers.Form
					url="/debtor"
					onSuccess={() => {
						handleOverlayClose();
						onAddedNewRecord();
					}}
					fields={[
						{
							name: "user_id",
							validationType: "object",
							validations: [{ type: "required" }],
							onSubmitValue: (value) => get(value, "id"),
						},
						{
							name: "patient_id",
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
							name: "amount",
							validations: [{ type: "required" }],
							onSubmitValue: (value) => utils.formatters.formatCurrencyApi(value),
						},
						{
							name: "degree",
							validationType: "object",
							onSubmitValue: (value) => get(value, "id"),
						},
						{
							name: "expired_at",
							validations: [{ type: "required" }],
							onSubmitValue: (value) => time.toTimestamp(value),
						},
					]}
				>
					{({ isSubmitting }) => (
						<>
							<div className="row g-4">
								<div className="col-6">
									<FastField
										name="patient_id"
										component={Fields.AsyncSelect}
										label="пациент"
										placeholder="пациент"
										loadOptionsUrl="/patient"
										loadOptionsParams={(searchText) => ({
											filter: {
												name: searchText,
											},
										})}
										onNewClick={() => {
											handleOverlayClose();
											patientModal.handleOverlayOpen();
										}}
										getOptionLabel={(option) =>
											`${get(option, "last_name")} ${get(
												option,
												"first_name"
											)}`
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
										name="user_id"
										component={Fields.AsyncSelect}
										label="ответственный Сотрудник"
										placeholder="ответственный"
										loadOptionsUrl="/user"
										getOptionLabel="username"
									/>
								</div>

								<div className="col-6">
									<FastField
										name="amount"
										component={Fields.InputNumber}
										label="Сумма"
										placeholder="Сумма"
									/>
								</div>

								<div className="col-6">
									<FastField
										name="expired_at"
										component={Fields.DatePicker}
										label="срок выплаты"
										placeholder="срок выплаты"
										prepend=""
									/>
								</div>

								<div className="col-6">
									<FastField
										name="degree"
										component={Fields.Select}
										label="степень знакомства"
										placeholder="степень знакомства"
										options={constants.degreeTypes}
									/>
								</div>
							</div>

							<Button
								design="primary"
								type="submit"
								className="modal-btn fz_16 btn mt_40"
								text="Сохранить"
								isLoading={isSubmitting}
							/>
						</>
					)}
				</Containers.Form>
			</ModalDefault>
		</>
	);
};
