import { lazy } from "react";

const Vendors = lazy(() => import("./Modules/Vendors/pages/Vendors"));
const Settings = lazy(() => import("./Modules/Settings/pages/Settings"));
const Filials = lazy(() => import("./Modules/Settings/pages/Filials"));
const Employees = lazy(() => import("./Modules/Settings/pages/Employees"));
const Categories = lazy(() => import("./Modules/Settings/pages/Categories"));
const Clients = lazy(() => import("./Modules/Clients/pages/Clients"));
const ClientSingle = lazy(() => import("./Modules/Clients/pages/ClientSingle"));
const Orders = lazy(() => import("./Modules/Orders/pages/Orders"));
const OrdersDetail = lazy(() => import("./Modules/Orders/pages/OrdersDetail"));
const AddOrders = lazy(() => import("./Modules/Orders/pages/AddOrders"));
const Menu = lazy(() => import("./Modules/Menu/pages/Menu"));
const Notifications = lazy(() =>
  import("./Modules/Marketing/pages/Notifications")
);
const Promocodes = lazy(() => import("./Modules/Marketing/pages/Promocodes"));
const Banners = lazy(() => import("./Modules/Marketing/pages/Banners"));
const Integrations = lazy(() =>
  import("./Modules/Settings/pages/Integrations")
);
const PaymeIntegration = lazy(() =>
  import("./Modules/Settings/pages/PaymeIntegration")
);
const ClickIntegration = lazy(() =>
  import("./Modules/Settings/pages/ClickIntegration")
);
const UzumIntegration = lazy(() =>
  import("./Modules/Settings/pages/UzumIntegration")
);
const DeleveryDetail = lazy(() =>
  import("./Modules/Settings/pages/DeleveryDetail")
);
const Delevery = lazy(() => import("./Modules/Settings/pages/Delevery"));
const Billing = lazy(() => import("./Modules/Settings/pages/Billing"));
const Comments = lazy(() => import("./Modules/Settings/pages/Comments"));
const OrdersReasons = lazy(() =>
  import("./Modules/Settings/pages/OdersReasons")
);
const Vacancies = lazy(() => import("./Modules/Settings/pages/Vacancies"));
const Pages = lazy(() => import("./Modules/Settings/pages/Pages"));
const HallAndTable = lazy(() =>
  import("./Modules/Settings/pages/HallAndTable")
);
const JowiIntegration = lazy(() =>
  import("./Modules/Settings/pages/JowiIntegration")
);
const IikoIntegration = lazy(() =>
  import("./Modules/Settings/pages/IikoIntegration")
);
const RkeepperIntegration = lazy(() =>
  import("./Modules/Settings/pages/RkeepperIntegration")
);

export const DashboardRoutes = [
  {
    path: "/dashboard",
    element: <Vendors></Vendors>,
  },
  {
    path: "/dashboard/settings",
    element: <Settings></Settings>,
  },
  {
    path: "/dashboard/filials",
    element: <Filials></Filials>,
  },
  {
    path: "/dashboard/employees",
    element: <Employees></Employees>,
  },
  {
    path: "/dashboard/categories",
    element: <Categories></Categories>,
  },
  {
    path: "/dashboard/clients",
    element: <Clients></Clients>,
  },
  {
    path: "/dashboard/orders",
    element: <Orders></Orders>,
  },
  {
    path: "/dashboard/order/:name",
    element: <OrdersDetail></OrdersDetail>,
  },
  {
    path: "/dashboard/orders-add",
    element: <AddOrders></AddOrders>,
  },
  {
    path: "/dashboard/menu",
    element: <Menu></Menu>,
  },
  {
    path: "/dashboard/client/:name",
    element: <ClientSingle></ClientSingle>,
  },
  {
    path: "/dashboard/notifications",
    element: <Notifications></Notifications>,
  },
  {
    path: "/dashboard/promocodes",
    element: <Promocodes></Promocodes>,
  },
  {
    path: "/dashboard/banners",
    element: <Banners></Banners>,
  },
  {
    path: "/dashboard/employees/:id",
    element: <DeleveryDetail></DeleveryDetail>,
  },
  {
    path: "/dashboard/integrations",
    element: <Integrations></Integrations>,
  },
  {
    path: "/dashboard/integrations/payme",
    element: <PaymeIntegration></PaymeIntegration>,
  },
  {
    path: "/dashboard/integrations/click",
    element: <ClickIntegration></ClickIntegration>,
  },
  {
    path: "/dashboard/integrations/uzum",
    element: <UzumIntegration></UzumIntegration>,
  },
  {
    path: "/dashboard/integrations/jowi",
    element: <JowiIntegration></JowiIntegration>,
  },
  {
    path: "/dashboard/integrations/iiko",
    element: <IikoIntegration></IikoIntegration>,
  },
  {
    path: "/dashboard/integrations/rkeepper",
    element: <RkeepperIntegration></RkeepperIntegration>,
  },
  {
    path: "/dashboard/delevery",
    element: <Delevery></Delevery>,
  },
  {
    path: "/dashboard/billing",
    element: <Billing></Billing>,
  },
  {
    path: "/dashboard/orders-reasons",
    element: <OrdersReasons></OrdersReasons>,
  },
  {
    path: "/dashboard/vacancy",
    element: <Vacancies></Vacancies>,
  },
  {
    path: "/dashboard/pages",
    element: <Pages></Pages>,
  },
  {
    path: "/dashboard/comments",
    element: <Comments></Comments>,
  },
  {
    path: "/dashboard/hallandtable",
    element: <HallAndTable></HallAndTable>,
  },
];
