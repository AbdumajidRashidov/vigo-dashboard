import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FastField } from "formik";
import { get } from "lodash";

import { storage } from "services";
import { auth } from "store/actions";
import { useOverlay } from "hooks";

import Containers from "containers";
import { Language } from "layouts/components/Language";
import { Fields, Typography, InputPassword, Button, AppLink, TabBase } from "components";
import { SMSModal } from "../components/SMSModal";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [tabType, setTabType] = useState("Telefon");
	const modal = useOverlay({ uniqueName: "smsModal", onClose: () => setIsUpdate(false) });

	return (
		<>
			
			<SMSModal
			isOpen={modal.isOverlayOpen}
			handleModalClose={modal.handleOverlayClose}
			onSuccess={() => {
				modal.handleOverlayClose();
			}}/>

			<div className="auth__top mb_50 d-flex align-items-center justify-content-between">
				<div className="logo">
					<Typography Type="h1">Logo</Typography>
				</div>
				<div className="lang">
					<Language/>
				</div>
			</div>
			<div className="auth__type">
				<TabBase
					className="mb_30"
					labels={["Telefon","Email"]}
					currentLabel={tabType}
					onPaneChange={(active, event) => setTabType(active)}
				/>
			</div>
			<div className="auth__heading mb_20">
				<Typography
					Type="p"
					className="auth__subtitle"
					text="Tizimga kirish"
				/>
			</div>

			{tabType == "Email" ? 
				<Containers.Form
				url="/user/sign-in"
				params={{
					include: "userDetail,userDetail.avatar,position",
				}}
				className="row g-3"
				onSuccess={(user) => {
					dispatch(auth.success("token"));
					storage.set("token","token");
					navigate("/dashboard");
				}}
				fields={[
					{
						name: "username",
						validations: [{ type: "required" }],
					},
					{
						name: "password",
						validations: [{ type: "required" }],
					},
				]}
			>
				{({ isSubmitting }) => (
					<>
						<div className="col-12">
							<FastField
								name="email"
								component={Fields.InputText}
								placeholder="Email"
							/>
						</div>

						<div className="col-12 mb_30">
							<FastField
								name="password"
								component={InputPassword}
								placeholder="Parol"
							/>
						</div>

						<div className="col-12 mb_30 text-align_left">
							<AppLink
								link="/forgot-password"
								className="color_brand-blue"
								text="Parolni unutdingizmi?"
							/>
						</div>

						<div className="col-12 mb_15">
							<Button
								className="btn w_full"
								design="primary"
								type="submit"
								text="Kirish"
								isLoading={isSubmitting}
							/>
						</div>
					</>
				)}
				</Containers.Form> 
			:
				<Containers.Form
					url="/user/sign-in"
					params={{
						include: "userDetail,userDetail.avatar,position",
					}}
					className="row g-3"
					onSuccess={(user) => {
						dispatch(auth.success("token"));
						storage.set("token","token");
						navigate("/dashboard");
					}}
					fields={[
						{
							name: "country",
							validations: [{ type: "required" }],
						},
						{
							name: "phone",
							validations: [{ type: "required" }],
						},
						{
							name: "password",
							validations: [{ type: "required" }],
						},
					]}
				>
					{({ isSubmitting }) => (
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

							<div className="col-12 mb_30">
								<FastField
									name="password"
									component={InputPassword}
									placeholder="Parol"
								/>
							</div>

							<div className="col-12 mb_30 text-align_left">
								<AppLink
									link="/forgot-password"
									className="color_brand-blue"
									text="Parolni unutdingizmi?"
								/>
							</div>

							<div className="col-12 mb_15">
								<Button
									className="btn w_full"
									design="primary"
									type="button"
									text="Kirish"
									isLoading={isSubmitting}
									onClick={modal.handleOverlayOpen}
								/>
							</div>
						</>
					)}
				</Containers.Form> 
			}
			

			<Typography Type="p" className="text-align_center control__text">
				{() => (
					<>
						Hisobingiz yo'qmi?{" "}
						<AppLink
							link="/register"
							className="color_brand-blue"
							text="Ro'yxatdan o'ting"
						/>
					</>
				)}
			</Typography>
		</>
	);
};

export default Login;
