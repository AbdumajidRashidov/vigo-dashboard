import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";

import { userSelector } from "store/selectors";
import { constants, time, utils, adapters } from "services";
import { useDeleteWithConfirm, useFetchList, useOverlay } from "hooks";

import {
	ListActions,
	PageHeading,
	Pagination,
	Status,
	Table,
	CreateOrderModal,
	OrderButtons,
	ConfirmModal,
} from "components";

const StoreOrder = () => {
	const navigate = useNavigate();
	const user = useSelector(userSelector);
	const modal = useOverlay({ uniqueName: "addOrder" });

	const storeStatistics = useFetchList({
		url: "/stock/statistics",
		urlSearchParams: {
			include: "paymentType",
		},
	});

	const storeOrder = useFetchList({
		url: "/order",
		urlSearchParams: {
			include: "provider,user",
		},
	});

	const cancelOrder = useDeleteWithConfirm({
		uniqueName: "cancelOrderConfirm",
		url: "/order",
		method: "POST",
	});

	const approveModal = useDeleteWithConfirm({
		uniqueName: "approveOrderConfirm",
		url: "/order",
		method: "POST",
	});

	return (
		<>
			<CreateOrderModal
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				onSuccess={storeOrder.refetch}
				user={user}
				orderType={2}
			/>

			<ConfirmModal
				isOpen={cancelOrder.isOverlayOpen}
				cancelAction={cancelOrder.handleOverlayClose}
				title="Вы уверены что хотите отиенить заказ"
				successAction={() => {
					cancelOrder.handleOverlayClose();
					cancelOrder
						.mutateAsync(`${cancelOrder.id}/canceled`)
						.then(() => storeOrder.refetch());
				}}
				successText="Отменить"
			/>

			<ConfirmModal
				isOpen={approveModal.isOverlayOpen}
				title="Вы уверены что хотите одобрить заказ"
				successAction={() => {
					approveModal.handleOverlayClose();
					approveModal
						.mutateAsync(`${approveModal.id}/approved`)
						.then(() => storeOrder.refetch());
				}}
				successText="Одобрить"
				cancelAction={approveModal.handleOverlayClose}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Склад" },
					{ label: "Заказы" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
				statistics={adapters.storeOrderAdapter(storeStatistics.data)}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных о Должниках."
				isLoading={storeOrder.isLoading}
				onRowClick={(order) => navigate(`/stock/order/${get(order, "id")}`)}
				isButtonsVisible={(row) => get(row, "status") === constants.ORDER_PAID}
				renderButtons={(row, handleMenuClose) => (
					<OrderButtons
						onApprove={() => {
							handleMenuClose();
							approveModal.setId(get(row, "id"));
							approveModal.handleOverlayOpen();
						}}
						onCancel={() => {
							handleMenuClose();
							cancelOrder.setId(get(row, "id"));
							cancelOrder.handleOverlayOpen();
						}}
					/>
				)}
				columns={[
					{
						title: "Номер Заказа",
						dataKey: "id",
						className: "white-space_no-wrap",
						render: (value) => value,
					},
					{
						title: "Дата заказа",
						dataKey: "created_at",
						render: (value) => time.formatTimestamp(value),
					},
					{
						title: "ФИО поставщика",
						dataKey: "provider",
						render: (value) => get(value, "full_name"),
					},
					{
						title: "Сумма",
						dataKey: "total_price",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatCurrencyView(value),
					},
					{
						title: "Кассир",
						dataKey: "user",
						render: (value) => get(value, "username"),
					},
					{
						title: "Срок оплаты",
						dataKey: "expired_at",
						className: "white-space_no-wrap",
						render: (value) => time.formatTimestamp(value),
					},
					{
						title: "статус",
						dataKey: "status",
						render: (value) => (
							<Status
								type={utils.formatters.getOrderTypeClass(value)}
								message={utils.formatters.showOrderType(value)}
							/>
						),
					},
				]}
				items={storeOrder.data}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Добавить заказ" />

			<Pagination
				pageCount={get(storeOrder, "meta.pageCount")}
				currentPage={storeOrder.page}
				onPageChange={(newPage) => storeOrder.setPage(newPage + 1)}
			/>
		</>
	);
};

export default StoreOrder;
