import React, { useState } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

import { userSelector } from "store/selectors";
import { time, utils } from "services";
import { useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { ListActions, PageHeading, Pagination, Table } from "components";
import { KitchenMenuReadyModal } from "../components/KitchenMenuReadyModal";

const KitchenMenuReady = () => {
	const { getLanguageValue } = useGetLanguage();
	const user = useSelector(userSelector);

	const [isUpdate, setIsUpdate] = useState(false);
	const modal = useOverlay({
		uniqueName: "addKitchenMenuReady",
		onClose: () => setIsUpdate(false),
	});

	const kitchenMenuReadySingle = useFetchOne({
		url: "/kitchen-menu-ready",
		urlSearchParams: {
			include: "kitchenMenu",
		},
		queryOptions: {
			enabled: false,
		},
		refetchStatus: isUpdate,
	});
	const kitchenMenuReadyList = useFetchList({
		url: "/kitchen-menu-ready",
		urlSearchParams: {
			include: "kitchenMenu",
		},
	});

	return (
		<>
			<KitchenMenuReadyModal
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				onSuccess={kitchenMenuReadyList.refetch}
				user={user}
				values={isUpdate && kitchenMenuReadySingle.data}
				isUpdate={isUpdate}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Кухня" },
					{ label: "Готовые блюда" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных."
				isLoading={kitchenMenuReadyList.isLoading}
				editAction={(kitchenMenu) => {
					setIsUpdate(true);
					kitchenMenuReadySingle.setId(get(kitchenMenu, "id"));
					modal.handleOverlayOpen();
				}}
				columns={[
					{
						title: "Время",
						dataKey: "created_at",
						render: (value) => time.formatTimestamp(value, "DD.MM.YYYY"),
					},
					{
						title: "Кому",
						dataKey: "type",
						render: (value) => utils.formatters.showFoodWhom(value),
					},
					{
						title: "Время приема пищи",
						dataKey: "type",
						render: (value) => utils.formatters.showFoodTime(value),
					},
					{
						title: "Наименование",
						dataKey: "kitchenMenu",
						render: (value) => getLanguageValue(get(value, "title")),
					},
					{
						title: "Колличество",
						dataKey: "quantity",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
				]}
				items={kitchenMenuReadyList.data}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Создать меню" />

			<Pagination
				pageCount={get(kitchenMenuReadyList, "meta.pageCount")}
				currentPage={kitchenMenuReadyList.page}
				onPageChange={(newPage) => kitchenMenuReadyList.setPage(newPage + 1)}
			/>
		</>
	);
};

export default KitchenMenuReady;
