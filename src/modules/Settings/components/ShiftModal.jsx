import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import config from "config";

import { ModalDefault, Fields, Button, TabBase } from "components";

import Containers from "containers";
import { time } from "services";

export const ShiftModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	const [tabLng, setTabLng] = useState("uz");

	useEffect(() => {
		setTabLng("uz");
	}, [isOpen]);

	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить смену" : "Создать смену"}
		>
			<Containers.Form
				url={isUpdate ? `/shift/${get(values, "id")}` : "/shift"}
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
						name: "start_at",
						onSubmitValue: (value) => time.toTimestamp(value),
					},
					{
						name: "end_at",
						onSubmitValue: (value) => time.toTimestamp(value),
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
									name={`title.${tabLng}`}
									component={Fields.InputText}
									label={`Название ${tabLng}`}
									placeholder={`Название ${tabLng}`}
								/>
							</div>

							<div className="col-12">
								<FastField
									name="start_at"
									component={Fields.DatePicker}
									format="DD.MM.YYYY HH:mm:ss"
									label="Начало смены"
									prepend=""
									placeholder="Начало смены"
									hasTimeSelect={true}
								/>
							</div>

							<div className="col-12">
								<FastField
									name="end_at"
									component={Fields.DatePicker}
									format="MM/DD/YYYY HH:mm:ss"
									prepend=""
									label="Конец смены"
									placeholder="Конец смены"
									hasTimeSelect={true}
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
