import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { SpecializationModal } from "../components/SpecializationModal";

const Specialization = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({
		uniqueName: "specializationModal",
		onClose: () => setIsUpdate(false),
	});

	const specializationList = useFetchList({ url: "/specialization" });
	const specializationSingle = useFetchOne({
		url: "/specialization",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const specializationDelete = useDeleteWithConfirm({
		uniqueName: "confirmSpecializationDelete",
		url: "/specialization",
	});

	return (
		<>
			<ConfirmModal
				isOpen={specializationDelete.isOverlayOpen}
				cancelAction={specializationDelete.handleOverlayClose}
				successAction={() => {
					specializationDelete
						.mutateAsync(specializationDelete.id)
						.then(() => specializationList.refetch());
					specializationDelete.handleOverlayClose();
				}}
			/>

			<SpecializationModal
				values={isUpdate && specializationSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					specializationList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Специализация" },
				]}
				title="Специализации"
				btnText="Добавить специализация"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={specializationList.isLoading}
				editAction={(specialization) => {
					setIsUpdate(true);
					specializationSingle.setId(get(specialization, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(specialization) => {
					specializationDelete.setId(get(specialization, "id"));
					specializationDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Имя",
						dataKey: "title",
						render: (value) => getLanguageValue(value),
					},
				]}
				items={specializationList.data}
			/>

			<Pagination
				pageCount={get(specializationList, "meta.pageCount")}
				currentPage={specializationList.menu}
				onPageChange={(newPage) => {
					specializationList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Specialization;
