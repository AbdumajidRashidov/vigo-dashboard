import { lazy } from "react";

import "./style/stock.scss";

const Product = lazy(() => import("./pages/Product"));
const Provider = lazy(() => import("./pages/Provider"));
const Store = lazy(() => import("./pages/Store"));
const StoreProduct = lazy(() => import("./pages/StoreProduct"));
const StoreOrder = lazy(() => import("./pages/StoreOrder"));
const StoreOrderSingle = lazy(() => import("./pages/StoreOrderSingle"));

export const StocksRoutes = [
	{
		path: "/stock/product",
		element: <Product />,
	},
	{
		path: "/stock/provider",
		element: <Provider />,
	},
	{
		path: "/stock/store",
		element: <Store />,
	},
	{
		path: "/stock/store/:storeId",
		element: <StoreProduct />,
	},
	{
		path: "/stock/order",
		element: <StoreOrder />,
	},
	{
		path: "/stock/order/:orderId",
		element: <StoreOrderSingle />,
	},
];
