import React from "react";
import { FastField } from "formik";
import { get } from "lodash";


import Containers from "containers";
import { ModalDefault, Fields, Button, Typography } from "components";

export const FilialsModal = ({ isOpen, handleModalClose, onSuccess, values }) => {
	return (
		<ModalDefault
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
								<Typography Type="h2" text="Filiallar"/>
							</div>
                            <div className="col-12">
                                <ul>
                                    <li className="d-flex align-items-center justify-content-between mb_10">
                                        <p>1.Asosiy filial - Buxoro</p>
                                        <FastField
                                            name="filial-1"
                                            component={Fields.Switch}
                                        />
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between mb_10">
                                        <p>2.Toshkent filial - Chilonzor</p>
                                        <FastField
                                            name="filial-2"
                                            component={Fields.Switch}
                                        />
                                    </li>
                                    
                                </ul>
                            </div>
						</div>

						<Button
							design="primary"
							type="submit"
							className="modal-btn-sm btn-sm fz_14 btn mt_40"
							text="Saqlash"
							isLoading={isSubmitting}
						/>
					</>
				)}
			</Containers.Form>
		</ModalDefault>
	);
};