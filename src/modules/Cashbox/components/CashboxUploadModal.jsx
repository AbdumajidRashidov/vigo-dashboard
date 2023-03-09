import React, { useState } from "react";
import { get } from "lodash";

import { useOverlay } from "hooks";
import { adapters } from "services";

import Containers from "containers";
import { Button, ModalDefault, Table, UploadExcel } from "components";
import { Statistics } from "components/PageHeading/components";
import { StuffIncomeModal } from "./StuffIncomeModal";
import { MedPlusIncomeModal } from "./MedPlusIncomeModal";

export const CashboxUploadModal = ({
	isOpen,
	handleModalClose,
	onAddedNewRecord,
	cashboxId,
	username,
	position,
}) => {
	const [excelData, setExcelData] = useState();
	const [isUploading, setIsUploading] = useState(false);

	const incomeStuff = useOverlay({ uniqueName: "incomeStuff" });
	const incomeManual = useOverlay({ uniqueName: "incomeManual" });
	const incomeExcel = useOverlay({ uniqueName: "incomeExcel" });

	return (
		<>
			<ModalDefault
				isOpen={isOpen}
				handleModalClose={handleModalClose}
				title="От Сотрудников"
				innerClass="max-width_500"
			>
				<Button
					design="grey"
					className="upload-data w_full mb_20"
					text="От Сотрудников"
					onClick={(event) => {
						handleModalClose(event);
						incomeStuff.handleOverlayOpen(event);
					}}
				/>
				<Button
					design="grey"
					className="upload-data w_full mb_20"
					text="От Med Plus (Вручную)"
					onClick={(event) => {
						handleModalClose(event);
						incomeManual.handleOverlayOpen(event);
					}}
				/>
				<UploadExcel
					className="btn__grey upload-data w_full d_block"
					url={`/cash-box/${cashboxId}/import`}
					onBeforeUpload={() => {
						setIsUploading(true);
						handleModalClose();
						incomeExcel.handleOverlayOpen();
					}}
					onFileUploaded={(response) => setExcelData(response)}
					onFinal={() => setIsUploading(false)}
				>
					От Med Plus (Excel)
				</UploadExcel>
			</ModalDefault>

			<StuffIncomeModal
				isOpen={incomeStuff.isOverlayOpen}
				handleOverlayClose={incomeStuff.handleOverlayClose}
				cashboxId={cashboxId}
				username={username}
				position={position}
				onAddedNewRecord={onAddedNewRecord}
			/>

			<MedPlusIncomeModal
				isOpen={incomeManual.isOverlayOpen}
				handleOverlayClose={incomeManual.handleOverlayClose}
				handleOverlayOpen={incomeManual.handleOverlayOpen}
				cashboxId={cashboxId}
				username={username}
				position={position}
				onAddedNewRecord={onAddedNewRecord}
			/>

			<ModalDefault
				isOpen={incomeExcel.isOverlayOpen}
				handleModalClose={incomeExcel.handleOverlayClose}
				title="Загрузка файла Excel"
				subtitle="(кассир)"
				innerClass="w_full overflow_auto"
				outerClass="px_40"
			>
				<Containers.Form
					url={`/cash-box/${cashboxId}/income-excel`}
					method="post"
					fields={[
						{
							name: "xlsData",
							validationType: "array",
							value: get(excelData, "data"),
						},
					]}
				>
					{() => (
						<>
							<Statistics
								className="mb_20"
								statistics={adapters.excelAdapter(get(excelData, "statistics"))}
							/>

							<div className="mb_70 overflow_auto">
								<Table
									rowKey="date"
									columns={[
										{
											title: "ID пациента",
											dataKey: "patient_id",
											render: (value) => value,
										},
										{
											title: "Пациент (или сотрудник)",
											dataKey: "patient_name",
											render: (value) => value,
										},
										{
											title: "Комментарий",
											dataKey: "comment",
											render: (value) => value,
										},
										{
											title: "Cумма",
											dataKey: "payment_amount",
											render: (value) => value,
										},
										{
											title: "способ оплаты",
											dataKey: "payment_type",
											render: (value) => value,
										},
										{
											title: "Дата",
											dataKey: "date",
											render: (value) => value,
										},
									]}
									items={get(excelData, "data")}
									isLoading={isUploading}
								/>
							</div>

							<div className="d-flex align-items-center justify-content-center">
								<Button
									design="secondary"
									type="reset"
									className="btn mr_40 w_180"
									text="Отмена"
									onClick={incomeExcel.handleOverlayClose}
								/>
								<Button
									design="primary"
									type="submit"
									className="btn w_180"
									text="Загрузить"
									onClick={incomeExcel.handleOverlayClose}
									isDisabled={isUploading}
								/>
							</div>
						</>
					)}
				</Containers.Form>
			</ModalDefault>
		</>
	);
};
