import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { useGetLanguage } from "hooks";
import config from "config";

import { ModalDefault, Fields, Button, TabBase } from "components";

import Containers from "containers";

export const MeasureModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	const { lng, getLanguageValue } = useGetLanguage();
	const [tabLng, setTabLng] = useState("uz");

	useEffect(() => {
		setTabLng("uz");
	}, [isOpen]);

	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить меру" : "Создать меру"}
		>
			<Containers.Form
				url={isUpdate ? `/measure/${get(values, "id")}` : "/measure"}
				method={isUpdate ? "put" : "post"}
				onSuccess={onSuccess}
				fields={[
					{
						name: "name",
						validationType: "object",
						isLanguageSchema: true,
						value: get(values, "name"),
					},
					{
						name: "short_name",
						validations: [{ type: "required" }],
						value: get(values, "short_name"),
					},
					{
						name: "category_id",
						validationType: "object",
						validations: [{ type: "required" }],
						value: get(values, "category"),
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "status",
						value: 1,
					},
				]}
			>
				{({ isSubmitting, values }) => (
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
									name={`name.${tabLng}`}
									component={Fields.InputText}
									label={`Название ${tabLng}`}
									placeholder={`Название ${tabLng}`}
								/>
							</div>

							<div className="col-12">
								<FastField
									name="short_name"
									component={Fields.InputText}
									label="Короткое название"
									placeholder="Короткое название"
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

						<Button
							design="primary"
							type="submit"
							className="btn modal-btn w_full mt_40"
							text="Сохранить"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
		</ModalDefault>
	);
};
