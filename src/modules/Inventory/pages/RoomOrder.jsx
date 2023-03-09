import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";

import { userSelector } from "store/selectors";
import { time, utils, adapters } from "services";
import { useFetchList, useFetchOne, useOverlay } from "hooks";

import { ListActions, PageHeading, Pagination, Status, Table, CreateOrderModal } from "components";

const RoomOrder = () => {
	const navigate = useNavigate();
	const user = useSelector(userSelector);
	const modal = useOverlay({ uniqueName: "addOrder" });

	const roomStatistics = useFetchOne({ url: "/order/inventory/statistics" });

	const roomOrder = useFetchList({
		url: "/order",
		urlSearchParams: {
			include: "provider,user",
			filter: {
				type: 1,
			},
		},
	});

	return (
		<>
			<CreateOrderModal
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				onSuccess={roomOrder.refetch}
				user={user}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Инвентарь" },
					{ label: "Заказы" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
				statistics={adapters.orderAdapter(roomStatistics.data)}
			/>

			<Table
				emptyUiText="В настоящее время у вас нет данных
					о Должниках."
				isLoading={roomOrder.isLoading}
				onRowClick={(order) => navigate(`/inventory/order/${get(order, "id")}`)}
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
						render: (value) => <Status type="danger" message="не оплаченный" />,
					},
				]}
				items={roomOrder.data}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Добавить заказ" />

			<Pagination pageCount={get(roomOrder, "meta.pageCount")} />
		</>
	);
};

export default RoomOrder;
