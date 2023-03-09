import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { DrawerDefault, Fields, Button, Typography } from "components";

export const AddVendorDrawer = ({ isOpen, handleModalClose, onSuccess, values }) => {
	return (
		<DrawerDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
		>
			<Containers.Form
				url={"/vendors"}
				method={"post"}
				onSuccess={onSuccess}
				fields={[
					{
						name: "number",
						validations: [{ type: "required" }],
						value: get(values, "number"),
					},
				]}
			>
				{({ isSubmitting, values, setFieldValue }) => (
					<>
						<div className="row g-4">
                            <div className="col-12">
								<Typography Type="h2" text="Vendor qo'shish"/>
							</div>
							<div className="col-12">
								<FastField
									name="country"
									component={Fields.Select}
									label="Mamlakatlar"
									placehorder="Mamlakatlar"
							    />
							</div>
							<div className="col-6">
								<FastField
									name="first_name"
									component={Fields.InputText}
									label="Ism"
									placehorder="Ism"
							    />
							</div>
							<div className="col-6">
								<FastField
									name="last_name"
									component={Fields.InputText}
									label="Familiya"
									placehorder="Familiya"
							    />
							</div>
							<div className="col-6">
								<FastField
									name="email"
									component={Fields.InputText}
									label="Email"
									placehorder="Email"
							    />
							</div>
							<div className="col-6">
								<FastField
									name="phone"
									component={Fields.InputMask}
									label="Telefon"
									prepend=""
							    />
							</div>
							<div className="col-6">
								<FastField
									name="tarif"
									component={Fields.Select}
									label="Ta'rif"
									placehorder="Ta'rif"
							    />
							</div>
							<div className="col-6">
								<FastField
									name="status"
									component={Fields.Select}
									label="Holat"
									placehorder="Holat"
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