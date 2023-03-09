import React from "react";
import { useParams } from "react-router-dom";
import { get } from "lodash";

import { utils } from "services";
import { useFetchList, useGetLanguage, useOverlay } from "hooks";

import { ListActions, PageHeading, Pagination, Table } from "components";
import { StoreProductModal } from "../components/StoreProductModal";

const StoreProduct = () => {
	const { storeId } = useParams();
	const { getLanguageValue } = useGetLanguage();
	const modal = useOverlay({ uniqueName: "storeProductModal" });

	const incomeList = useFetchList({
		url: "/stock-product",
		urlSearchParams: {
			filter: {
				stock_id: storeId,
			},
			include: "provider,product,currency,user",
		},
	});

	return (
		<>
			<StoreProductModal
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				storeId={storeId}
				onAddedNewRecord={incomeList.refetch}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/stock/store", label: "Склад" },
					{ label: "Приход товаров" },
				]}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Приход" />

			<Table
				isLoading={incomeList.isLoading}
				emptyUiText="В настоящее время у вас нет данных	о Приходах."
				className="table__no-filter"
				columns={[
					{
						title: "Поставщик",
						dataKey: "provider",
						render: (value) => get(value, "full_name"),
					},
					{
						title: "Представитель",
						dataKey: "user",
						render: (value) => get(value, "username"),
					},
					{
						title: "Номер телефона",
						dataKey: "provider",
						render: (value) =>
							utils.formatters.formatPhoneView(get(value, "phone_number")),
					},
					{
						title: "Наименование",
						dataKey: "product",
						render: (value) => get(value, "title"),
					},
					{
						title: "Количество",
						dataKey: "quantity",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
					{
						title: "Сумма",
						dataKey: "price",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
					{
						title: "Валюта",
						dataKey: "currency",
						render: (value) => getLanguageValue(get(value, "name")),
					},
				]}
				items={incomeList.data}
			/>

			<Pagination
				pageCount={get(incomeList, "meta.pageCount")}
				currentPage={incomeList.page}
				onPageChange={(newPage) => incomeList.setPage(newPage + 1)}
			/>
		</>
	);
};

export default StoreProduct;
