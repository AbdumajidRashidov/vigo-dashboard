import { lazy } from "react";

const Currency = lazy(() => import("./pages/Currency"));
const PaymentType = lazy(() => import("./pages/PaymentType"));
const Position = lazy(() => import("./pages/Position"));
const Specialization = lazy(() => import("./pages/Specialization"));
const Measure = lazy(() => import("./pages/Measure"));
const Category = lazy(() => import("./pages/Category"));
const Shift = lazy(() => import("./pages/Shift"));
const Cashbox = lazy(() => import("./pages/Cashbox"));
const Manufacturer = lazy(() => import("./pages/Manufacturer"));
const Patient = lazy(() => import("./pages/Patient"));
const Question = lazy(() => import("./pages/Question"));

export const SettingsRoutes = [
	{
		path: "/settings/currency",
		element: <Currency />,
	},
	{
		path: "/settings/payment-type",
		element: <PaymentType />,
	},
	{
		path: "/settings/position",
		element: <Position />,
	},
	{
		path: "/settings/specialization",
		element: <Specialization />,
	},
	{
		path: "/settings/measure",
		element: <Measure />,
	},
	{
		path: "/settings/category",
		element: <Category />,
	},
	{
		path: "/settings/shift",
		element: <Shift />,
	},
	{
		path: "/settings/cashbox",
		element: <Cashbox />,
	},
	{
		path: "/settings/manufacturer",
		element: <Manufacturer />,
	},
	{
		path: "/settings/patient",
		element: <Patient />,
	},
	{
		path: "/settings/question",
		element: <Question />,
	},
];
