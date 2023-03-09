import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { ManufacturerModal } from "../components/ManufacturerModal";

const Manufacturer = () => {
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({
		uniqueName: "manufacturerModal",
		onClose: () => setIsUpdate(false),
	});

	const manufacturerList = useFetchList({ url: "manufacturer" });
	const manufacturerSingle = useFetchOne({
		url: "manufacturer",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const manufacturerDelete = useDeleteWithConfirm({
		uniqueName: "confirmManufacturerDelete",
		url: "manufacturer",
	});

	return (
		<>
			<ConfirmModal
				isOpen={manufacturerDelete.isOverlayOpen}
				cancelAction={manufacturerDelete.handleOverlayClose}
				successAction={() => {
					manufacturerDelete
						.mutateAsync(manufacturerDelete.id)
						.then(() => manufacturerList.refetch());
					manufacturerDelete.handleOverlayClose();
				}}
			/>

			<ManufacturerModal
				values={isUpdate && manufacturerSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					manufacturerList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Производитель" },
				]}
				title="Производители"
				btnText="Добавить Производителя"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={manufacturerList.isLoading}
				editAction={(manufacturer) => {
					setIsUpdate(true);
					manufacturerSingle.setId(get(manufacturer, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(manufacturer) => {
					manufacturerDelete.setId(get(manufacturer, "id"));
					manufacturerDelete.handleOverlayOpen();
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
						render: (value) => value,
					},
				]}
				items={manufacturerList.data}
			/>

			<Pagination
				pageCount={get(manufacturerList, "meta.pageCount")}
				currentPage={manufacturerList.menu}
				onPageChange={(newPage) => {
					manufacturerList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Manufacturer;
