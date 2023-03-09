import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { constants, utils } from "services";
import { useGetLanguage } from "hooks";

import Containers from "containers";
import { ModalDefault, Fields, Button } from "components";

export const KitchenMenuReadyModal = ({
	isOpen,
	handleModalClose,
	onSuccess,
	isUpdate,
	user,
	values,
}) => {
	const { getLanguageValue } = useGetLanguage();

	return (
		<ModalDefault
			innerClass="max-width_700"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title="Создать меню"
			subtitle={() => (
				<>
					<span className="color_txt-primary fw_600">{get(user, "username")}</span>{" "}
					(Повар)
				</>
			)}
		>
			<Containers.Form
				url={isUpdate ? `/kitchen-menu-ready/${get(values, "id")}` : "/kitchen-menu-ready"}
				method={isUpdate ? "put" : "post"}
				onSuccess={(response) => {
					handleModalClose();
					onSuccess();
				}}
				fields={[
					{
						name: "kitchen_menu_id",
						validationType: "object",
						validations: [{ type: "required" }],
						value: get(values, "kitchenMenu"),
						onSubmitValue: (value) => get(value, "id"),
					},
					{
						name: "quantity",
						validations: [{ type: "required" }],
						value: get(values, "quantity"),
					},
					{
						name: "type",
						validationType: "object",
						value: utils.formatters.getFoodWhom(get(values, "type")),
						onSubmitValue: (value) => get(value, "value"),
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
									name="kitchen_menu_id"
									component={Fields.AsyncSelect}
									label="Блюдо"
									placeholder="блюдо"
									loadOptionsUrl="/kitchen-menu"
									getOptionLabel={(option) =>
										getLanguageValue(get(option, "title"))
									}
								/>
							</div>

							<div className="col-6">
								<FastField
									name="type"
									component={Fields.Select}
									label="Кому"
									placeholder="кому"
									options={constants.foodWhom}
								/>
							</div>

							<div className="col-6">
								<FastField
									name="quantity"
									component={Fields.InputNumber}
									label="Количество"
									placeholder="количество"
								/>
							</div>
						</div>

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
