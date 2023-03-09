import React, { useState } from "react";
import { get } from "lodash";

import { useDeleteWithConfirm, useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Table, ConfirmModal, Pagination } from "components";
import { QuestionModal } from "../components/QuestionModal";

const Question = () => {
	const { getLanguageValue } = useGetLanguage();
	const [isUpdate, setIsUpdate] = useState(false);

	const modal = useOverlay({ uniqueName: "questionModal", onClose: () => setIsUpdate(false) });

	const questionList = useFetchList({ url: "/question" });
	const questionSingle = useFetchOne({
		url: "/question",
		refetchStatus: isUpdate,
		queryOptions: {
			enabled: false,
		},
	});
	const questionDelete = useDeleteWithConfirm({
		uniqueName: "confirmQuestionDelete",
		url: "/question",
	});

	return (
		<>
			<ConfirmModal
				isOpen={questionDelete.isOverlayOpen}
				cancelAction={questionDelete.handleOverlayClose}
				successAction={() => {
					questionDelete
						.mutateAsync(questionDelete.id)
						.then(() => questionList.refetch());
					questionDelete.handleOverlayClose();
				}}
			/>

			<QuestionModal
				values={isUpdate && questionSingle.data}
				isOpen={modal.isOverlayOpen}
				handleModalClose={modal.handleOverlayClose}
				isUpdate={isUpdate}
				onSuccess={() => {
					modal.handleOverlayClose();
					questionList.refetch();
				}}
			/>

			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Настройки" },
					{ label: "Вопросы" },
				]}
				title="Вопросы"
				btnText="Добавить вопрос"
				mainAction={modal.handleOverlayOpen}
				filterAction={() => {}}
				sortAction={() => {}}
			/>

			<Table
				isLoading={questionList.isLoading}
				editAction={(question) => {
					setIsUpdate(true);
					questionSingle.setId(get(question, "id"));
					modal.handleOverlayOpen();
				}}
				deleteAction={(question) => {
					questionDelete.setId(get(question, "id"));
					questionDelete.handleOverlayOpen();
				}}
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Заголовок",
						dataKey: "title",
						render: (value) => getLanguageValue(value),
					},
					{
						title: "Подзаголовок",
						dataKey: "subtitle",
						render: (value) => getLanguageValue(value),
					},
					{
						title: "sort",
						dataKey: "sort",
						render: (value) => value,
					},
				]}
				items={questionList.data}
			/>

			<Pagination
				pageCount={get(questionList, "meta.pageCount")}
				currentPage={questionList.menu}
				onPageChange={(newPage) => {
					questionList.setPage(newPage + 1);
				}}
			/>
		</>
	);
};

export default Question;
