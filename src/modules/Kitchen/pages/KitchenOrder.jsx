import React from "react";
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

const KitchenOrder = () => {
	const navigate = useNavigate();
	const user = useSelector(userSelector);
	const modal = useOverlay({ uniqueName: "addOrder" });

	const kitchenOrderStatistics = useFetchOne({ url: "/kitchen-menu/statistics" });

	const kitchenOrderList = useFetchList({
		url: "/order",
		urlSearchParams: {
			include: "provider,user",
			filter: {
				type: constants.STORE_KITCHEN,
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
			<CreateOrderModal
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				onSuccess={kitchenOrderList.refetch}
				user={user}
				orderType={constants.STORE_KITCHEN}
			/>

			<ConfirmModal
				isOpen={cancelOrder.isOverlayOpen}
				cancelAction={cancelOrder.handleOverlayClose}
				title="Вы уверены что хотите отиенить заказ"
				successAction={() => {
					cancelOrder.handleOverlayClose();
					cancelOrder
						.mutateAsync(`${cancelOrder.id}/canceled`)
						.then(() => kitchenOrderList.refetch());
				}}
				successText="Отменить"
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Кухня" },
					{ label: "Заказы" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
				statistics={adapters.orderAdapter(kitchenOrderStatistics.data)}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных о Должниках."
				isLoading={kitchenOrderList.isLoading}
				onRowClick={(order) => navigate(`/kitchen/order/${get(order, "id")}`)}
				renderButtons={(row, handleMenuClose) => (
					<OrderButtons
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
				items={kitchenOrderList.data}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Добавить заказ" />

			<Pagination
				pageCount={get(kitchenOrderList, "meta.pageCount")}
				currentPage={kitchenOrderList.menu}
				onPageChange={(newPage) => {
					kitchenOrderList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default KitchenOrder;
