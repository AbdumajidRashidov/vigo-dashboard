import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";
import {
	Card,
	ConfirmModal,
	ListActions,
	PageHeading,
	Pagination,
	Spinning,
	TableNoData,
} from "components";
import { RoomModal } from "../components/RoomModal";

const Room = () => {
	const [test, setTest] = useState();
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "storeModal", onClose: () => setIsUpdate(false) });

	const roomList = useFetchList({
		url: "/room",
	});
	const RoomSingle = useFetchOne({
		url: "/room",
		urlSearchParams: {
			include: "products.stockProduct.product",
		},
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const roomDelete = useDeleteWithConfirm({
		uniqueName: "confirmRoomDelete",
		url: "/room",
	});

	return (
		<>
			<ConfirmModal
				isOpen={roomDelete.isOverlayOpen}
				cancelAction={roomDelete.handleOverlayClose}
				successAction={() => {
					roomDelete.mutateAsync(roomDelete.id).then(() => roomList.refetch());
					roomDelete.handleOverlayClose();
				}}
			/>

			<RoomModal
				values={isUpdate && RoomSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					roomList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Инвентарь" },
					{ label: "Кабинеты" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				searchAction={() => {}}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Создать кабинет" />

			<div className="row g-4">
				<Spinning entity={roomList.data} fallback={<TableNoData />}>
					{roomList.data?.map((room, index) => (
						<div key={room.id} className="col-6">
							<Card
								link={`/inventory/room/${room.id}`}
								title={getLanguageValue(get(room, "title"))}
								icon={room.number}
								item={room}
								editAction={(room) => {
									setIsUpdate(true);
									RoomSingle.setId(get(room, "id"));
									modal.handleOverlayOpen();
								}}
								deleteAction={(room) => {
									roomDelete.setId(get(room, "id"));
									roomDelete.handleOverlayOpen();
								}}
							/>
						</div>
					))}
				</Spinning>
			</div>

			<Pagination pageCount={get(roomList, "meta.pageCount")} />
		</>
	);
};

export default Room;
