import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { Fields, Button, Typography, AttachFile,ControlLabel } from "components";

export const MainSettings = () => {
	return (
			<Containers.Form
				url={"/settings"}
				method={"post"}
                style={{padding:"20px"}}
				// onSuccess={onSuccess}
				fields={[
					{
						name: "logo",
						validations: [{ type: "required" }],
					},
                    {
						name: "first_name",
						validations: [{ type: "required" }],
					},
                    {
						name: "last_name",
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
						name: "lang",
						validations: [{ type: "required" }],
                        validationType:"object"
					},
                    {
                        validationType:"object",
						name: "valuta",
						validations: [{ type: "required" }],
					},
                    {
						name: "oferta",
						validations: [{ type: "required" }],
					},
                    {
						name: "user_guide",
						validations: [{ type: "required" }],
					},
                    {
						name: "about_us",
						validations: [{ type: "required" }],
					},
                    {
						name: "delevery",
						validations: [{ type: "required" }],
					},
                    
				]}
			>
				{({ isSubmitting, values, setFieldValue }) => (
					<>
						<div className="row g-4">
                            <div className="col-12 mb_20">
								<Typography Type="h3" text="Asosiy sozlamalar"/>
							</div>
							<div className="col-12 mb_10">
                                <ControlLabel label={"Logoni yuklash"}/>
								<FastField
									name="logo"
									component={AttachFile}
                                    title="Logoni yuklash"
							    />
							</div>
							<div className="col-6 mb_10">
								<FastField
									name="first_name"
									component={Fields.InputText}
									label="Ism"
									placehorder="Ism"
							    />
							</div>
							<div className="col-6 mb_10">
								<FastField
									name="last_name"
									component={Fields.InputText}
									label="Familiya"
									placehorder="Familiya"
							    />
							</div>
							<div className="col-6 mb_10">
								<FastField
									name="phone"
									component={Fields.InputMask}
									label="Telefon"
									prepend=""
							    />
							</div>
                            <div className="col-6 mb_10">
								<FastField
									name="email"
									component={Fields.InputText}
									label="Email"
									placehorder="Email"
							    />
							</div>
							<div className="col-6 mb_10">
							<FastField
								name="lang"
								component={Fields.Select}
								placeholder="Tillar"
                                isMulti={true}
                                label="Tillar"
                                options={[{label:"O'zbek",value:"uz"},{label:"Rus",value:"ru"},{label:"Ingliz",value:"en"}]}
							/>
						    </div>
                            <div className="col-6 mb_10">
                                <FastField
                                    name="valuta"
                                    label="Valyutalar"
                                    component={Fields.Select}
                                    placeholder="Valyutalar"
                                    isMulti={true}
                                    options={[{label:"So'm",value:"uzs"},{label:"Rubl",value:"ru"},{label:"Dollar",value:"usd"}]}
                                />
                            </div>
                            <div className="col-6 mb_10">
                                <ControlLabel label={"Ofertani yuklash"}/>
								<FastField
                                    className="mt_10"
									name="oferta"
									component={AttachFile}
                                    title="Ofertani yuklash"
							    />
							</div>
                            <div className="col-6 mb_10">
                                <ControlLabel label={"Foydalanuvchi Yo'riqnomasi"}/>
								<FastField
									name="user_guide"
									component={AttachFile}
                                    title="Foydalanuvchi yo'riqnomasi"
							    />
							</div>
                            <div className="col-6 mb_10">
								<FastField
                                    label="Biz haqimizda"
									name="about_us"
									component={Fields.Textarea}
                                    size="textarea"
							    />
							</div>
                            <div className="col-6 mb_10">
								<FastField
                                    label="Yetkazib berish shartlari"
									name="delevery"
									component={Fields.Textarea}
                                    size="textarea"
							    />
							</div>
						</div>

						<Button
							design="primary"
							type="submit"
							className="modal-btn-sm fz_16 btn mt_40"
							text="Saqlash"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
	);
};