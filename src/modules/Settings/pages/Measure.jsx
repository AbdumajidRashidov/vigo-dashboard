import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { MeasureModal } from "../components/MeasureModal";

const Measure = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);
	const modal = useOverlay({ uniqueName: "measureModal", onClose: () => setIsUpdate(false) });

	const measureList = useFetchList({ url: "/measure" });
	const measureSingle = useFetchOne({
		url: "/measure",
		urlSearchParams: {
			include: "category",
		},
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const measureDelete = useDeleteWithConfirm({
		uniqueName: "confirmMeasureDelete",
		url: "/measure",
	});

	return (
		<>
			<ConfirmModal
				isOpen={measureDelete.isOverlayOpen}
				cancelAction={measureDelete.handleOverlayClose}
				successAction={() => {
					measureDelete.mutateAsync(measureDelete.id).then(() => measureList.refetch());
					measureDelete.handleOverlayClose();
				}}
			/>

			<MeasureModal
				values={isUpdate && measureSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					measureList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Мера" },
				]}
				title="Мера"
				btnText="Добавить меру"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={measureList.isLoading}
				editAction={(measure) => {
					setIsUpdate(true);
					measureSingle.setId(get(measure, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(measure) => {
					measureDelete.setId(get(measure, "id"));
					measureDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Имя",
						dataKey: "name",
						render: (value) => getLanguageValue(value),
					},
					{
						title: "Код",
						dataKey: "short_name",
						render: (value) => value,
					},
				]}
				items={measureList.data}
			/>

			<Pagination
				pageCount={get(measureList, "meta.pageCount")}
				currentPage={measureList.menu}
				onPageChange={(newPage) => {
					measureList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Measure;
