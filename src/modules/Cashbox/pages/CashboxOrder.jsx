import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";

import { userSelector } from "store/selectors";
import { constants, time, utils, adapters } from "services";
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

const CashboxOrder = () => {
	const navigate = useNavigate();
	const user = useSelector(userSelector);

	const modal = useOverlay({ uniqueName: "addOrder" });

	const cashboxOrderStatistics = useFetchOne({ url: "/cash-box/order/statistics" });

	const cashboxOrder = useFetchList({
		url: "/order",
		urlSearchParams: {
			include: "provider,user",
			filter: {
				status: [constants.ORDER_IN_PROGRESS, constants.ORDER_PAID, constants.ORDER_DONE],
			},
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
				onSuccess={cashboxOrder.refetch}
				user={user}
			/>

			<ConfirmModal
				isOpen={cancelOrder.isOverlayOpen}
				cancelAction={cancelOrder.handleOverlayClose}
				title="Вы уверены что хотите отиенить заказ"
				successAction={() => {
					cancelOrder.handleOverlayClose();
					cancelOrder
						.mutateAsync(`${cancelOrder.id}/canceled`)
						.then(() => cashboxOrder.refetch());
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
						.then(() => cashboxOrder.refetch());
				}}
				successText="Одобрить"
				cancelAction={approveModal.handleOverlayClose}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Касса" },
					{ label: "Заказы в ожидании" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
				statistics={adapters.orderAdapter(cashboxOrderStatistics.data)}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных о Должниках."
				isLoading={cashboxOrder.isLoading}
				onRowClick={(order) => navigate(`/cashbox/order/${get(order, "id")}`)}
				isButtonsVisible={(row) => get(row, "status") === constants.ORDER_IN_PROGRESS}
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
				items={cashboxOrder.data}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Добавить заказ" />

			<Pagination
				pageCount={get(cashboxOrder, "meta.pageCount")}
				onPageChange={(newPage) => cashboxOrder.setPage(newPage + 1)}
				currentPage={cashboxOrder.page}
			/>
		</>
	);
};

export default CashboxOrder;
