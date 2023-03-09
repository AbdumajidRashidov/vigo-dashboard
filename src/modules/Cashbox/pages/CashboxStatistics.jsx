import React from "react";
import { PageHeading } from "components";

const CashboxStatistics = () => {
	return (
		<>
			<PageHeading
				links={[
					{ link: "/", label: "Главная" },
					{ link: "/", label: "Кассa" },
					{ label: "Статистика" },
				]}
				title="Статистика"
			/>
		</>
	);
};

export default CashboxStatistics;
