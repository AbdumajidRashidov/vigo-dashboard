import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { Button, Typography,InputPassword } from "components";

export const PasswordSettings = () => {
	return (
			<Containers.Form
				url={"/settings"}
				method={"post"}
                style={{padding:"20px"}}
				// onSuccess={onSuccess}
				fields={[
					{
						name: "old_password",
						validations: [{ type: "required" }],
					},
                    {
						name: "new_password",
						validations: [{ type: "required" }],
					},
                    {
						name: "password_confirm",
						validations: [{ type: "required" }],
					},
				]}
			>
				{({ isSubmitting, values, setFieldValue }) => (
					<>
						<div className="row g-4">
                            <div className="col-12 mb_20">
								<Typography Type="h3" text="Parolni o'zgartirish"/>
							</div>
                            <div className="col-12 mb_10">
								<FastField
									name="old_password"
									component={InputPassword}
									label="Eski parolni kiriting"
									placehorder="Password"
                                    minLength="6"
                                    maxLength="32"
							    />
							</div>
                            <div className="col-12 mb_10">
								<FastField
									name="new_password"
									component={InputPassword}
									label="Yangi parolni kiriting"
									placehorder="Password"
                                    minLength="6"
                                    maxLength="32"
							    />
							</div>
                            <div className="col-12 mb_10">
								<FastField
									name="password_confirm"
									component={InputPassword}
									label="Yangi parolni kiriting"
									placehorder="Password"
                                    minLength="6"
                                    maxLength="32"
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