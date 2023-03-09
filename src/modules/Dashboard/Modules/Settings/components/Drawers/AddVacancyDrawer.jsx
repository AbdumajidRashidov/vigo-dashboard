import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { DrawerDefault, Fields, Button ,Typography, FileUpload} from "components";

export const AddVacancyDrawer = ({ isOpen, handleModalClose, onSuccess, values }) => {
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
					]}
				>
					{({ isSubmitting }) => (
						<>
                            <div className="col-12">
								<Typography Type="h3" text="Vakansiya qo'shish"/>
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
									name="name"
									component={Fields.InputText}
									placeholder="Vakansiya nomi"
									label="Vakansiya nomi"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="text"
									component={Fields.Textarea}
                                    size="textarea"
									placeholder="Matn (shartlar, talablar va hokazo)"
									label="Matn (shartlar, talablar va hokazo)"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="file"
									component={FileUpload}
                                    title="Fayl biriktirish"
                                    accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.txt"
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