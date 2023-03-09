import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { PaymentTypeModal } from "../components/PaymentTypeModal";

const PaymentType = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "paymentTypeModal", onClose: () => setIsUpdate(false) });

	const paymentTypeList = useFetchList({ url: "/payment-type" });
	const paymentTypeSingle = useFetchOne({
		url: "/payment-type",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const paymentTypeDelete = useDeleteWithConfirm({
		uniqueName: "confirmPaymentTypeDelete",
		url: "/payment-type",
	});

	return (
		<>
			<ConfirmModal
				isOpen={paymentTypeDelete.isOverlayOpen}
				cancelAction={paymentTypeDelete.handleOverlayClose}
				successAction={() => {
					paymentTypeDelete
						.mutateAsync(paymentTypeDelete.id)
						.then(() => paymentTypeList.refetch());
					paymentTypeDelete.handleOverlayClose();
				}}
			/>

			<PaymentTypeModal
				values={isUpdate && paymentTypeSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					paymentTypeList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Способ оплаты" },
				]}
				title="Способ оплаты"
				btnText="Добавить способ оплаты"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={paymentTypeList.isLoading}
				editAction={(paymentType) => {
					setIsUpdate(true);
					paymentTypeSingle.setId(get(paymentType, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(paymentType) => {
					paymentTypeDelete.setId(get(paymentType, "id"));
					paymentTypeDelete.handleOverlayOpen();
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
				items={paymentTypeList.data}
			/>

			<Pagination
				pageCount={get(paymentTypeList, "meta.pageCount")}
				currentPage={paymentTypeList.menu}
				onPageChange={(newPage) => {
					paymentTypeList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default PaymentType;
