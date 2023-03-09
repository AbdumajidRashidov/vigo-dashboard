import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { ShiftModal } from "../components/ShiftModal";

const Shift = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "shiftModal", onClose: () => setIsUpdate(false) });

	const shiftList = useFetchList({ url: "/shift" });
	const shiftSingle = useFetchOne({
		url: "/shift",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const shiftDelete = useDeleteWithConfirm({
		uniqueName: "confirmShiftDelete",
		url: "/shift",
	});

	return (
		<>
			<ConfirmModal
				isOpen={shiftDelete.isOverlayOpen}
				cancelAction={shiftDelete.handleOverlayClose}
				successAction={() => {
					shiftDelete.mutateAsync(shiftDelete.id).then(() => shiftList.refetch());
					shiftDelete.handleOverlayClose();
				}}
			/>

			<ShiftModal
				values={isUpdate && shiftSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					shiftList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Смена" },
				]}
				title="Смены"
				btnText="Добавить смену"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={shiftList.isLoading}
				editAction={(shift) => {
					setIsUpdate(true);
					shiftSingle.setId(get(shift, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(shift) => {
					shiftDelete.setId(get(shift, "id"));
					shiftDelete.handleOverlayOpen();
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
				items={shiftList.data}
			/>
			<Pagination
				pageCount={get(shiftList, "meta.pageCount")}
				currentPage={shiftList.menu}
				onPageChange={(newPage) => {
					shiftList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Shift;
