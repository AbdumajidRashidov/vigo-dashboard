import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { ModalDefault, Fields, Button ,Typography, InputPassword} from "components";

export const AddNewClientModal = ({ isOpen,isUpdate, handleModalClose, onSuccess, values }) => {
	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
		>
			<Containers.Form
					url={isUpdate ? `/payment-type/${get(values, "id")}` : "/payment-type"}
                    method={isUpdate ? "put" : "post"}
					params={{
						include: "userDetail,userDetail.avatar,position",
					}}
					className="row g-3"
					onSuccess={(user) => {
						// dispatch(auth.success("token"));
						// storage.set("token","token");
						// navigate("/");
					}}
					fields={[
						{
							name: "name",
							validations: [{ type: "required" }],
						},
					]}
				>
					{({ isSubmitting }) => (
						<>
                            <div className="col-12">
								<Typography Type="h3" text="Yangi mijoz qo'shish "/>
							</div>
							<div className="col-12">
								<FastField
									name="name"
									component={Fields.InputText}
									placeholder="FIO"
									label="FIO"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="phone"
									component={Fields.InputMask}
									placeholder="Telefon"
									label="Telefon"
								/>
							</div>
							<div className="col-6 mb_15">
								<Button
									className="btn w_full"
									design="primary"
									type="submit"
									text={isUpdate ? "Tahrirlash" : "Saqlash"}
									isLoading={isSubmitting}
								/>
							</div>
						</>
					)}
				</Containers.Form> 
		</ModalDefault>
	);
};