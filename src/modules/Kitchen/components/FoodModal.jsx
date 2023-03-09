import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import config from "config";
import { utils, adapters } from "services";
import { useGetLanguage } from "hooks";

import { ModalDefault, Fields, Button, TabBase, Typography, FileUpload } from "components";
import Containers from "containers";

import { ReactComponent as AddIcon } from "assets/icons/add-item.svg";

export const FoodModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	const { getLanguageValue } = useGetLanguage();
	const [tabLng, setTabLng] = useState("uz");

	useEffect(() => {
		setTabLng("uz");
	}, [isOpen]);

	const handleRemoveFoodProduct = (selectedIndex, foodProducts, setFieldValue) => {
		const newProducts = foodProducts.filter((item, index) => {
			return index !== selectedIndex;
		});
		setFieldValue("products", newProducts);
	};

	const handleAddFoodProduct = (products, setFieldValue) => {
		const newProduct = {
			product_id: "",
			quantity: "",
		};
		setFieldValue("products", [...products, newProduct]);
	};

	return (
		<ModalDefault
			innerClass="max-width_700"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить блюдо" : "Создать блюдо"}
		>
			<Containers.Form
				url={isUpdate ? `/food/${get(values, "id")}` : "/food"}
				method={isUpdate ? "put" : "post"}
				onSuccess={onSuccess}
				fields={[
					{
						name: "title",
						validationType: "object",
						isLanguageSchema: true,
						value: get(values, "title"),
					},
					{
						name: "description",
						validationType: "object",
						isLanguageSchema: true,
						value: get(values, "description"),
					},
					{
						name: "products",
						validationType: "array",
						value: isUpdate
							? adapters.productAdapter(get(values, "products"))
							: [
									{
										product_id: "",
										quantity: "",
									},
							  ],
						lazy: (validator, yup) =>
							validator.of(
								yup.object().shape({
									quantity: yup.string(),
									product_id: yup.object(),
								})
							),
						onSubmitValue: (value) =>
							value.map((item) => ({
								product_id: get(item, "product_id.id"),
								quantity: utils.formatters.formatCurrencyApi(item.quantity),
							})),
					},
					{
						name: "category_id",
						validationType: "object",
						value: get(values, "category"),
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "file_id",
						validationType: "object",
						value: get(values, "file"),
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "status",
						value: 10,
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
							<div className="col-6">
								<FastField
									name={`title.${tabLng}`}
									component={Fields.InputText}
									label={`Название ${tabLng}`}
									placeholder={`Название ${tabLng}`}
								/>
							</div>

							<div className="col-6">
								<FastField
									name={`description.${tabLng}`}
									component={Fields.InputText}
									label={`Описание ${tabLng}`}
									placeholder={`Описание ${tabLng}`}
								/>
							</div>

							<div className="col-12">
								<FastField
									name="category_id"
									component={Fields.AsyncSelect}
									label="Категория"
									placeholder="Выберите категорию"
									getOptionLabel={(option) =>
										getLanguageValue(get(option, "title"))
									}
									getOptionValue="id"
									loadOptionsUrl="/category"
								/>
							</div>
						</div>

						<Ingredients
							foodProducts={values.products}
							onRemove={(selectedIndex) => {
								handleRemoveFoodProduct(
									selectedIndex,
									values.products,
									setFieldValue
								);
							}}
						/>

						<Button
							className="add-item mt_20 mx_auto"
							append={<AddIcon />}
							onClick={(event) =>
								handleAddFoodProduct(values.products, setFieldValue)
							}
						/>

						<FastField
							name="file_id"
							component={FileUpload}
							className="mt_40"
							title="Загрузить фото"
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

const Ingredients = ({ foodProducts, onRemove }) => {
	return foodProducts.map((foodProduct, index) => (
		<div key={index} className="mt_40">
			<div className="d-flex align-items-center justify-content-between mb_20">
				<Typography
					Type="span"
					className="color_brand-blue product__btn"
					text={`${index + 1}-ПРОДУКТ`}
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
						name={`products.${index}.product_id`}
						component={Fields.AsyncSelect}
						label="Продукт"
						placeholder="продукт"
						loadOptionsUrl="/product"
						getOptionLabel="title"
					/>
				</div>

				<div className="col-6">
					<FastField
						name={`products.${index}.quantity`}
						component={Fields.InputNumber}
						label="Колличество"
						placeholder="колличество"
					/>
				</div>
			</div>
		</div>
	));
};
