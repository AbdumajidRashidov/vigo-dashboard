import { lazy } from "react";

const Room = lazy(() => import("./pages/Room"));
const RoomSingle = lazy(() => import("./pages/RoomSingle"));
const RoomOrder = lazy(() => import("./pages/RoomOrder"));
const RoomOrderSingle = lazy(() => import("./pages/RoomOrderSingle"));
const RoomProductRemoved = lazy(() => import("./pages/RoomProductRemoved"));

export const InventoryRoutes = [
	{
		path: "/inventory/room",
		element: <Room />,
	},
	{
		path: "/inventory/room/:roomId",
		element: <RoomSingle />,
	},
	{
		path: "/inventory/order",
		element: <RoomOrder />,
	},
	{
		path: "/inventory/order/:orderId",
		element: <RoomOrderSingle />,
	},
	{
		path: "/inventory/removed",
		element: <RoomProductRemoved />,
	},
];
