import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, ListActions, Pagination } from "components";
import { FoodModal } from "../components/FoodModal";

const Food = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "foodModal", onClose: () => setIsUpdate(false) });

	const foodList = useFetchList({
		url: "/food",
	});
	const foodSingle = useFetchOne({
		url: "/food",
		urlSearchParams: {
			include: "category,file,products",
		},
		refetchStatus: isUpdate,
	});
	const foodDelete = useDeleteWithConfirm({
		uniqueName: "confirmCashboxDelete",
		url: "/food",
	});

	return (
		<>
			<ConfirmModal
				isOpen={foodDelete.isOverlayOpen}
				cancelAction={foodDelete.handleOverlayClose}
				successAction={() => {
					foodDelete.mutateAsync(foodDelete.id).then(() => foodList.refetch());
					foodDelete.handleOverlayClose();
				}}
			/>

			<FoodModal
				values={isUpdate && foodSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					foodList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Кухня" },
					{ label: "Блюда" },
				]}
				title="Блюда"
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={foodList.isLoading}
				editAction={(cashbox) => {
					setIsUpdate(true);
					foodSingle.setId(get(cashbox, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(cashbox) => {
					foodDelete.setId(get(cashbox, "id"));
					foodDelete.handleOverlayOpen();
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
					{
						title: "Описание",
						dataKey: "description",
						render: (value) => getLanguageValue(value),
					},
				]}
				items={foodList.data}
			/>

			<Pagination
				pageCount={get(foodList, "meta.pageCount")}
				currentPage={foodList.page}
				onPageChange={(newPage) => foodList.setPage(newPage + 1)}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Добавить бдюдо" />
		</>
	);
};

export default Food;
