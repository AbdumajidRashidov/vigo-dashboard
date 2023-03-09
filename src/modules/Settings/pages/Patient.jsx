import React, { useState } from "react";
import { get } from "lodash";

import { time, utils } from "services";
import { useDeleteWithConfirm, useFetchList, useFetchOne, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination, PatientModal } from "components";

const Patient = () => {
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({
		uniqueName: "patientModal",
		onClose: () => setIsUpdate(false),
	});

	const patientList = useFetchList({ url: "/patient" });
	const patientSingle = useFetchOne({
		url: "/patient",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const patientDelete = useDeleteWithConfirm({
		uniqueName: "confirmPatientDelete",
		url: "/patient",
	});

	return (
		<>
			<ConfirmModal
				isOpen={patientDelete.isOverlayOpen}
				cancelAction={patientDelete.handleOverlayClose}
				successAction={() => {
					patientDelete.mutateAsync(patientDelete.id).then(() => patientList.refetch());
					patientDelete.handleOverlayClose();
				}}
			/>

			<PatientModal
				values={isUpdate && patientSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					patientList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Пациент" },
				]}
				title="Пациенты"
				btnText="Добавить Пациента"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={patientList.isLoading}
				editAction={(patient) => {
					setIsUpdate(true);
					patientSingle.setId(get(patient, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(patient) => {
					patientDelete.setId(get(patient, "id"));
					patientDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "Имя",
						dataKey: "first_name",
						render: (value) => value,
					},
					{
						title: "Фамилия",
						dataKey: "last_name",
						render: (value) => value,
					},
					{
						title: "Отчество",
						dataKey: "middle_name",
						render: (value) => value,
					},
					{
						title: "Пол",
						dataKey: "gender",
						render: (value) => utils.formatters.showGender(value),
					},
					{
						title: "День рождения",
						dataKey: "birthdate",
						render: (value) => time.formatTimestamp(value, "DD.MM.YYYY"),
					},
					{
						title: "Пасспорт серия",
						dataKey: "passport_number",
						render: (value) => value,
					},
					{
						title: "Тел.номер",
						dataKey: "phone",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatPhoneView(value),
					},
				]}
				items={patientList.data}
			/>

			<Pagination
				pageCount={get(patientList, "meta.pageCount")}
				currentPage={patientList.page}
				onPageChange={(newPage) => {
					patientList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Patient;
