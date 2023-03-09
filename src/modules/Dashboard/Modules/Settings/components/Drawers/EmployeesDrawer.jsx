import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { DrawerDefault, Fields, Button, FileUpload ,Typography, InputPassword} from "components";

export const AddEmployeeDrawer = ({ isOpen, handleModalClose, onSuccess, values, isUpdate }) => {
	return (
		<DrawerDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
		>
			<Containers.Form
					url={isUpdate ? `/food/${get(values, "id")}` : "/food"}
					method={isUpdate ? "put" : "post"}
					// params={{
					// 	include: "userDetail,userDetail.avatar,position",
					// }}
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
							name: "phone",
							validations: [{ type: "required" }],
						},
						{
							name: "email",
						},
						{
							name: "password",
							validations: [{ type: "required" }],
						},
                        {
							name: "role",
							validations: [{ type: "required" }],
						},
                        {
							name: "status",
							validations: [{ type: "required" }],
						},
					]}
				>
					{({ isSubmitting }) => (
						<>
                            <div className="col-12">
								<Typography Type="h3" text={isUpdate ? "Xodimni tahrirlash" : "Xodim qo'shish"}/>
							</div>
							<div className="col-12">
								<FastField
									name="name"
									component={Fields.InputText}
									placeholder="Nomi"
									label="Nomi"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="phone"
									component={Fields.InputMask}
									placeholder="+998"
                                    prepend=""
									label="Telefon raqami"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="email"
									component={Fields.InputText}
									placeholder="Email"
									label="Email"
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
									name="role"
									component={Fields.Select}
									placeholder="Rollar"
									label="Rollar"
								/>
							</div>
                            <div className="col-12 mb_20">
								<FastField
									name="status"
									component={Fields.Select}
									placeholder="Holati"
									label="Holati"
								/>
							</div>
							<div className="col-6 ">
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
		</DrawerDefault>
	);
};