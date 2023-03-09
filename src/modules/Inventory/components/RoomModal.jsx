import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import config from "config";

import Containers from "containers";
import { ModalDefault, Fields, Button, TabBase } from "components";

export const RoomModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	const [tabLng, setTabLng] = useState("uz");

	useEffect(() => {
		setTabLng("uz");
	}, [isOpen]);

	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить кабинет" : "Создать кабинет"}
		>
			<Containers.Form
				url={isUpdate ? `/room/${get(values, "id")}` : "/room"}
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
						name: "number",
						validations: [{ type: "required" }],
						value: get(values, "number"),
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

							<div className="col-12">
								<FastField
									name="number"
									component={Fields.InputNumber}
									label="Номер кабинета"
									placeholder="номер кабинета"
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
