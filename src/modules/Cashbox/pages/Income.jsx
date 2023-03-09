import React, { useState } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

import { constants, time, utils, adapters } from "services";
import { userSelector } from "store/selectors";
import { useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { Table, PageHeading, Pagination, ListActions } from "components";
import { CashboxCloseModal } from "../components/CashboxCloseModal";
import { CashboxOpenModal } from "../components/CashboxOpenModal";
import { CashboxCash } from "../components/CashboxCash";
import { IncomeFilter } from "../components/IncomeFilter";

const Income = () => {
	const user = useSelector(userSelector);
	const { getLanguageValue } = useGetLanguage();
	const [cashboxId, setCashboxId] = useState(get(user, "cash_box_id"));
	const [filter, setFilter] = useState({});

	const cashboxOpenModal = useOverlay({ uniqueName: "incomeOpen" });
	const cashboxCloseModal = useOverlay({ uniqueName: "cashboxCloseModal" });
	const uploadModal = useOverlay({ uniqueName: "uploadModal" });
	const addOutgo = useOverlay({ uniqueName: "addOutgo" });

	const cashboxStatus = useFetchOne({
		url: `cash-box/${cashboxId}/check`,
		dataKey: (value) => value,
	});

	const incomeList = useFetchList({
		url: `/cash-box/${cashboxId}/transactions`,
		urlSearchParams: {
			include: "paymentType,currency,user,patient",
			filter: {
				type: constants.TYPE_INCOME,
				...filter,
			},
		},
	});

	const incomeTotal = useFetchOne({
		url: "/cash-box/total-price",
		urlSearchParams: {
			filter: {
				type: constants.TYPE_INCOME,
			},
		},
		dataKey: (value) => value,
	});

	const incomeStatistics = useFetchList({
		url: `/cash-box/${cashboxId}/payment-type`,
		urlSearchParams: {
			include: "amount",
			filter: {
				type: constants.TYPE_INCOME,
			},
		},
	});

	const cashboxList = useFetchList({
		url: "/cash-box",
		urlSearchParams: {
			include: "isOpen",
		},
		queryOptions: {
			enabled: cashboxOpenModal.isOverlayOpen,
		},
	});

	return (
		<>
			<CashboxOpenModal
				isOpen={cashboxOpenModal.isOverlayOpen}
				handleModalClose={cashboxOpenModal.handleOverlayClose}
				onSuccess={() => {
					cashboxStatus.refetch();
					incomeStatistics.refetch();
					incomeList.refetch();
					incomeTotal.refetch();
				}}
				username={get(user, "username")}
				position={getLanguageValue(get(user, "position.title"))}
				cashboxId={cashboxId}
				cashboxList={cashboxList}
				onCashboxIdChange={(newValue) => setCashboxId(newValue)}
			/>

			<CashboxCloseModal
				isOpen={cashboxCloseModal.isOverlayOpen}
				handleModalClose={cashboxCloseModal.handleOverlayClose}
				onSuccess={() => {
					cashboxStatus.refetch();
					incomeStatistics.refetch();
					incomeList.refetch();
					incomeTotal.refetch();
					cashboxList.refetch();
				}}
				username={get(user, "username")}
				position={getLanguageValue(get(user, "position.title"))}
				cashboxId={cashboxId}
			/>

			<CashboxCash
				username={get(user, "username")}
				position={getLanguageValue(get(user, "position.title"))}
				addOutgo={addOutgo}
				cashboxId={cashboxId}
				uploadModal={uploadModal}
				incomeModalSuccess={() => {
					incomeList.refetch();
					incomeStatistics.refetch();
					incomeTotal.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Кассa" },
					{ label: "Приход" },
				]}
				title="Приход"
				btnText={`${cashboxStatus.data ? "Закрыть" : "Открыть новую"}  смену`}
				mainAction={
					cashboxStatus.data
						? cashboxCloseModal.handleOverlayOpen
						: cashboxOpenModal.handleOverlayOpen
				}
				statistics={adapters.statisticsAdapter(
					incomeStatistics.data,
					(label) => getLanguageValue(get(label, "title")),
					"amount",
					incomeTotal.data
				)}
			/>

			<Table
				filterComponent={<IncomeFilter setFilter={setFilter} />}
				emptyUiText="В настоящее время у вас нет данных
							о Приходах. Откройте новую смену,
							чтобы добавить новый приход в кассу"
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Пациент (или сотрудник)",
						dataKey: "user",
						render: (value, values) =>
							get(values, "patient_id")
								? get(values, "patient.first_name")
								: get(value, "username"),
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
				isLoading={incomeList.isLoading}
				items={incomeList.data}
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
				currentPage={incomeList.page}
				pageCount={get(incomeList, "meta.pageCount")}
				onPageChange={(newPage) => {
					incomeList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Income;
