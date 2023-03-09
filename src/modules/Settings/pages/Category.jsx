import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { CategoryModal } from "../components/CategoryModal";

const Category = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "categoryModal", onClose: () => setIsUpdate(false) });

	const categoryList = useFetchList({ url: "/category" });
	const categorySingle = useFetchOne({
		url: "/category",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const categoryDelete = useDeleteWithConfirm({
		uniqueName: "confirmCategoryDelete",
		url: "/category",
	});

	return (
		<>
			<ConfirmModal
				isOpen={categoryDelete.isOverlayOpen}
				cancelAction={categoryDelete.handleOverlayClose}
				successAction={() => {
					categoryDelete
						.mutateAsync(categoryDelete.id)
						.then(() => categoryList.refetch());
					categoryDelete.handleOverlayClose();
				}}
			/>

			<CategoryModal
				values={isUpdate && categorySingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					categoryList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Категория" },
				]}
				title="Категории"
				btnText="Добавить категорию"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={categoryList.isLoading}
				editAction={(category) => {
					setIsUpdate(true);
					categorySingle.setId(get(category, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(category) => {
					categoryDelete.setId(get(category, "id"));
					categoryDelete.handleOverlayOpen();
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
				items={categoryList.data}
			/>

			<Pagination
				pageCount={get(categoryList, "meta.pageCount")}
				currentPage={categoryList.menu}
				onPageChange={(newPage) => {
					categoryList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Category;
