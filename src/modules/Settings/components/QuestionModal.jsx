import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { time } from "services";
import config from "config";

import { ModalDefault, Fields, Button, TabBase } from "components";
import Containers from "containers";

export const QuestionModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	const [tabLng, setTabLng] = useState("uz");

	useEffect(() => {
		setTabLng("uz");
	}, [isOpen]);

	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить вопрос" : "Создать вопрос"}
		>
			<Containers.Form
				url={isUpdate ? `/question/${get(values, "id")}` : "/question"}
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
						name: "subtitle",
						validationType: "object",
						isLanguageSchema: true,
						value: get(values, "subtitle"),
					},
					{
						name: "sort",
						validationType: "number",
						value: get(values, "sort"),
					},
					{
						name: "status",
						value: 1,
					},
					{
						name: "type",
						value: 12,
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
									name={`subtitle.${tabLng}`}
									component={Fields.InputText}
									label={`Подзагловок ${tabLng}`}
									placeholder={`Подзагловок ${tabLng}`}
								/>
							</div>

							<div className="col-12">
								<FastField
									name="sort"
									component={Fields.InputNumber}
									label="Позиция"
									placeholder="1"
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
