import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { DrawerDefault, Fields, Button, FileUpload ,Typography} from "components";

export const AddJowiFilialsDrawer = ({ isOpen, handleModalClose, isUpdate, values }) => {
	return (
		<DrawerDefault
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
								<Typography Type="h3" text={isUpdate ? "Tahrirlash" :"Yangi qo'shish"}/>
							</div>
							<div className="col-12">
								<FastField
									name="filial"
									component={Fields.Select}
									placeholder="Fillialni tanlang"
                                    label="Filialni tanlang"
                                    options={
                                        [
                                            {label:"Buxoro", value:"1"},
                                            {label:"Toshkent", value:"2"},
                                        ]
                                    }
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="cash_id"
									component={Fields.InputText}
									placeholder="ID ni kiriting"
									label="ID ni kiriting"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="additional"
									component={Fields.InputText}
									placeholder="Qo'shimcha"
									label="Qo'shimcha"
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
		</DrawerDefault>
	);
};