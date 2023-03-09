import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import {
	PageHeading,
	ConfirmModal,
	ListActions,
	Pagination,
	Spinning,
	TableNoData,
	Card,
} from "components";
import { StoreModal } from "../components/StoreModal";

const Store = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "storeModal", onClose: () => setIsUpdate(false) });

	const storeList = useFetchList({
		url: "/stock",
		urlSearchParams: {
			include: "icon",
		},
	});
	const storeSingle = useFetchOne({
		url: "/stock",
		urlSearchParams: {
			include: "file",
		},
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const storeDelete = useDeleteWithConfirm({
		uniqueName: "confirmStoreDelete",
		url: "/stock",
	});

	return (
		<>
			<ConfirmModal
				isOpen={storeDelete.isOverlayOpen}
				cancelAction={storeDelete.handleOverlayClose}
				successAction={() => {
					storeDelete.mutateAsync(storeDelete.id).then(() => storeList.refetch());
					storeDelete.handleOverlayClose();
				}}
			/>

			<StoreModal
				values={isUpdate && storeSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					storeList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Склад" },
					{ label: "Склад" },
				]}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Создать склад" />

			<div className="row g-4">
				<Spinning entity={storeList.data} fallback={<TableNoData />}>
					{storeList.data?.map((store, index) => (
						<div key={store.id} className="col-6">
							<Card
								link={`/stock/store/${store.id}`}
								title={getLanguageValue(get(store, "title"))}
								icon={store.file}
								item={store}
								editAction={(store) => {
									setIsUpdate(true);
									storeSingle.setId(get(store, "id"));
									modal.handleOverlayOpen();
								}}
								deleteAction={(store) => {
									storeDelete.setId(get(store, "id"));
									storeDelete.handleOverlayOpen();
								}}
							/>
						</div>
					))}
				</Spinning>
			</div>

			<Pagination
				pageCount={get(storeList, "meta.pageCount")}
				currentPage={storeList.page}
				onPageChange={(newPage) => storeList.setPage(newPage + 1)}
			/>
		</>
	);
};

export default Store;
