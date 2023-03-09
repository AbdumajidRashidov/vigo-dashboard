import React,{ useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";
import config from "config";


import Containers from "containers";
import { DrawerDefault, Fields, Button ,Typography, AppLink} from "components";

export const SMSDrawer = ({ isOpen, handleModalClose, onSuccess, values }) => {
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
							name: "comment_uz",
							validations: [{ type: "required" }],
						},
					]}
				>
					{({ isSubmitting }) => (
						<>
                            <div className="col-12">
								<Typography Type="h3" text="SMS jo'natish"/>
							</div>
							
                            
								<div className="col-12">
									<FastField
										name="comment_uz"
										component={Fields.Textarea}
										placeholder="Xabar matnini kiriting"
										label="Xabar matni"
										size="textarea"
									/>
								</div>
                                <div className="col-12">
                                    <AppLink className="sms_guide" text="SMS simvollarni ishlatish bo'yicha yo'riqnoma" link={"/sms_guide"}/>
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