import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { DrawerDefault, Fields, Button, FileUpload ,Typography} from "components";

export const AddIikoFilialsDrawer = ({ isOpen, handleModalClose, isUpdate, values }) => {
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
									name="filial"
									component={Fields.Select}
									placeholder="Iiko tanlang"
                                    label="Iiko tanlang"
                                    options={
                                        [
                                            {label:"Iiko 1", value:"1"},
                                            {label:"Iiko 2", value:"2"},
                                        ]
                                    }
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