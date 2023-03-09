import React, { useState } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

import { userSelector } from "store/selectors";
import { utils } from "services";
import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { ConfirmModal, ListActions, PageHeading, Pagination, Table } from "components";
import { KitchenMenuModal } from "../components/KitchenMenuModal";

const KitchenMenu = () => {
	const { getLanguageValue } = useGetLanguage();
	const user = useSelector(userSelector);

	const [isUpdate, setIsUpdate] = useState(false);
	const modal = useOverlay({ uniqueName: "addKitchenMenu", onClose: () => setIsUpdate(false) });

	const kitchenMenuSingle = useFetchOne({
		url: "/kitchen-menu",
		urlSearchParams: {
			include: "products.product,foods.food,file",
		},
		queryOptions: {
			enabled: false,
		},
		refetchStatus: isUpdate,
	});
	const kitchenMenuList = useFetchList({
		url: "/kitchen-menu",
	});
	const kitchenMenuDelete = useDeleteWithConfirm({
		uniqueName: "confirmKitchenMenuDelete",
		url: "/kitchen-menu",
	});

	return (
		<>
			<ConfirmModal
				isOpen={kitchenMenuDelete.isOverlayOpen}
				cancelAction={kitchenMenuDelete.handleOverlayClose}
				successAction={() => {
					kitchenMenuDelete
						.mutateAsync(kitchenMenuDelete.id)
						.then(() => kitchenMenuList.refetch());
					kitchenMenuDelete.handleOverlayClose();
				}}
			/>

			<KitchenMenuModal
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				onSuccess={kitchenMenuList.refetch}
				user={user}
				values={isUpdate && kitchenMenuSingle.data}
				isUpdate={isUpdate}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Кухня" },
					{ label: "Всё меню" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных
					о Должниках."
				isLoading={kitchenMenuList.isLoading}
				editAction={(kitchenMenu) => {
					setIsUpdate(true);
					kitchenMenuSingle.setId(get(kitchenMenu, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(kitchenMenu) => {
					kitchenMenuDelete.setId(get(kitchenMenu, "id"));
					kitchenMenuDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "День недели",
						dataKey: "day",
						render: (value) => utils.formatters.showDay(value),
					},
					{
						title: "Наименование",
						dataKey: "title",
						render: (value) => getLanguageValue(value),
					},
					{
						title: "Время приема пищи",
						dataKey: "type",
						render: (value) => utils.formatters.showFoodTime(value),
					},
				]}
				items={kitchenMenuList.data}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Создать меню" />

			<Pagination
				pageCount={get(kitchenMenuList, "meta.pageCount")}
				currentPage={kitchenMenuList.page}
				onPageChange={(newPage) => kitchenMenuList.setPage(newPage + 1)}
			/>
		</>
	);
};

export default KitchenMenu;
