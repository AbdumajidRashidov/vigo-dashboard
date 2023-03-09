import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { constants, utils, adapters } from "services";
import config from "config";

import Containers from "containers";
import { ModalDefault, Fields, Button, TabBase, FileUpload } from "components";
import { FoodList } from "./FoodList";
import { ProductList } from "./ProductList";

export const KitchenMenuModal = ({
	isOpen,
	handleModalClose,
	onSuccess,
	isUpdate,
	user,
	values,
}) => {
	const [tabLng, setTabLng] = useState("uz");

	useEffect(() => {
		setTabLng("uz");
	}, [isOpen]);

	const handleAddFood = (food, setFieldValue) => {
		const newFood = {
			food_id: "",
			quantity: "",
		};

		setFieldValue("foods", [...food, newFood]);
	};

	const handleRemoveFood = (selectedIndex, food, setFieldValue) => {
		const newFood = food.filter((item, index) => index !== selectedIndex);
		setFieldValue("foods", newFood);
	};

	const handleAddProduct = (products, setFieldValue) => {
		const newProduct = {
			product_id: "",
			quantity: "",
		};

		setFieldValue("products", [...products, newProduct]);
	};

	const handleRemoveProduct = (selectedIndex, product, setFieldValue) => {
		const newProducts = product.filter((item, index) => index !== selectedIndex);
		setFieldValue("products", newProducts);
	};

	return (
		<ModalDefault
			innerClass="max-width_700"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title="Создать меню"
			subtitle={() => (
				<>
					<span className="color_txt-primary fw_600">{get(user, "username")}</span>{" "}
					(Кассир)
				</>
			)}
		>
			<Containers.Form
				url={isUpdate ? `/kitchen-menu/${get(values, "id")}` : "/kitchen-menu"}
				method={isUpdate ? "put" : "post"}
				onSuccess={(response) => {
					handleModalClose();
					onSuccess();
				}}
				fields={[
					{
						name: "title",
						validationType: "object",
						isLanguageSchema: true,
						value: get(values, "title"),
					},
					{
						name: "day",
						validationType: "object",
						validations: [{ type: "required" }],
						value: utils.formatters.getDay(get(values, "day")),
						onSubmitValue: (value) => get(value, "value"),
					},
					{
						name: "type",
						validationType: "object",
						validations: [{ type: "required" }],
						value: utils.formatters.getFoodTime(get(values, "type")),
						onSubmitValue: (value) => get(value, "value"),
					},
					{
						name: "file_id",
						validationType: "object",
						value: get(values, "file"),
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "foods",
						validationType: "array",
						value: isUpdate
							? adapters.kitchenMenuFoodAdapter(get(values, "foods"))
							: [
									{
										food_id: "",
										quantity: "",
									},
							  ],
						lazy: (validator, yup) =>
							validator.of(
								yup.object().shape({
									food_id: yup.object(),
									quantity: yup.string(),
								})
							),
						onSubmitValue: (value) =>
							value.map((item) => ({
								food_id: get(item, "food_id.id"),
								quantity: utils.formatters.formatCurrencyApi(item.quantity),
							})),
					},
					{
						name: "products",
						validationType: "array",
						value: isUpdate
							? adapters.kitchenMenuProductAdapter(get(values, "products"))
							: [
									{
										product_id: "",
										quantity: "",
									},
							  ],
						lazy: (validator, yup) =>
							validator.of(
								yup.object().shape({
									product_id: yup.object(),
									quantity: yup.string(),
								})
							),
						onSubmitValue: (value) =>
							value.map((item) => ({
								product_id: get(item, "product_id.id"),
								quantity: utils.formatters.formatCurrencyApi(item.quantity),
							})),
					},
				]}
			>
				{({ isSubmitting, values, setFieldValue }) => (
					<>
						<TabBase
							className="mb_30"
							labels={config.languages}
							currentLabel={tabLng}
							onPaneChange={(active, event) => setTabLng(active)}
						/>

						<div className="row g-4">
							<div className="col-12">
								<FastField
									name={`title.${tabLng}`}
									component={Fields.InputText}
									label={`Название ${tabLng}`}
									placeholder={`Название ${tabLng}`}
								/>
							</div>

							<div className="col-6">
								<FastField
									name="type"
									component={Fields.Select}
									label="День недели"
									placeholder="День недели"
									options={constants.days}
								/>
							</div>

							<div className="col-6">
								<FastField
									name="day"
									component={Fields.Select}
									label="Время приема пищи"
									placeholder="Время приема пищи"
									options={constants.foodTime}
								/>
							</div>
						</div>

						<FoodList
							food={values.foods}
							onRemoveFood={(selectedIndex) => {
								handleRemoveFood(selectedIndex, values.foods, setFieldValue);
							}}
							onAddFood={() => handleAddFood(values.foods, setFieldValue)}
						/>

						<ProductList
							products={values.products}
							onRemoveProduct={(selectedIndex) => {
								handleRemoveProduct(selectedIndex, values.products, setFieldValue);
							}}
							onAddProduct={() => {
								handleAddProduct(values.products, setFieldValue);
							}}
						/>

						<FastField
							name="file_id"
							component={FileUpload}
							className="mt_40"
							title="Загрузите фото"
						/>

						<Button
							design="primary"
							type="submit"
							className="btn modal-btn mt_40"
							text="Сохранить"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
		</ModalDefault>
	);
};
