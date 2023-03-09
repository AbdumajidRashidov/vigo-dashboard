import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "lodash";

import { useFetchList, useOverlay } from "hooks";

import { Button, ListActions, PageHeading, Pagination, Table } from "components";
import { RemoveProductModal } from "../components/RemoveProductModal";
import { RoomAddProductModal } from "../components/RoomAddProductModal";

import { ReactComponent as RemoveProduct } from "assets/icons/removeProduct.svg";

const RoomSingle = () => {
	const { roomId } = useParams();
	const [productId, setProductId] = useState();

	const modal = useOverlay({ uniqueName: "removeProductModal" });
	const addProductModal = useOverlay({ uniqueName: "addProduct" });

	const roomProductsList = useFetchList({
		url: "/room-product",
		urlSearchParams: {
			include: "product",
			filter: {
				room_id: roomId,
			},
		},
	});

	return (
		<>
			<RoomAddProductModal
				roomId={roomId}
				onSuccess={roomProductsList.refetch}
				handleModalClose={addProductModal.handleOverlayClose}
				isOpen={addProductModal.isOverlayOpen}
			/>

			<RemoveProductModal
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				onSuccess={roomProductsList.refetch}
				productId={productId}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Инвентарь" },
					{ link: "/inventory/room", label: "Инвентари в кабинетах" },
					{ label: "Инвентари" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				searchAction={() => {}}
			/>

			<Table
				isLoading={roomProductsList.isLoading}
				columns={[
					{
						title: "Номер",
						dataKey: "code",
						className: "w_150",
						render: (value) => value,
					},
					{
						title: "Имя",
						dataKey: "product",
						render: (value) => get(value, "title"),
					},
				]}
				items={roomProductsList.data}
				renderButtons={(roomProduct, handleMenuClose) => (
					<Button
						className="btn drop-down__btn table__actions-delete"
						prepend={<RemoveProduct />}
						text="Списать"
						onClick={() => {
							setProductId(get(roomProduct, "id"));
							handleMenuClose();
							modal.handleOverlayOpen();
						}}
					/>
				)}
			/>

			<ListActions
				addAction={addProductModal.handleOverlayOpen}
				addActionTooltip="Добавить инвентарь"
			/>

			<Pagination pageCount={get(roomProductsList, "meta.pageCount")} />
		</>
	);
};

export default RoomSingle;
