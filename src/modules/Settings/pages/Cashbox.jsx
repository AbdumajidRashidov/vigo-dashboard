import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { CashboxModal } from "../components/CashboxModal";

const Cashbox = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "cashboxModal", onClose: () => setIsUpdate(false) });

	const cashboxList = useFetchList({ url: "/cash-box" });
	const cashboxSingle = useFetchOne({
		url: "/cash-box",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const cashboxDelete = useDeleteWithConfirm({
		uniqueName: "confirmCashboxDelete",
		url: "/cash-box",
	});

	return (
		<>
			<ConfirmModal
				isOpen={cashboxDelete.isOverlayOpen}
				cancelAction={cashboxDelete.handleOverlayClose}
				successAction={() => {
					cashboxDelete.mutateAsync(cashboxDelete.id).then(() => cashboxList.refetch());
					cashboxDelete.handleOverlayClose();
				}}
			/>

			<CashboxModal
				values={isUpdate && cashboxSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					cashboxList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Касса" },
				]}
				title="Кассы"
				btnText="Добавить кассу"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={cashboxList.isLoading}
				editAction={(cashbox) => {
					setIsUpdate(true);
					cashboxSingle.setId(get(cashbox, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(cashbox) => {
					cashboxDelete.setId(get(cashbox, "id"));
					cashboxDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Имя",
						dataKey: "title",
						render: (value) => getLanguageValue(value),
					},
				]}
				items={cashboxList.data}
			/>

			<Pagination
				pageCount={get(cashboxList, "meta.pageCount")}
				currentPage={cashboxList.menu}
				onPageChange={(newPage) => {
					cashboxList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Cashbox;
