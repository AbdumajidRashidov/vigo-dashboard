import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import config from "config";

import { ModalDefault, Fields, Button, TabBase } from "components";

import Containers from "containers";

export const CurrencyModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	const [tabLng, setTabLng] = useState("uz");

	useEffect(() => {
		setTabLng("uz");
	}, [isOpen]);

	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить валюту" : "Создать валюту"}
		>
			<Containers.Form
				url={isUpdate ? `/currency/${get(values, "id")}` : "/currency"}
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
						name: "status",
						value: 10,
					},
				]}
			>
				{({ isSubmitting }) => (
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
