import React,{ useState } from "react";
import { FastField } from "formik";


import Containers from "containers";
import { DrawerDefault, Fields, Button, FileUpload ,Typography, TabBase} from "components";

export const AddCategoryDrawer = ({ isOpen, handleModalClose, onSuccess, values }) => {
	const [tabLng, setTabLng] = useState("O'zbek");
	return (
		<DrawerDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
		>
			<Containers.Form
					url="/user/sign-in"
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
							name: "name_uz",
							validations: [{ type: "required" }],
						},
						{
							name: "name_ru",
							validations: [{ type: "required" }],
						},
						{
							name: "main_category",
							validations: [{ type: "required" }],
						},
                        {
							name: "emoji",
							validations: [{ type: "required" }],
						},
						{
							name: "comment_uz",
							validations: [{ type: "required" }],
						},
						{
							name: "comment_ru",
							validations: [{ type: "required" }],
						},
						{
							name: "images",
							validations: [{ type: "required" }],
						},
					]}
				>
					{({ isSubmitting }) => (
						<>
                            <div className="col-12">
								<Typography Type="h3" text="Kategoriya qo'shish"/>
							</div>
							<div className="col-2">
								<TabBase
									labels={["O'zbek","Rus","Ingliz"]}
									currentLabel={tabLng}
									onPaneChange={(active, event) => setTabLng(active)}
								/>
							</div>
							{
								tabLng == "O'zbek" ? 
								<div className="col-12">
									<FastField
										name="name_uz"
										component={Fields.InputText}
										placeholder="Kategoriya nomi o'zbek tilida"
										label="Kategoriya nomi o'zbek tilida"
									/>
								</div> 
								: tabLng == "Rus" ?
								<div className="col-12">
									<FastField
										name="name_ru"
										component={Fields.InputText}
										placeholder="Kategoriya nomi rus tilda"
										label="Kategoriya nomi rus tilida"
									/>
								</div> 
								:
								<div className="col-12">
									<FastField
										name="name_eng"
										component={Fields.InputText}
										placeholder="Kategoriya nomi inliz tilda"
										label="Kategoriya nomi ingliz tilida"
									/>
								</div> 
							}
							
                            <div className="col-12">
								<FastField
									name="phone"
									component={Fields.Select}
									placeholder="Asosiy kategoriya"
                                    prepend=""
									label="Asosiy kategoriya"
								/>
							</div>
                            <div className="col-12">
								<FastField
									name="emoji"
									component={Fields.InputText}
									placeholder="Emoji"
									label="Emoji"
								/>
							</div>
							{
								tabLng == "O'zbek" ?
								<div className="col-12">
									<FastField
										name="comment_uz"
										component={Fields.Textarea}
										placeholder="Tavsif o'zbek tilida"
										label="Tavsif o'zbek tilida"
										size="textarea"
									/>
								</div>
								: tabLng == "Rus" ?
								<div className="col-12">
									<FastField
										name="comment_ru"
										component={Fields.Textarea}
										placeholder="Tavsif rus tilida"
										label="Tavsif rus tilida"
										size="textarea"
									/>
								</div>
								:
								<div className="col-12">
									<FastField
										name="comment_en"
										component={Fields.Textarea}
										placeholder="Tavsif ingliz tilida"
										label="Tavsif ingliz tilida"
										size="textarea"
									/>
								</div>
							}
                            
                            <div className="col-12 mb_20">
								<FastField
									name="images"
									component={FileUpload}
									placeholder="Rasmlar"
									label="Rasmlar"
									title="Rasmlar"
									subtitle="Rasm joylash ixtiyoriy"
								/>
							</div>
							<div className="col-6 ">
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