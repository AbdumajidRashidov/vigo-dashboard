import { lazy } from "react";

import "./styles/profile.scss";

const Profile = lazy(() => import("./pages/Profile"));

export const ProfileRoutes = [
	{
		path: "/profile",
		element: <Profile />,
	},
];
