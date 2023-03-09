import React from "react";
import { FastField } from "formik";


import Containers from "containers";
import { ModalDefault, Fields, Button ,Typography, AppLink} from "components";

export const PhoneModal = ({ isOpen, handleModalClose, onSuccess, values }) => {
	return (
		<ModalDefault
			innerClass="max-width_700"
			isOpen={isOpen}
            title="Telefon qilish"
			handleModalClose={handleModalClose}
		>
			<Typography Type="p" text="P telefoniya(virtual raqam) xizmati sizning tarifingizda ulanmagan. Ushbu xizmatni ulash yoki batafsil ma'lumot olish uchun qo'llab-quvvatlash markaziga murojaat qiling."/>
		</ModalDefault>
	);
};