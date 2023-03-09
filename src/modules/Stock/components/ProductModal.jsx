import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { useGetLanguage } from "hooks";

import Containers from "containers";
import { ModalDefault, Fields, Button } from "components";

export const ProductModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	const { getLanguageValue } = useGetLanguage();

	return (
		<ModalDefault
			innerClass="max-width_700"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить продукт" : "Создать продукт"}
		>
			<Containers.Form
				url={isUpdate ? `/product/${get(values, "id")}` : "/product"}
				method={isUpdate ? "put" : "post"}
				onSuccess={onSuccess}
				fields={[
					{
						name: "title",
						validations: [{ type: "required" }],
						value: get(values, "title"),
					},
					{
						name: "category_id",
						validationType: "object",
						validations: [{ type: "required" }],
						value: get(values, "category"),
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "measure_id",
						validationType: "object",
						validations: [{ type: "required" }],
						value: get(values, "measure"),
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "manufacturer_id",
						validationType: "object",
						validations: [{ type: "required" }],
						value: get(values, "manufacturer"),
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "description",
						value: get(values, "description"),
					},
					{
						name: "type",
						value: 1,
					},
					{
						name: "status",
						value: 10,
					},
				]}
			>
				{({ isSubmitting }) => (
					<>
						<div className="row g-4">
							<div className="col-6">
								<FastField
									name="title"
									component={Fields.InputText}
									label="Имя"
									placeholder="имя"
								/>
							</div>

							<div className="col-6">
								<FastField
									name="category_id"
									component={Fields.AsyncSelect}
									label="Категория"
									placeholder="категория"
									loadOptionsUrl="/category"
									getOptionLabel={(option) =>
										getLanguageValue(get(option, "title"))
									}
								/>
							</div>

							<div className="col-6">
								<FastField
									name="manufacturer_id"
									component={Fields.AsyncSelect}
									label="Производитель"
									placeholder="производитель"
									loadOptionsUrl="/manufacturer"
									getOptionLabel="title"
								/>
							</div>

							<div className="col-6">
								<FastField
									name="measure_id"
									component={Fields.AsyncSelect}
									label="Единица измерения"
									placeholder="единица измерения"
									loadOptionsUrl="/measure"
									getOptionLabel={(option) =>
										getLanguageValue(get(option, "name"))
									}
								/>
							</div>

							<div className="col-12">
								<FastField
									name="description"
									component={Fields.Textarea}
									label="Описание"
									placeholder="Напишите что-нибудь"
									size="textarea"
								/>
							</div>
						</div>

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
