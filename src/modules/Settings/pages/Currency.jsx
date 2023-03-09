import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { CurrencyModal } from "../components/CurrencyModal";

const Currency = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "currencyModal", onClose: () => setIsUpdate(false) });

	const currencyList = useFetchList({ url: "/currency" });
	const currencySingle = useFetchOne({
		url: "/currency",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const currencyDelete = useDeleteWithConfirm({
		uniqueName: "confirmCurrencyDelete",
		url: "/currency",
	});

	return (
		<>
			<ConfirmModal
				isOpen={currencyDelete.isOverlayOpen}
				cancelAction={currencyDelete.handleOverlayClose}
				successAction={() => {
					currencyDelete
						.mutateAsync(currencyDelete.id)
						.then(() => currencyList.refetch());
					currencyDelete.handleOverlayClose();
				}}
			/>

			<CurrencyModal
				values={isUpdate && currencySingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					currencyList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Валюта" },
				]}
				title="Валюта"
				btnText="Добавить Валюту"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={currencyList.isLoading}
				editAction={(currency) => {
					setIsUpdate(true);
					currencySingle.setId(get(currency, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(currency) => {
					currencyDelete.setId(get(currency, "id"));
					currencyDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Имя",
						dataKey: "name",
						render: (value) => getLanguageValue(value),
					},
					{
						title: "Код",
						dataKey: "short_name",
						render: (value) => value,
					},
				]}
				items={currencyList.data}
			/>

			<Pagination
				pageCount={get(currencyList, "meta.pageCount")}
				currentPage={currencyList.menu}
				onPageChange={(newPage) => {
					currencyList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Currency;
