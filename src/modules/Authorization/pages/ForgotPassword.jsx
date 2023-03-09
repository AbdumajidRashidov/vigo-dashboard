import React, { useState } from "react";
import { FastField } from "formik";
import { useNavigate } from "react-router-dom";

import { useOverlay } from "hooks";
import { utils } from "services";

import Containers from "containers";
import { Typography, Button, Fields,TabBase } from "components";
import { PasswordSendModal } from "../components/PasswordSendModal";
import { get } from "lodash";

const ForgotPassword = () => {
	const navigate = useNavigate();
	const [tabType, setTabType] = useState("Telefon");

	const [userPhone, setUserPhone] = useState();
	const codeSentModal = useOverlay({
		uniqueName: "secret-code",
		onClose: () => navigate(`/confirm-password/${userPhone}`),
	});

	return (
		<>
			<PasswordSendModal
				isOpen={codeSentModal.isOverlayOpen}
				handleModalClose={codeSentModal.handleOverlayClose}
			/>

			<div className="auth__heading mb_30">
				<Typography Type="h1" className="auth__title" text="Parolni unutdingizmi?" />
				<Typography
					Type="p"
					className="auth__subtitle"
					text="Ko'rsatilgan telefon raqamingizga 4 xonali son yuboriladi"
				/>
			</div>
			<div className="auth__type">
				<TabBase
					className="mb_30"
					labels={["Telefon","Email"]}
					currentLabel={tabType}
					onPaneChange={(active, event) => setTabType(active)}
				/>
			</div>

			{
				tabType == "Telefon" ? 
				<Containers.Form
					url="/user/forgot-password"
					onSuccess={(response) => {
						setUserPhone(get(response, "data.phone_number"));
						codeSentModal.handleOverlayOpen();
					}}
					className="row g-3"
					fields={[
						{
							name: "country-code",
						},
						{
							name: "phone",
							validations: [{ type: "phone" }],
							onSubmitValue: (value) => utils.formatters.formatPhoneApi(value),
						},
					]}
				>
					{({ isSubmitting, ...props }) => (
						<>
							<div className="col-12 mb_50">
							<div className="col-12">
									<FastField name="country" className="mb_20" placeholder="Mamlakat" component={Fields.Select} options={[{label:"Uzbekistan",value:"uz"}]} />
								</div>
								<div className="col-12">
									<FastField name="phone" component={Fields.InputMask} />
								</div>
							</div>

							<div className="col-12">
								<Button
									className="btn w_full"
									design="primary"
									type="submit"
									text="Отправить"
									isLoading={isSubmitting}
								/>
							</div>
						</>
					)}
				</Containers.Form> 
				:
			 	<Containers.Form
					url="/user/forgot-password"
					onSuccess={(response) => {
						setUserPhone(get(response, "data.phone_number"));
						codeSentModal.handleOverlayOpen();
					}}
					className="row g-3"
					fields={[
						{
							name: "email",
							validations: [{ type: "email" }],
						},
					]}
		 			>
					{({ isSubmitting, ...props }) => (
						<>
							<div className="col-12 mb_20">
								<div className="col-12">
									<FastField name="email" placeholder="Elektron pochtangizni kiriting" component={Fields.InputText} />
								</div>
							</div>
							<div className="col-12">
								<Button
									className="btn w_full"
									design="primary"
									type="submit"
									text="Отправить"
									isLoading={isSubmitting}
								/>
							</div>
						</>
					)}
					</Containers.Form>
			}
			
		</>
	);
};

export default ForgotPassword;
