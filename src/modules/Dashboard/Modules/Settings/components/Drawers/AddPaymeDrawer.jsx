import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { DrawerDefault, Fields, Button, FileUpload ,Typography} from "components";

export const AddPaymeDrawer = ({ isOpen, handleModalClose, onSuccess, values }) => {
	return (
		<DrawerDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
		>
			<Containers.Form
					url="/user/sign-in"
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
                        {
							name: "phone",
							validations: [{ type: "required" }],
						},
                        {
							name: "email",
							validations: [{ type: "required" }],
						},
                        {
							name: "country",
							validations: [{ type: "required" }],
                            validationType:"object"
						},
                        {
							name: "region",
							validations: [{ type: "required" }],
                            validationType:"object"
						},
                        {
							name: "city",
							validations: [{ type: "required" }],
                            validationType:"object"
						},
                        {
							name: "location",
							validations: [{ type: "required" }],
						},
                        {
							name: "coordinata",
						},
                        {
							name: "virtual_tour",
						},
                        {
							name: "working_time",
							validations: [{ type: "required" }],
						},
                        {
							name: "images",
                            validationType:"object"
						},
					]}
				>
					{({ isSubmitting }) => (
						<>
                            <div className="col-12">
								<Typography Type="h3" text="Yangi qo'shish"/>
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
									name="login"
									component={Fields.InputText}
									placeholder="Login"
									label="Login"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="merchand_id"
									component={Fields.InputText}
									placeholder="Merchand ID"
									label="Merchand ID"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="key"
									component={Fields.InputText}
									placeholder="Key"
									label="Key"
								/>
							</div>
                           
							<div className="col-6 mb_15">
								<Button
									className="btn w_full"
									design="primary"
									type="submit"
									text="Saqlash"
									isLoading={isSubmitting}
								/>
							</div>
						</>
					)}
				</Containers.Form> 
		</DrawerDefault>
	);
};