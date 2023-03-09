import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { ModalDefault, Fields, Button ,Typography, InputPassword} from "components";

export const AddSMSDrawer = ({ isOpen,isUpdate, handleModalClose, onSuccess, values }) => {
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
						{
							name: "manager_name",
							validations: [{ type: "required" }],
						},
						{
							name: "working_contact",
							validations: [{ type: "required" }],
						},
					]}
				>
					{({ isSubmitting }) => (
						<>
                            <div className="col-12">
								<Typography Type="h3" text="SMS(eskiz)ni o'rnatish "/>
							</div>
							<div className="col-12">
								<FastField
									name="login"
									component={Fields.InputText}
									placeholder="Login"
									label="Login"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="password"
									component={InputPassword}
									placeholder="Parol"
									label="Parol"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="token"
									component={Fields.InputText}
									placeholder="token"
									label="Token"
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