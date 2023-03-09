import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";

import { userSelector } from "store/selectors";
import { adapters, constants, time, utils } from "services";
import { useDeleteWithConfirm, useFetchList, useFetchOne, useOverlay } from "hooks";

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
import { SupplyOrderApproveModal } from "../components/SupplyOrderApproveModal";

const SupplyOrder = () => {
	const navigate = useNavigate();
	const user = useSelector(userSelector);
	const [selectedOrderId, setSelectedOrderId] = useState();

	const modal = useOverlay({ uniqueName: "addOrder" });
	const approveModal = useOverlay({ uniqueName: "approveSupplyModal" });

	const supplyStatistics = useFetchOne({ url: "/order/supplies/statistics" });

	const supplyOrder = useFetchList({
		url: "/order",
		urlSearchParams: {
			include: "provider,user",
			filter: {
				type: constants.STORE_INVENTORY,
			},
		},
	});

	const cancelOrder = useDeleteWithConfirm({
		uniqueName: "cancelOrderConfirm",
		url: "/order",
		method: "POST",
	});

	return (
		<>
			<ConfirmModal
				isOpen={cancelOrder.isOverlayOpen}
				cancelAction={cancelOrder.handleOverlayClose}
				title="Вы уверены что хотите отиенить заказ"
				successAction={() => {
					cancelOrder.handleOverlayClose();
					cancelOrder
						.mutateAsync(`${cancelOrder.id}/canceled`)
						.then(() => supplyOrder.refetch());
					supplyStatistics.refetch();
				}}
				successText="Отменить"
			/>

			<CreateOrderModal
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				onSuccess={() => {
					supplyOrder.refetch();
					supplyStatistics.refetch();
				}}
				user={user}
			/>

			<SupplyOrderApproveModal
				isOpen={approveModal.isOverlayOpen}
				handleModalClose={approveModal.handleOverlayClose}
				onSuccess={() => {
					supplyOrder.refetch();
					supplyStatistics.refetch();
				}}
				orderId={selectedOrderId}
				username={get(user, "username")}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Снабжение" },
					{ label: "Новые заказы" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
				statistics={adapters.orderAdapter(supplyStatistics.data)}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных о Должниках."
				isLoading={supplyOrder.isLoading}
				onRowClick={(order) => navigate(`/supply/order/${get(order, "id")}`)}
				isButtonsVisible={(row) => get(row, "status") === constants.ORDER_PENDING}
				renderButtons={(row, handleMenuClose) => (
					<OrderButtons
						onApprove={() => {
							handleMenuClose();
							setSelectedOrderId(get(row, "id"));
							approveModal.handleOverlayOpen();
						}}
						onCancel={() => {
							handleMenuClose();
							cancelOrder.handleOverlayOpen();
							cancelOrder.setId(get(row, "id"));
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
				items={supplyOrder.data}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Добавить заказ" />

			<Pagination
				pageCount={get(supplyOrder, "meta.pageCount")}
				currentPage={supplyOrder.page}
				onPageChange={(newPage) => supplyOrder.setPage(newPage + 1)}
			/>
		</>
	);
};

export default SupplyOrder;
