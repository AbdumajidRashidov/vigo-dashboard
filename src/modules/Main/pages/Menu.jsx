import React from "react";

import { AppLink, Typography } from "components";

import Cashbox from "assets/images/menu-cashbox.png";
import Stock from "assets/images/menu-stock.png";
import Supply from "assets/images/menu-supply.png";
import Kitchen from "assets/images/menu-kitchen.png";
import Accounting from "assets/images/menu-accounting.png";
import Hr from "assets/images/menu-hr.png";
import Management from "assets/images/menu-management.png";
import Inventory from "assets/images/menu-inventory.png";
import Administration from "assets/images/menu-administration.png";
import Settings from "assets/images/menu-settings.png";

const menu = [
	{
		img: Cashbox,
		label: "Кассa",
		link: "/cashbox/income",
	},
	{
		img: Stock,
		label: "Склад",
		link: "/stock/store",
	},
	{
		img: Supply,
		label: "Снабжение",
		link: "/supply/order",
	},
	{
		img: Kitchen,
		label: "Кухня",
		link: "/kitchen/menu",
	},
	// {
	// 	img: Accounting,
	// 	label: "Бухгалтерия",
	// 	link: "/accounting",
	// },
	// {
	// 	img: Hr,
	// 	label: "HR",
	// 	link: "/hr",
	// },
	// {
	// 	img: Management,
	// 	label: "Управление",
	// 	link: "/management",
	// },
	{
		img: Inventory,
		label: "Инвентарь",
		link: "/inventory/room",
	},
	// {
	// 	img: Administration,
	// 	label: "Администрация",
	// 	link: "/administration",
	// },
	// {
	// 	img: Hr,
	// 	label: "Персональный кабинет",
	// 	link: "/profile",
	// },
	{
		img: Settings,
		label: "Настройки",
		link: "/settings/currency",
	},
];

const Menu = () => {
	return (
		<div className="row g-4">
			{menu.map((item, index) => (
				<div key={index} className="col-3">
					<AppLink link={item.link}>
						<div className="menu__item menu__item_granted">
							<img className="menu__item-icon" src={item.img} alt="" />

							<Typography
								Type="p"
								className="fw_600 fz_18 color_txt-primary"
								text={item.label}
							/>
						</div>
					</AppLink>
				</div>
			))}
		</div>
	);
};

export default Menu;
