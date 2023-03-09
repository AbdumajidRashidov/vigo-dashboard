import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import config from "config";

import { ModalDefault, Fields, Button, TabBase, FileUpload } from "components";

import Containers from "containers";

export const PositionModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	const [tabLng, setTabLng] = useState("uz");

	useEffect(() => {
		setTabLng("uz");
	}, [isOpen]);

	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить должность" : "Создать должность"}
		>
			<Containers.Form
				url={isUpdate ? `/position/${get(values, "id")}` : "/position"}
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
						name: "file_id",
						value: get(values, "file"),
						validationType: "object",
						onSubmitValue: (value) => get(value, "id"),
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
									name={`title.${tabLng}`}
									component={Fields.InputText}
									label={`Название ${tabLng}`}
									placeholder={`Название ${tabLng}`}
								/>
							</div>

							<div className="col-12">
								<FastField
									name="file_id"
									component={FileUpload}
									title="Загрузить файл"
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
