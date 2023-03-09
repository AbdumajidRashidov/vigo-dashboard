import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { ConfirmModal, ListActions, PageHeading, Pagination, Table } from "components";
import { ProductModal } from "../components/ProductModal";

const Product = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "productModal", onClose: () => setIsUpdate(false) });

	const productList = useFetchList({
		url: "/product",
		urlSearchParams: { include: "category,manufacturer,measure" },
	});
	const productSingle = useFetchOne({
		url: "/product",
		urlSearchParams: { include: "category,manufacturer,measure" },
		refetchStatus: isUpdate,
	});
	const productDelete = useDeleteWithConfirm({
		uniqueName: "confirmProductDelete",
		url: "/product",
	});

	return (
		<>
			<ConfirmModal
				isOpen={productDelete.isOverlayOpen}
				cancelAction={productDelete.handleOverlayClose}
				successAction={() => {
					productDelete.mutateAsync(productDelete.id).then(() => productList.refetch());
					productDelete.handleOverlayClose();
				}}
			/>

			<ProductModal
				values={isUpdate && productSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					productList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Склад" },
					{ label: "Продукт" },
				]}
				filterAction={() => {}}
				sortAction={() => {}}
				dateAction={() => {}}
				searchAction={() => {}}
			/>

			<ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Создать продукт" />

			<Table
				isLoading={productList.isLoading}
				items={productList.data}
				editAction={(product) => {
					setIsUpdate(true);
					productSingle.setId(get(product, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(product) => {
					productDelete.setId(get(product, "id"));
					productDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "Продукт",
						dataKey: "title",
						render: (value) => value,
					},
					{
						title: "Категория",
						dataKey: "category",
						render: (value) => getLanguageValue(get(value, "title")),
					},
					{
						title: "Производитель",
						dataKey: "manufacturer",
						render: (value) => get(value, "title"),
					},
					{
						title: "Единица измерения",
						dataKey: "measure",
						render: (value) => getLanguageValue(get(value, "name")),
					},
				]}
			/>

			<Pagination
				pageCount={get(productList, "meta.pageCount")}
				currentPage={productList.menu}
				onPageChange={(newPage) => {
					productList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Product;
