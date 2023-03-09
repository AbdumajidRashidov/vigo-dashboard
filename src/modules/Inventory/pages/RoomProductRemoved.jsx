import React from "react";
import { get } from "lodash";

import { useFetchList, useGetLanguage } from "hooks";

import { PageHeading, Pagination, Table } from "components";

const RoomProductRemoved = () => {
	const { getLanguageValue } = useGetLanguage();
	const removedProductsList = useFetchList({
		url: "/room-product/removed-list",
		urlSearchParams: {
			include: "product,room,removedWrite",
		},
	});

	return (
		<>
			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Инвентарь" },
					{ label: "Списанные продукты" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
				statistics={[
					{
						label: "Общая Сумма:",
						value: "3 470 000",
					},
					{
						label: "Наличные:",
						value: "1 470 000",
					},
					{
						label: "Терминал:",
						value: "2 000 000",
					},
					{
						label: "Средняя цена продуктов",
						value: "80 000",
					},
					{
						label: "Количество продуктов",
						value: "45",
					},
				]}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных."
				isLoading={removedProductsList.isLoading}
				columns={[
					{
						title: "Номер",
						className: "w_150",
						dataKey: "code",
						render: (value) => value,
					},
					{
						title: "Продукт",
						dataKey: "product",
						render: (value) => get(value, "title"),
					},
					{
						title: "Кабинет",
						dataKey: "room",
						render: (value) => getLanguageValue(get(value, "title")),
					},
					{
						title: "Причина",
						dataKey: "removedWrite",
						render: (value) => get(value, "reason"),
					},
				]}
				items={removedProductsList.data}
			/>

			<Pagination pageCount={get(removedProductsList, "meta.pageCount")} />
		</>
	);
};

export default RoomProductRemoved;
