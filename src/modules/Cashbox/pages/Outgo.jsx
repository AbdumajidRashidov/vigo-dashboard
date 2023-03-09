import React, { useState } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

import { userSelector } from "store/selectors";
import { constants, time, utils, adapters } from "services";
import { useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { ListActions, PageHeading, Pagination, Table } from "components";
import { CashboxCash } from "../components/CashboxCash";
import { IncomeFilter } from "../components/IncomeFilter";

const Outgo = () => {
	const user = useSelector(userSelector);
	const { getLanguageValue } = useGetLanguage();
	const [filter, setFilter] = useState({});

	const addOutgo = useOverlay({ uniqueName: "addOutgo" });
	const uploadModal = useOverlay({ uniqueName: "uploadModal" });

	const cashboxStatus = useFetchOne({
		url: `cash-box/${get(user, "cash_box_id")}/check`,
		dataKey: (value) => value,
	});

	const outgoList = useFetchList({
		url: `/cash-box/${get(user, "cash_box_id")}/transactions`,
		urlSearchParams: {
			include: "paymentType,currency,user",
			filter: {
				type: constants.TYPE_OUTGO,
				...filter,
			},
		},
	});

	const outgoTotal = useFetchOne({
		url: "/cash-box/total-price",
		urlSearchParams: {
			filter: {
				type: constants.TYPE_OUTGO,
			},
		},
		dataKey: (value) => value,
	});

	const outgoStatistics = useFetchList({
		url: `/cash-box/${get(user, "cash_box_id")}/payment-type`,
		include: "amount",
		urlSearchParams: {
			include: "amount",
			filter: {
				type: constants.TYPE_OUTGO,
			},
		},
		queryOptions: {
			enabled: !!get(user, "cash_box_id"),
		},
	});

	return (
		<>
			<CashboxCash
				user={user}
				addOutgo={addOutgo}
				uploadModal={uploadModal}
				cashboxId={get(user, "cash_box_id")}
				outgoAddSuccess={() => {
					outgoList.refetch();
					outgoStatistics.refetch();
				}}
			/>
			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Кассa" },
					{ label: "Расход" },
				]}
				title="Расходы"
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
				statistics={adapters.statisticsAdapter(
					outgoStatistics.data,
					(label) => getLanguageValue(get(label, "title")),
					"amount",
					outgoTotal.data
				)}
			/>

			<Table
				filterComponent={<IncomeFilter setFilter={setFilter} />}
				emptyUiText="В настоящее время у вас нет данных	о Расходах."
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Пациент (или сотрудник)",
						dataKey: "user",
						render: (value) => get(value, "username"),
					},
					{
						title: "Комментарий",
						dataKey: "comment",
						render: (value) => value,
					},
					{
						title: "Cумма",
						dataKey: "amount",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
					{
						title: "валюта",
						dataKey: "currency",
						render: (value) => getLanguageValue(get(value, "name")),
					},
					{
						title: "способ оплаты",
						dataKey: "paymentType",
						render: (value) => getLanguageValue(get(value, "title")),
					},
					{
						title: "Дата",
						dataKey: "created_at",
						className: "white-space_no-wrap",
						render: (value) => time.formatTimestamp(value, "DD.MM.YYYY"),
					},
					{
						title: "время",
						dataKey: "created_at",
						className: "white-space_no-wrap",
						render: (value) => time.formatTimestamp(value, "HH:mm:ss"),
					},
				]}
				isLoading={outgoList.isLoading}
				items={outgoList.data}
			/>

			<ListActions
				addAction={uploadModal.handleOverlayOpen}
				addActionTooltip="Создать приход"
				removeAction={addOutgo.handleOverlayOpen}
				removeActionTooltip="Создать расход"
				isAddDisabled={!cashboxStatus.data}
				isRemoveDisabled={!cashboxStatus.data}
			/>

			<Pagination
				pageCount={get(outgoList, "meta.pageCount")}
				onPageChange={(newPage) => outgoList.setPage(newPage + 1)}
				currentPage={outgoList.page}
			/>
		</>
	);
};

export default Outgo;
