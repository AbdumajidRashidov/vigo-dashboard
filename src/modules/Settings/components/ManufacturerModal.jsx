import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { ModalDefault, Fields, Button } from "components";

import Containers from "containers";

export const ManufacturerModal = ({ isOpen, handleModalClose, onSuccess, isUpdate, values }) => {
	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={isUpdate ? "Обновить производителя" : "Создать производителя"}
		>
			<Containers.Form
				url={isUpdate ? `/manufacturer/${get(values, "id")}` : "/manufacturer"}
				method={isUpdate ? "put" : "post"}
				onSuccess={onSuccess}
				fields={[
					{
						name: "title",
						validations: [{ type: "required" }],
						value: get(values, "title"),
					},
					{
						name: "status",
						value: 2,
					},
				]}
			>
				{({ isSubmitting }) => (
					<>
						<div className="row g-4">
							<div className="col-12">
								<FastField
									name="title"
									component={Fields.InputText}
									label="Название"
									placeholder="Название"
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
