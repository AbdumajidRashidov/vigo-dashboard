import { lazy } from "react";

const KitchenMenu = lazy(() => import("./pages/KitchenMenu"));
const KitchenMenuReady = lazy(() => import("./pages/KitchenMenuReady"));
const KitchenOrder = lazy(() => import("./pages/KitchenOrder"));
const KitchenOrderSingle = lazy(() => import("./pages/KitchenOrderSingle"));
const Food = lazy(() => import("./pages/Food"));

export const KitchenRoutes = [
	{
		path: "/kitchen/menu",
		element: <KitchenMenu />,
	},
	{
		path: "/kitchen/order",
		element: <KitchenOrder />,
	},
	{
		path: "/kitchen/order/:orderId",
		element: <KitchenOrderSingle />,
	},
	{
		path: "/kitchen/food",
		element: <Food />,
	},
	{
		path: "/kitchen/menu-ready",
		element: <KitchenMenuReady />,
	},
];
