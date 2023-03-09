import React from "react";
import { useParams } from "react-router-dom";
import { get } from "lodash";

import { utils } from "services";
import { useFetchList, useGetLanguage } from "hooks";

import { PageHeading, Pagination, Table } from "components";

const CashboxOrderSingle = () => {
	const { orderId } = useParams();
	const { getLanguageValue } = useGetLanguage();

	const orderSingle = useFetchList({
		url: `/order/${orderId}`,
		urlSearchParams: {
			include: "items.product.measure",
		},
	});

	return (
		<>
			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Касса" },
					{ link: "/cashbox/order", label: "Заказы" },
					{ label: `Заказ №${orderId}` },
				]}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных о Заказе."
				isLoading={orderSingle.isLoading}
				columns={[
					{
						title: "Наименование",
						dataKey: "product",
						className: "w_180",
						render: (value) => get(value, "title"),
					},
					{
						title: "Количество",
						dataKey: "quantity",
						className: "w_180",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
					{
						title: "Мера Измерения",
						dataKey: "product",
						className: "w_180",
						render: (value) => getLanguageValue(get(value, "measure.name")),
					},
					{
						title: "Цена",
						dataKey: "price",
						className: "w_180",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
				]}
				items={get(orderSingle.data, "items")}
			/>

			<Pagination
				pageCount={get(orderSingle, "meta.pageCount")}
				onPageChange={(newPage) => orderSingle.setPage(newPage + 1)}
				currentPage={orderSingle.page}
			/>
		</>
	);
};

export default CashboxOrderSingle;
