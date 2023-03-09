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
import { Fields, Typography, Button, FileUpload } from "components";

const Questionnaire = () => {
    const [step,setStep] = useState("1")
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<>
			<div className="auth__top mb_50 d-flex align-items-center justify-content-between">
				<div className="logo">
					<Typography Type="h1">Logo</Typography>
				</div>
				<div className="lang">
					<Language/>
				</div>
			</div>
			<div className="auth__heading mb_20">
				<Typography
					Type="p"
					className="auth__subtitle"
					text="Quyidagi malumotlarni to'ldirishingizni so'raymiz"
				/>
			</div>

			{step == "1" ? 
				<Containers.Form
				url="/user/sign-in"
				params={{
					include: "userDetail,userDetail.avatar,position",
				}}
				className="row g-3"
				onSuccess={(user) => {
					dispatch(auth.success("token"));
					storage.set("token","token");
                    
					navigate("/");
				}}
				fields={[
					{
						name: "lang",
						validations: [{ type: "required" }],
                        validationType:"object"
					},
					{
						name: "valyuta",
						validations: [{ type: "required" }],
                        validationType:"object"
					},
				]}
			>
				{({ isSubmitting }) => (
					<>
						<div className="col-12">
							<FastField
								name="lang"
								component={Fields.Select}
								placeholder="Tillar"
                                isMulti={true}
                                options={[{label:"O'zbek",value:"uz"},{label:"Rus",value:"ru"},{label:"Ingliz",value:"en"}]}
							/>
						</div>

						<div className="col-12 mb_30">
                            <FastField
								name="valuta"
								component={Fields.Select}
								placeholder="Valyutalar"
                                isMulti={true}
                                options={[{label:"So'm",value:"uzs"},{label:"Rubl",value:"ru"},{label:"Dollar",value:"usd"}]}
							/>
						</div>

						<div className="col-12 mb_15">
							<Button
								className="btn w_full"
								design="primary"
								type="submit"
								text="Keyingisi"
                                onClick={()=>setStep("2")}
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
						navigate("/");
					}}
					fields={[
						{
							name: "name",
							validations: [{ type: "required" }],
						},
						{
							name: "manager_name",
							validations: [{ type: "required" }],
						},
						{
							name: "working_contact",
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
							name: "country",
							validations: [{ type: "required" }],
                            validationType:"object"
						},
                        {
							name: "region",
							validations: [{ type: "required" }],
                            validationType:"object"
						},
                        {
							name: "city",
							validations: [{ type: "required" }],
                            validationType:"object"
						},
                        {
							name: "location",
							validations: [{ type: "required" }],
						},
                        {
							name: "coordinata",
							validations: [{ type: "required" }],
						},
                        {
							name: "virtual_tour",
							validations: [{ type: "required" }],
						},
                        {
							name: "working_time",
							validations: [{ type: "required" }],
						},
                        {
							name: "images",
							validations: [{ type: "required" }],
                            validationType:"object"
						},
					]}
				>
					{({ isSubmitting }) => (
						<>
							<div className="col-12">
								<FastField
									name="name"
									component={Fields.InputText}
									placeholder="Fillial nomi"
								/>
							</div>
							<div className="col-6">
								<FastField
									name="manager_name"
									component={Fields.InputText}
									placeholder="Fillial rahbari FIOsi"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="phone"
									component={Fields.InputMask}
									placeholder="Telefon raqam"
                                    prepend=""
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="working_contact"
									component={Fields.InputText}
									placeholder="Ish raqami (sayt)"
                                    prepend=""
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="email"
									component={Fields.InputText}
									placeholder="Email"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="country"
									component={Fields.Select}
									placeholder="Mamlakat"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="region"
									component={Fields.Select}
									placeholder="Viloyat"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="city"
									component={Fields.Select}
									placeholder="Tuman (Shahar)"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="city"
									component={Fields.InputText}
									placeholder="Manzil, Ko'cha, uy..."
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="location"
									component={Fields.InputText}
									placeholder="Mo'ljal"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="coordinata"
									component={Fields.InputText}
									placeholder="Manzil kordinatasi"
								/>
							</div>
                            <div className="col-6">
								<FastField
									name="virtual_tour"
									component={Fields.InputText}
									placeholder="Virtual tur (link)"
								/>
							</div>
							<div className="col-6 mb_30">
								<FastField
									name="working_time"
									component={Fields.RangePicker}
									placeholder="Ish vaqti"
								/>
							</div>
                            <div className="col-12 mb_30">
								<FastField
									name="images"
                                    className="form-control"
									component={FileUpload}
                                    title="Rasmlar yuklash"
								/>
							</div>
							<div className="col-12 mb_15">
								<Button
									className="btn w_full"
									design="primary"
									type="submit"
									text="Yuborish"
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

export default Questionnaire;
