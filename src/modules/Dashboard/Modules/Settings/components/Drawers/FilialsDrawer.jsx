import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { DrawerDefault, Fields, Button, FileUpload ,Typography} from "components";

export const AddFilialDrawer = ({ isOpen, handleModalClose, onSuccess, values }) => {
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
								<Typography Type="h3" text="Filial qo'shish"/>
							</div>
							<div className="col-12">
								<FastField
									name="name"
									component={Fields.InputText}
									placeholder="Fillial nomi"
								/>
							</div>
							<div className="col-6">
								<FastField
									name="manager_name"
									component={Fields.InputText}
									placeholder="Fillial rahbari FIOsi"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="phone"
									component={Fields.InputMask}
									placeholder="Telefon raqam"
                                    prepend=""
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="working_contact"
									component={Fields.InputText}
									placeholder="Ish raqami (sayt)"
                                    prepend=""
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="email"
									component={Fields.InputText}
									placeholder="Email"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="country"
									component={Fields.Select}
									placeholder="Mamlakat"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="region"
									component={Fields.Select}
									placeholder="Viloyat"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="city"
									component={Fields.Select}
									placeholder="Tuman (Shahar)"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="city"
									component={Fields.InputText}
									placeholder="Manzil, Ko'cha, uy..."
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="location"
									component={Fields.InputText}
									placeholder="Mo'ljal"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="coordinata"
									component={Fields.InputText}
									placeholder="Manzil kordinatasi"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="virtual_tour"
									component={Fields.InputText}
									placeholder="Virtual tur (link)"
								/>
							</div>
							<div className="col-6 mb_30">
								<FastField
									name="working_time"
									component={Fields.RangePicker}
									placeholder="Ish vaqti"
								/>
							</div>
                            <div className="col-12 mb_30">
								<FastField
									name="images"
                                    className="form-control"
									component={FileUpload}
                                    title="Rasmlar yuklash"
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