import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { constants } from "services";

import Containers from "containers";
import { ModalDefault, Fields, Button, Typography } from "components";

import { ReactComponent as AddIcon } from "assets/icons/add-item.svg";

export const RoomAddProductModal = ({ isOpen, handleModalClose, roomId, onSuccess }) => {
	const handleRemoveProduct = (selectedIndex, roomProducts, setFieldValue) => {
		const newRoomProducts = roomProducts.filter((item, index) => index !== selectedIndex);
		setFieldValue("roomProducts", newRoomProducts);
	};

	const handleAddProduct = (roomProducts, setFieldValue) => {
		const newRoomProduct = {
			product_id: "",
			stock_product_id: "",
			code: "",
		};
		setFieldValue("roomProducts", [...roomProducts, newRoomProduct]);
	};

	return (
		<ModalDefault
			innerClass="max-width_700"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title="Добавить инвентарь"
		>
			<Containers.Form
				url={`/room/${roomId}/product`}
				method="post"
				onSuccess={() => {
					onSuccess();
					handleModalClose();
				}}
				fields={[
					{
						name: "roomProducts",
						validationType: "array",
						value: [
							{
								stock_product_id: "",
								product_id: "",
								code: "",
							},
						],
						lazy: (validator, yup) =>
							validator.of(
								yup.object().shape({
									stock_product_id: yup.object(),
									product_id: yup.number(),
									code: yup.string(),
								})
							),
						onSubmitValue: (value) =>
							value.map((item) => ({
								stock_product_id: get(item, "stock_product_id.id"),
								product_id: item.product_id,
								code: item.code,
							})),
					},
				]}
			>
				{({ isSubmitting, values, setFieldValue }) => (
					<>
						<RoomProducts
							roomProducts={values.roomProducts}
							setFieldValue={setFieldValue}
							onRemove={(selectedIndex) =>
								handleRemoveProduct(
									selectedIndex,
									values.roomProducts,
									setFieldValue
								)
							}
						/>

						<Button
							className="add-item mt_20 mx_auto"
							append={<AddIcon />}
							onClick={(event) =>
								handleAddProduct(values.roomProducts, setFieldValue)
							}
						/>

						<Button
							design="primary"
							type="submit"
							className="modal-btn fz_16 btn mt_40"
							text="Сохранить"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
		</ModalDefault>
	);
};

const RoomProducts = ({ roomProducts, onRemove, setFieldValue }) =>
	roomProducts.map((roomProduct, index) => (
		<div key={index} className="mt_40">
			<div className="d-flex align-items-center justify-content-between mb_20">
				<Typography
					Type="span"
					className="color_brand-blue product__btn"
					text={`${index + 1}-ПРЕДМЕТ`}
				/>

				{index !== 0 && (
					<Button
						className="color_primary-red product__btn"
						text="Удалить"
						onClick={(event) => onRemove(index, event)}
					/>
				)}
			</div>

			<div key={index} className="row g-4">
				<div className="col-6">
					<FastField
						name={`roomProducts.${index}.stock_product_id`}
						component={Fields.AsyncSelect}
						label="Продукт"
						placeholder="продукт"
						loadOptionsUrl="/stock-product"
						loadOptionsParams={(search) => ({
							filter: {
								type: constants.STORE_INVENTORY,
							},
							include: "product",
						})}
						onValueChange={(option) =>
							setFieldValue(
								`roomProducts.${index}.product_id`,
								get(option, "product_id")
							)
						}
						getOptionLabel="product.title"
					/>
				</div>

				<div className="col-6">
					<FastField
						name={`roomProducts.${index}.code`}
						component={Fields.InputNumber}
						label="Номер"
						placeholder="номер"
					/>
				</div>
			</div>
		</div>
	));
