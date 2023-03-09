import React from "react";

import { CashboxUploadModal } from "./CashboxUploadModal";
import { AddOutgo } from "./AddOutgo";

export const CashboxCash = ({
	username,
	position,
	uploadModal,
	incomeModalSuccess,
	addOutgo,
	cashboxId,
	outgoAddSuccess,
}) => {
	return (
		<>
			<CashboxUploadModal
				isOpen={uploadModal.isOverlayOpen}
				handleModalClose={uploadModal.handleOverlayClose}
				cashboxId={cashboxId}
				username={username}
				position={position}
				onAddedNewRecord={incomeModalSuccess}
			/>

			<AddOutgo
				isOpen={addOutgo.isOverlayOpen}
				handleModalClose={addOutgo.handleOverlayClose}
				cashboxId={cashboxId}
				username={username}
				position={position}
				onAddedNewRecord={outgoAddSuccess}
			/>
		</>
	);
};
