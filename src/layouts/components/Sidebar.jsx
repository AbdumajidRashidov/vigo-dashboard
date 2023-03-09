import React from "react";
import { useLocation } from "react-router-dom";

import { AppLink, Typography } from "components";
import { SubMenu } from "./SubMenu";

import { menu } from "../helpers/menu";
import { formatters } from "services/utils";

export const Sidebar = () => {
	const { pathname } = useLocation();
	const menuKey = pathname.split("/")[1];

	return (
		<aside className="sidebar">
			<AppLink
				link="/"
				append={
					<h1>
						Logo
					</h1>

					// <img
					// 	src={require("assets/images/sidebar-logo.png")}
					// 	className="sidebar__logo brand-logo"
					// 	alt="Logo"
					// />
				}
			/>

			<Typography
				Type="h2"
				className="sidebar__title title_md"
				text={formatters.menuName(menuKey)}
			/>

			{menu[menuKey]?.map((menu, index) =>
				menu.submenu ? (
					<SubMenu key={menu.id} menu={menu} />
				) : (
					<AppLink
						key={menu.id}
						className="sidebar__link"
						link={menu.link}
						prepend={menu.icon}
						text={menu.label}
						activeClass="sidebar__link_active"
					/>
				)
			)}
		</aside>
	);
};
