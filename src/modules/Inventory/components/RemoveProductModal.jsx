import React from "react";
import { FastField } from "formik";

import Containers from "containers";
import { ModalDefault, Fields, Button, FileUpload } from "components";
import { get } from "lodash";

export const RemoveProductModal = ({ isOpen, handleModalClose, productId, onSuccess }) => {
	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title="Списать продукт"
		>
			<Containers.Form
				url={`/room-product/${productId}/removed`}
				method="post"
				onSuccess={() => {
					onSuccess();
					handleModalClose();
				}}
				fields={[
					{
						name: "reason",
						validations: [{ type: "required" }],
					},
					{
						name: "file_id",
						validationType: "object",
						onSubmitValue: (value) => get(value, "id"),
					},
				]}
			>
				{({ isSubmitting }) => (
					<>
						<div className="row g-4">
							<div className="col-12">
								<FastField
									name="reason"
									component={Fields.InputText}
									label="Причина"
									placeholder="причина"
								/>
							</div>

							<div className="col-12">
								<FastField
									name="file_id"
									component={FileUpload}
									title="Загрузить Фото"
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
