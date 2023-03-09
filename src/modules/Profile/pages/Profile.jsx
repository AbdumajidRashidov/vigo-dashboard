import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FastField } from "formik";
import { get, isArray } from "lodash";

import { useFetchList, useFetchOne, useGetLanguage } from "hooks";
import { storage, time, adapters, utils, constants } from "services";
import { auth } from "store/actions";

import Containers from "containers";
import { Button, Fields, Typography, FileUpload, AvatarUpload, Spinning } from "components";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import { ReactComponent as PassportSeriesIcon } from "assets/icons/position.svg";
import { ReactComponent as DocumentIcon } from "assets/icons/document.svg";
import { ReactComponent as AcademicIcon } from "assets/icons/academic.svg";
import { ReactComponent as TimeIcon } from "assets/icons/time.svg";
import { ReactComponent as GeolocationIcon } from "assets/icons/geolocation-marker.svg";

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { getLanguageValue } = useGetLanguage();

	const questions = useFetchList({ url: "/question" });
	const { data: user } = useFetchOne({
		url: "/user/get-me",
		urlSearchParams: {
			include: "userDetail,userDetail.avatar,specialization,position,documents,questions",
		},
	});

	console.log(user);

	return (
		<Containers.Form
			url="/user/detail-update"
			params={{ include: "userDetail,userDetail.avatar,position" }}
			onSuccess={(response) => {
				dispatch(auth.success(get(response, "data")));
				storage.set("token", get(response, "data.token"));
				navigate("/");
			}}
			fields={[
				{
					name: "first_name",
					value: get(user, "userDetail.first_name"),
					validations: [{ type: "typeError" }, { type: "required" }],
				},
				{
					name: "last_name",
					value: get(user, "userDetail.last_name"),
					validations: [{ type: "typeError" }, { type: "required" }],
				},
				{
					name: "middle_name",
					value: get(user, "userDetail.middle_name"),
					validations: [{ type: "typeError" }, { type: "required" }],
				},
				{
					name: "phone",
					value: utils.formatters.formatPhoneView(get(user, "phone")),
					disabled: true,
				},
				{
					name: "birthdate",
					value: time.formatTimestamp(get(user, "userDetail.birthdate")),
					validations: [{ type: "required" }],
					onSubmitValue: (value) => time.toTimestamp(value),
				},
				{
					name: "passport_number",
					value: get(user, "userDetail.passport_number"),
					validations: [{ type: "required" }],
				},
				{
					name: "address",
					value: get(user, "userDetail.address"),
					validations: [{ type: "required" }],
				},
				{
					name: "birthplace",
					value: get(user, "userDetail.birthplace"),
					validations: [{ type: "required" }],
				},
				{
					name: "username",
					value: get(user, "username"),
					validations: [{ type: "required" }],
				},
				{
					name: "chat_id",
					value: get(user, "userDetail.chat_id"),
					validations: [{ type: "required" }],
				},
				{
					name: "position_id",
					validationType: "object",
					value: get(user, "position"),
					disabled: true,
				},
				{
					name: "specialization_id",
					validationType: "object",
					validations: [{ type: "typeError" }],
					value: get(user, "specialization"),
					onSubmitValue: (value) => get(value, "id"),
				},
				{
					name: "diploma_number",
					value: get(user, "userDetail.diploma_number"),
					validations: [{ type: "required" }],
				},
				{
					name: "experience",
					validationType: "number",
					value: get(user, "userDetail.experience"),
					validations: [{ type: "required" }],
					onSubmitValue: (value) => utils.formatters.formatCurrencyApi(value),
				},
				{
					name: "avatar_id",
					value: get(user, "userDetail.avatar.id"),
				},
				{
					name: "questions",
					validationType: "array",
					value: adapters.questionAdapter(get(user, "questions"), questions.data),
					validations: [{ type: "required" }],
					onSubmitValue: (value) =>
						isArray(value)
							? value.map((item) => ({
									question_id: get(item, "question.id"),
									answer: item.answer,
							  }))
							: "",
				},
				{
					name: "documents",
					validationType: "array",
					value: get(user, "documents")
						? adapters.documentAdapter(get(user, "documents"))
						: [],
					validations: [{ type: "required" }],
					onSubmitValue: (value) =>
						isArray(value)
							? value.map((item, index) => ({
									file_id: get(item, "id"),
									sort: index,
									type: 1,
							  }))
							: "",
				},
			]}
		>
			{({ isSubmitting, values, resetForm }) => (
				<>
					<Typography Type="h1" className="title_md mb_20" text="Профиль" />
					<Typography
						Type="p"
						className="subtitle_md mb_30"
						text="Персональная информация"
					/>

					<FastField
						name="avatar_id"
						component={AvatarUpload}
						className="mb_40"
						getImage="0.id"
						src={get(user, "userDetail.avatar.thumbnails.medium")}
					/>

					<div className="row g-3 mb_60">
						<div className="col-6">
							<FastField
								name="first_name"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<UserIcon />}
								placeholder="Имя"
							/>
						</div>

						<div className="col-6">
							<FastField
								name="last_name"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<UserIcon />}
								placeholder="Фамилия"
							/>
						</div>

						<div className="col-6">
							<FastField
								name="middle_name"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<UserIcon />}
								placeholder="Отчество"
							/>
						</div>

						<div className="col-6">
							<FastField
								name="birthdate"
								component={Fields.DatePicker}
								outerClass="control_grey-icon"
								placeholder="Дата рождения"
							/>
						</div>

						<div className="col-6">
							<FastField
								name="phone"
								component={Fields.InputMask}
								outerClass="control_grey-icon"
								isDisabled={true}
							/>
						</div>

						<div className="col-6">
							<FastField
								name="passport_number"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<PassportSeriesIcon />}
								isValid={(event) =>
									event.target.value.match(constants.passportRegExp)
								}
								placeholder="Серия и номер паспорта"
							/>
						</div>

						<div className="col-6">
							<FastField
								name="birthplace"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<GeolocationIcon />}
								placeholder="Место рождения"
							/>
						</div>

						<div className="col-6">
							<FastField
								name="address"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<GeolocationIcon />}
								placeholder="Адрес постоянного проживания (подробно)"
							/>
						</div>
					</div>

					<Typography Type="p" className="subtitle_md mb_20" text="Рабочая информация" />

					<div className="row g-3 mb_40">
						<div className="col-6">
							<FastField
								name="username"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<UserIcon />}
								placeholder="Имя пользователя"
							/>
						</div>

						<div className="col-6">
							<FastField
								name="chat_id"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<UserIcon />}
								placeholder="телеграм id"
							/>
						</div>

						<div className="col-6">
							<FastField
								name="position_id"
								component={Fields.AsyncSelect}
								className="control_grey-icon"
								prepend={<PassportSeriesIcon />}
								placeholder="Должность"
								loadOptionsUrl="/position"
								getOptionLabel={(option) => getLanguageValue(get(option, "title"))}
								isDisabled={true}
							/>
						</div>

						<div className="col-6">
							<FastField
								name="diploma_number"
								component={Fields.InputText}
								outerClass="control_grey-icon"
								prepend={<DocumentIcon />}
								placeholder="Дипломная серия"
								isValid={(event) => {
									const regexp = /^[A-Za-z1-9]*$/g;
									return !!event.target.value.match(regexp);
								}}
							/>
						</div>

						<div className="col-6">
							<FastField
								name="specialization_id"
								component={Fields.AsyncSelect}
								outerClass="control_grey-icon"
								prepend={<AcademicIcon />}
								placeholder="Специализация"
								loadOptionsUrl="/specialization"
								getOptionLabel={(option) => getLanguageValue(get(option, "title"))}
							/>
						</div>

						<div className="col-6">
							<FastField
								name="experience"
								component={Fields.InputMask}
								format="##"
								mask=""
								outerClass="control_grey-icon"
								prepend={<TimeIcon />}
								placeholder="Стаж"
							/>
						</div>
					</div>

					<div className="row g-4 mb_60">
						<div className="col-4">
							<FastField
								name="documents.0"
								component={FileUpload}
								title="Загрузка диплома"
								accept=".pdf"
							/>
						</div>

						<div className="col-4">
							<FastField
								name="documents.1"
								component={FileUpload}
								title="Загрузка диплома"
								accept=".pdf"
							/>
						</div>
					</div>

					<Typography Type="p" className="subtitle_md mb_20" text="Анкетные вопросы" />

					<div className="short-questions row g-5 mb_60">
						<Spinning entity={questions.data}>
							{values.questions?.map((item, index) => (
								<div key={item.id} className="short-questions__item">
									<div className="d-flex align-items-center mb_15">
										<div className="short-questions__order">{index + 1}</div>

										<Typography
											Type="p"
											className="color_txt-primary"
											text={getLanguageValue(get(item, "question.title"))}
										/>
									</div>

									<FastField
										name={`questions.${index}.answer`}
										component={Fields.InputText}
										size="md"
										outerClass="ml_55"
										placeholder="Ответить"
									/>
								</div>
							))}
						</Spinning>
					</div>

					<div className="flex_end">
						<Button
							design="secondary"
							type="reset"
							className="btn mr_20"
							text="Удалить Данные"
							onClick={resetForm}
						/>

						<Button
							type="submit"
							design="primary"
							className="btn w_180"
							text="Сохранить"
							isLoading={isSubmitting}
						/>
					</div>
				</>
			)}
		</Containers.Form>
	);
};

export default Profile;
