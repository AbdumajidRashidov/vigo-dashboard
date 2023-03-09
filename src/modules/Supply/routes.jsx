import { lazy } from "react";

const SupplyOrder = lazy(() => import("./pages/SupplyOrder"));
const SupplyOrderSingle = lazy(() => import("./pages/SupplyOrderSingle"));

export const SupplyRoutes = [
	{
		path: "/supply/order",
		element: <SupplyOrder />,
	},
	{
		path: "/supply/order/:orderId",
		element: <SupplyOrderSingle />,
	},
];
