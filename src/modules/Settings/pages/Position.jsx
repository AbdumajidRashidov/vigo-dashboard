import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { PositionModal } from "../components/PositionModal";

const Position = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "positionModal", onClose: () => setIsUpdate(false) });

	const positionList = useFetchList({ url: "/position" });
	const positionSingle = useFetchOne({
		url: "/position",
		urlSearchParams: {
			include: "file",
		},
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const positionDelete = useDeleteWithConfirm({
		uniqueName: "confirmPositionDelete",
		url: "/position",
	});

	return (
		<>
			<ConfirmModal
				isOpen={positionDelete.isOverlayOpen}
				cancelAction={positionDelete.handleOverlayClose}
				successAction={() => {
					positionDelete
						.mutateAsync(positionDelete.id)
						.then(() => positionList.refetch());
					positionDelete.handleOverlayClose();
				}}
			/>

			<PositionModal
				values={isUpdate && positionSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					positionList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Должность" },
				]}
				title="Должности"
				btnText="Добавить должность"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={positionList.isLoading}
				editAction={(position) => {
					setIsUpdate(true);
					positionSingle.setId(get(position, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(position) => {
					positionDelete.setId(get(position, "id"));
					positionDelete.handleOverlayOpen();
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
				items={positionList.data}
			/>

			<Pagination
				pageCount={get(positionList, "meta.pageCount")}
				currentPage={positionList.menu}
				onPageChange={(newPage) => {
					positionList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Position;
