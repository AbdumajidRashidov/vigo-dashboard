import React from "react";

import { ReactComponent as IncomeIcon } from "assets/icons/sidebar-income.svg";
import { ReactComponent as OutgoIcon } from "assets/icons/sidebar-outgo.svg";
import { ReactComponent as DebtorsIcon } from "assets/icons/sidebar-debtors.svg";
import { ReactComponent as StatisticsIcon } from "assets/icons/sidebar-statistics.svg";
import { ReactComponent as ProvidersIcon } from "assets/icons/sidebar-providers.svg";
import { ReactComponent as StockIncomeIcon } from "assets/icons/sidebar-stock-income.svg";
import { ReactComponent as OrderIcon } from "assets/icons/sidebar-stock-orders.svg";
import { ReactComponent as FoodMenuIcon } from "assets/icons/food-menu.svg";
import { ReactComponent as FoodIcon } from "assets/icons/food.svg";
import { ReactComponent as InventoryIcon } from "assets/icons/inventory.svg";
import { ReactComponent as WriteOffIcon } from "assets/icons/write-off.svg";

export const menu = {
  dashboard: [
    {
      id: "dashboard",
      link: "/dashboard",
      label: "Asosiy",
      icon: <IncomeIcon className="mr_5" />,
    },
    {
      id: "new_order",
      link: "/dashboard/orders-add",
      label: "Yangi buyurtma",
      icon: <OutgoIcon className="mr_5" />,
    },
    {
      id: "orders",
      link: "/dashboard/orders",
      label: "Buyurtmalar",
      icon: <OrderIcon className="mr_5" />,
    },
    {
      id: "clients",
      link: "/dashboard/clients",
      label: "Mijozlar",
      icon: <DebtorsIcon className="mr_5" />,
    },
    {
      id: "menu",
      link: "/dashboard/menu",
      label: "Menyu",
      icon: <StatisticsIcon className="mr_5" />,
    },
    {
      id: "chef",
      link: "/dashboard/chef",
      label: "Oshpaz",
      icon: <StatisticsIcon className="mr_5" />,
    },
    {
      id: "platforms",
      // link: "/supply/cash",
      label: "Platformalar",
      icon: <OutgoIcon className="mr_5" />,
      submenu: [
        {
          id: "web-site",
          link: "/dashboard/platforms/web-site",
          label: "Veb sayt",
        },
        {
          id: "mobile-app",
          link: "/dashboard/platforms/mobile-app",
          label: "Mobil ilova",
        },
        {
          id: "telegram-bot",
          link: "/dashboard/platforms/telegram-bot",
          label: "Telegram bot",
        },
      ],
    },
    {
      id: "marketing",
      // link: "/supply/cash",
      label: "Marketing",
      icon: <OutgoIcon className="mr_5" />,
      submenu: [
        {
          id: "notifications",
          link: "/dashboard/notifications",
          label: "Bildirishnomalar",
        },
        {
          id: "promocodes",
          link: "/dashboard/promocodes",
          label: "Promokodlar",
        },
        {
          id: "banners",
          link: "/dashboard/banners",
          label: "Bannerlar",
        },
      ],
    },
    {
      id: "settings",
      // link: "/supply/cash",
      label: "Sozlamalar",
      icon: <OutgoIcon className="mr_5" />,
      submenu: [
        {
          id: "all-settings",
          link: "/dashboard/settings",
          label: "Umumiy sozlamalar",
        },
        {
          id: "filials",
          link: "/dashboard/filials",
          label: "Filiallar",
        },
        {
          id: "employees",
          link: "/dashboard/employees",
          label: "Xodimlar",
        },
        {
          id: "category",
          link: "/dashboard/categories",
          label: "Kategoriyalar",
        },
        {
          id: "delevery",
          link: "/dashboard/delevery",
          label: "Yetkazib berish",
        },
        {
          id: "integrations",
          link: "/dashboard/integrations",
          label: "Integratsiyalar",
        },
        {
          id: "billing",
          link: "/dashboard/billing",
          label: "Billing (to'lov)",
        },
        {
          id: "comments",
          link: "/dashboard/comments",
          label: "Izohlar",
        },
        {
          id: "hall",
          link: "/dashboard/hallandtable",
          label: "Stollar/Zallar",
        },
      ],
    },
  ],
};
