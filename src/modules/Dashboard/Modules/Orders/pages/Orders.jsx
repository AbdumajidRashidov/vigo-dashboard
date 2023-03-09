import React, { useState } from "react";
import "../styles/orders.scss";
import { useNavigate } from "react-router-dom";

import Container from "containers";
import { useOverlay } from "hooks";
import { FastField } from "formik";

import {
  PageHeading,
  Table,
  Fields,
  Avatar,
  Typography,
  AppLink,
  Status,
} from "components";
// import { AddVendorDrawer }  from "../components/VendorDrawer";
import { OrdersFilter } from "../components/OrdersFilter";

const Orders = () => {
  const [filter, setFilter] = useState({});

  const navigate = useNavigate();

  const data = [
    {
      id: "#123a12",
      first_name: "Falonchi",
      last_name: "Falonchiyev",
      name: "Jonibek Negmurodov",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "active",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1", "kanal2"],
      last_activity: "12.12.2121 12:21",
      payment_type: "Naqd",
    },
    {
      id: "#123a12",
      payment_type: "Naqd",
      first_name: "Falonchi",
      last_name: "Falonchiyev",
      name: "Jonibek Negmurodov",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "inactive",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1", "kanal2"],
      last_activity: "12.12.2121 12:21",
    },
  ];

  return (
    <>
      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "Buyurtmalar" },
        ]}
        title="Buyurtmalar"
        btnText="+ Buyurtma qo'shish"
        mainAction={() => navigate("/dashboard/orders-add")}
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday buyurtmalar yo'q"
        filterComponent={<OrdersFilter setFilter={setFilter} />}
        // isLoading={debtorList.isLoading}
        // onRowClick={(client)=>navigate(`/client/${get(client, "name")}`)}
        editAction={() => {}}
        deleteAction={() => {}}
        columns={[
          {
            title: "Sotib oluvchi FIO",
            dataKey: "name",
            render: (value) => (
              <div style={{ width: "180px" }}>
                <AppLink
                  link={`/orders/${value}`}
                  className="d-flex table_user align-items-center justify-content-between"
                >
                  <div>
                    <Typography
                      Type="p"
                      className="table__heading"
                      style={{ marginBottom: "5px" }}
                      text={value}
                    />
                  </div>
                </AppLink>
              </div>
            ),
          },
          {
            title: "To'lov holati",
            dataKey: "status",
            className: "white-space_no-wrap",
            render: (value) => <Status type={"warning"} message={value} />,
          },
          {
            title: "To'lov turi",
            dataKey: "payment_type",
            render: (value) => value,
          },
          {
            title: "Buyurtma holati",
            dataKey: "status",
            render: (value) => <Status type={"success"} message={value} />,
          },
          {
            title: "Summasi",
            dataKey: "income",
            render: (value) => <p>{value}</p>,
          },
          {
            title: "Kanal",
            dataKey: "channels",
            render: (value) =>
              value.map((val) => <span className=" ml_10">{val}</span>),
          },
          {
            title: "Buyurtma vaqti",
            dataKey: "time",
            render: (value) => "20.20.2020",
          },
          {
            title: "Buyurtma turi",
            dataKey: "id",
            render: (value) => "dostavka",
          },
        ]}
        items={data}
      />

      {/* <Pagination
				currentPage={debtorList.page}
				pageCount={get(debtorList, "meta.pageCount")}
				onPageChange={(newPage) => debtorList.setPage(newPage + 1)}
			/> */}
    </>
  );
};

export default Orders;
