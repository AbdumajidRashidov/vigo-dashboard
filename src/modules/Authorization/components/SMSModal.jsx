import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { ModalDefault, Fields, Button, Typography } from "components";

export const SMSModal = ({ isOpen, handleModalClose, onSuccess, values }) => {
	return (
		<ModalDefault
			innerClass="max-width_500"
			isOpen={isOpen}
			handleModalClose={handleModalClose}
			title={"Tasdiqlash kodi"}
		>
			<Containers.Form
				url={"/sms"}
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
								<Typography Type="p" text="+998 91 646 90 95 raqamiga tasdiqlash kodi yuborildi"/>
							</div>
							<div className="col-12">
								<FastField
									name="number"
									component={Fields.InputNumber}
									label="tasdiqlash kodi"
									placeholder="12345"
                                    thousandSeparator=""
                                    maxlength="5"
								/>
							</div>
                            <div className="col-12">
								<Typography Type="span" className="fz_14" text="qayta yuborish 60 soniyadan so'ng"/>
							</div>
						</div>

						<Button
							design="primary"
							type="submit"
							className="modal-btn fz_16 btn mt_40"
							text="Yuborish"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
		</ModalDefault>
	);
};
