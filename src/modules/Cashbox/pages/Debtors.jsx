import React from "react";
import { get } from "lodash";

import { time, utils, adapters } from "services";
import { useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Pagination, Table } from "components";
import { AddDebtorModal } from "../components/AddDebtorModal";

const Debtors = () => {
	const { getLanguageValue } = useGetLanguage();
	const addDebtor = useOverlay({ uniqueName: "addDebtor" });

	const debtorStatistics = useFetchOne({ url: "/debtor/statistics" });

	const debtorList = useFetchList({
		url: "/debtor",
		urlSearchParams: {
			include: "patient,currency,user",
		},
	});

	return (
		<>
			<AddDebtorModal
				isOpen={addDebtor.isOverlayOpen}
				handleOverlayOpen={addDebtor.handleOverlayOpen}
				handleOverlayClose={addDebtor.handleOverlayClose}
				onAddedNewRecord={() => {
					debtorList.refetch();
					debtorStatistics.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Кассa" },
					{ label: "Должники" },
				]}
				title="Должники"
				btnText="Добавить Должника"
				mainAction={addDebtor.handleOverlayOpen}
				statistics={adapters.debtorAdapter(debtorStatistics.data)}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных о Должниках."
				isLoading={debtorList.isLoading}
				columns={[
					{
						title: "Дата",
						dataKey: "created_at",
						className: "white-space_no-wrap",
						render: (value) => time.formatTimestamp(value, "DD.MM.YYYY"),
					},
					{
						title: "ID пациента",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Пациент",
						className: "white-space_no-wrap",
						dataKey: "patient",
						render: (value) =>
							`${get(value, "first_name", "")} ${get(value, "last_name", "")}`,
					},
					{
						title: "Сумма Долга",
						dataKey: "amount",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
					{
						title: "Валюта",
						dataKey: "currency",
						render: (value) => getLanguageValue(get(value, "name")),
					},
					{
						title: "Номер телефона",
						dataKey: "patient",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatPhoneView(get(value, "phone")),
					},
					{
						title: "Ответственный",
						dataKey: "user",
						render: (value) => get(value, "username"),
					},
					{
						title: "Комментарий",
						dataKey: "comment",
						render: (value) => value,
					},
					{
						title: "Степень знакомства",
						dataKey: "degree",
						render: (value) => utils.formatters.showDegree(value),
					},
					{
						title: "Дата Выплаты",
						dataKey: "expired_at",
						className: "white-space_no-wrap",
						render: (value) => time.formatTimestamp(value, "DD.MM.YYYY"),
					},
				]}
				items={debtorList.data}
			/>

			<Pagination
				currentPage={debtorList.page}
				pageCount={get(debtorList, "meta.pageCount")}
				onPageChange={(newPage) => debtorList.setPage(newPage + 1)}
			/>
		</>
	);
};

export default Debtors;
