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
					{ link: "/", label: "??????????????" },
					{ link: "/", label: "????????a" },
					{ label: "????????????" },
				]}
				title="????????????"
				btnText={`${cashboxStatus.data ? "??????????????" : "?????????????? ??????????"}  ??????????`}
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
				emptyUiText="?? ?????????????????? ?????????? ?? ?????? ?????? ????????????
							?? ????????????????. ???????????????? ?????????? ??????????,
							?????????? ???????????????? ?????????? ???????????? ?? ??????????"
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "?????????????? (?????? ??????????????????)",
						dataKey: "user",
						render: (value, values) =>
							get(values, "patient_id")
								? get(values, "patient.first_name")
								: get(value, "username"),
					},
					{
						title: "??????????????????????",
						dataKey: "comment",
						render: (value) => value,
					},
					{
						title: "C????????",
						dataKey: "amount",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
					{
						title: "????????????",
						dataKey: "currency",
						render: (value) => getLanguageValue(get(value, "name")),
					},
					{
						title: "???????????? ????????????",
						dataKey: "paymentType",
						render: (value) => getLanguageValue(get(value, "title")),
					},
					{
						title: "????????",
						dataKey: "created_at",
						className: "white-space_no-wrap",
						render: (value) => time.formatTimestamp(value, "DD.MM.YYYY"),
					},
					{
						title: "??????????",
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
				addActionTooltip="?????????????? ????????????"
				removeAction={addOutgo.handleOverlayOpen}
				removeActionTooltip="?????????????? ????????????"
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
