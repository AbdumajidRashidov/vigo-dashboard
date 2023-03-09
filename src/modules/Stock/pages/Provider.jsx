import React, { useState } from "react";

import { utils } from "services";
import { useDeleteWithConfirm, useFetchList, useFetchOne, useOverlay } from "hooks";

import { ConfirmModal, ListActions, PageHeading, Pagination, Table } from "components";
import { ProviderModal } from "../components/ProviderModal";
import { get } from "lodash";

const Provider = () => {
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "providerModal", onClose: () => setIsUpdate(false) });

	const providerList = useFetchList({ url: "/provider" });
	const providerSingle = useFetchOne({ url: "/provider", refetchStatus: isUpdate });
	const providerDelete = useDeleteWithConfirm({
		uniqueName: "confirmProviderDelete",
		url: "/provider",
	});

	return (
		<>
			<ConfirmModal
				isOpen={providerDelete.isOverlayOpen}
				cancelAction={providerDelete.handleOverlayClose}
				successAction={() => {
					providerDelete
						.mutateAsync(providerDelete.id)
						.then(() => providerList.refetch());
					providerDelete.handleOverlayClose();
				}}
			/>

			<ProviderModal
				values={isUpdate && providerSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					providerList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Склад" },
					{ label: "Поставщики" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
			/>

			<ListActions
				addAction={modal.handleOverlayOpen}
				addActionTooltip="Создать поставщика"
			/>

			<Table
				isLoading={providerList.isLoading}
				items={providerList.data}
				editAction={(currency) => {
					setIsUpdate(true);
					providerSingle.setId(get(currency, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(currency) => {
					providerDelete.setId(get(currency, "id"));
					providerDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "Название фирмы",
						dataKey: "company_name",
						render: (value) => value,
					},
					{
						title: "Телеграм ID",
						dataKey: "chat_id",
						render: (value) => value,
					},
					{
						title: "Поставщик",
						dataKey: "full_name",
						render: (value) => value,
					},
					{
						title: "Номер телефона",
						dataKey: "phone_number",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatPhoneView(value),
					},
				]}
			/>

			<Pagination
				pageCount={get(providerList, "meta.pageCount")}
				currentPage={providerList.page}
				onPageChange={(newPage) => providerList.setPage(newPage + 1)}
			/>
		</>
	);
};

export default Provider;
