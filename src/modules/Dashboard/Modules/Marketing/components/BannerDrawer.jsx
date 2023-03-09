import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { DrawerDefault, Fields, Button, Typography, FileUpload, ControlLabel } from "components";

export const AddBannerDrawer = ({ isOpen, handleModalClose, onSuccess, values }) => {
	return (
		<DrawerDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
		>
			<Containers.Form
				url={"/notifications"}
				method={"post"}
				onSuccess={onSuccess}
				fields={[
					{
						name: "whom",
						validations: [{ type: "required" }],
						value: (value)=> value,
					},
				]}
			>
				{({ isSubmitting, values, setFieldValue }) => (
					<>
                    {console.log(values.whom.label)}
						<div className="row g-4">
                            <div className="col-12">
								<Typography Type="h2" text="Banner qo'shish"/>
							</div>
							<div className="col-12">
								<FastField
									name="whom"
									component={FileUpload}
                                    title="Banner rasmi (yuklash)"
							    />
							</div>
							<div className="col-12">
								<FastField
									name="name"
									component={Fields.InputText}
									label="Sarlavha (ichki sahifa)"
							    />
							</div>
                            <div className="col-12">
								<FastField
									name="comment"
									component={Fields.Textarea}
									label="Matn kiriting"
									placehorder="Matn kiriting"
                                    size="textarea"
							    />
							</div>
                            <div className="col-12">
                                <ControlLabel label={"Status"} />

								<FastField
									name="status"
									component={Fields.Switch}
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
		</DrawerDefault>
	);
};