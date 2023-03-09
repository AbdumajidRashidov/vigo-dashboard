import { lazy } from "react";

import "./style/cashbox.scss";

const Income = lazy(() => import("./pages/Income"));
const Debtors = lazy(() => import("./pages/Debtors"));
const Outgo = lazy(() => import("./pages/Outgo"));
const CashboxStatistics = lazy(() => import("./pages/CashboxStatistics"));
const CashboxOrders = lazy(() => import("./pages/CashboxOrder"));
const CashboxOrderSingle = lazy(() => import("./pages/CashboxOrderSingle"));

export const CashboxRoutes = [
	{
		path: "/cashbox/income",
		element: <Income />,
	},
	{
		path: "/cashbox/debtors",
		element: <Debtors />,
	},
	{
		path: "/cashbox/outgo",
		element: <Outgo />,
	},
	{
		path: "/cashbox/order",
		element: <CashboxOrders />,
	},
	{
		path: "/cashbox/order/:orderId",
		element: <CashboxOrderSingle />,
	},
	{
		path: "/cashbox/statistics",
		element: <CashboxStatistics />,
	},
];
