import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FastField } from "formik";
import { get } from "lodash";

import { useGetLanguage, useOverlay } from "hooks";
import { utils } from "services";

import Container from "containers";
import { Language } from "layouts/components/Language";
import { Fields, Typography, InputPassword, Button, AppLink } from "components";
import { PasswordSendModal } from "../components/PasswordSendModal";

const Register = () => {
	const { getLanguageValue } = useGetLanguage();
	const navigate = useNavigate();

	const [userPhone, setUserPhone] = useState("");
	const codeSentModal = useOverlay({
		uniqueName: "codeSent",
		onClose: () =>
			navigate(`/confirm-password/${userPhone}`, { state: { fromRegister: true } }),
	});

	return (
		<>
			<PasswordSendModal
				isOpen={codeSentModal.isOverlayOpen}
				handleModalClose={codeSentModal.handleOverlayClose}
			/>

			<div className="auth__top mb_50 d-flex align-items-center justify-content-between">
				<div className="logo">
					<Typography Type="h1">Logo</Typography>
				</div>
				<div className="lang">
					<Language/>
				</div>
			</div>
			<div className="auth__heading mb_30">
				<Typography Type="h1" className="auth__title" text="Ro'yxatdan o'tish" />
			</div>

			<Container.Form
				url="/user/sign-up"
				className="row g-3"
				onSuccess={(response) => {
					setUserPhone(get(response, "data.phone_number"));
					codeSentModal.handleOverlayOpen();
				}}
				fields={[
					{
						name: "first_name",
						validations: [{ type: "typeError" }, { type: "required" }],
					},
					{
						name: "email",
						validations: [{ type: "typeError" }, { type: "required" }],
					},
					{
						name: "country-code",
						validationType:"object",
						validations: [ { type: "required" }],
					},
					{
						name: "last_name",
						validations: [{ type: "typeError" }, { type: "required" }],
					},
					{
						name: "phone",
						validations: [{ type: "phone" },{type:"required"}],
						onSubmitValue: (value) => utils.formatters.formatPhoneApi(value),
					},
					{
						name: "password",
						validations: [{ type: "required" }],
					},
					{
						name: "password_confirm",
						validations: [{ type: "required" }],
						lazy: (validator, yup) =>
							validator.oneOf([yup.ref("password")], "Sizning parolingiz birinchisiga to'g'ri kelmayapti"),
					},
				]}
			>
				{({ isSubmitting, values, isValid, dirty }) => (
					<>
						<div className="col-12">
							<FastField
								name="country-code"
								component={Fields.Select}
								options={[{label:"O'zbekiston", value:"uz"}]}
								placeholder="Mamlakat"
							/>
						</div>
						<div className="col-12">
							<FastField
								name="phone"
								component={Fields.InputMask}
								placeholder="+998"
								prepend=""

							/>
						</div>
						<div className="col-12">
							<FastField
								name="email"
								type="email"
								component={Fields.InputText}
								placeholder="Elektron pochta"
							/>
						</div>

						<div className="col-12">
							<FastField
								name="first_name"
								component={Fields.InputText}
								placeholder="Ism"
							/>
						</div>

						<div className="col-12">
							<FastField
								name="last_name"
								component={Fields.InputText}
								placeholder="Familiya"
							/>
						</div>

						<div className="col-12">
							<FastField
								name="password"
								component={InputPassword}
								placeholder="Parol"
							/>
						</div>

						<div className="col-12 mb_30">
							<FastField
								name="password_confirm"
								placeholder="Parolni tasdiqlang"
								component={InputPassword}
							/>
						</div>

						<div className="col-12 mb_30">
							<FastField
								name="terms"
								component={Fields.CheckBox}
								label={
									<>
										"Ro'yxatdan o'tish orqali siz bizning{" "}
										<a className="color_brand-blue" href="#">
											Ommaviy oferta
										</a> va <a className="color_brand-blue" href="#">
											Maxfiylik siyosatiga 
										</a> 
										{" "}rozilik bildirasiz.
									</>
								}
							/>
						</div>

						<div className="col-12 mb_15">
							<Button
								className="btn w_full"
								design="primary"
								type="submit"
								text="Ro'yxatdan o'tish"
								isLoading={isSubmitting}
							/>
						</div>
					</>
				)}
			</Container.Form>

			<Typography Type="p" className="text-align_center control__text">
				{() => (
					<>
						Ro'yxatdan o'tganmisiz?{" "}
						<AppLink link="/login" className="color_brand-blue" text="Tizimga kirish" />
					</>
				)}
			</Typography>
		</>
	);
};

export default Register;
