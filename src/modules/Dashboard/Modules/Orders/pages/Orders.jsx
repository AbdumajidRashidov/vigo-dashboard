import React, { useState } from "react";
import "../styles/orders.scss";
import { useNavigate } from "react-router-dom";

import Container from "containers";
import { useOverlay } from "hooks";
import { FastField } from "formik";
import { ReactComponent as TimeIcon } from "assets/icons/time.svg";

import {
  PageHeading,
  Table,
  Fields,
  Avatar,
  Typography,
  AppLink,
  Status,
  Badge,
} from "components";
// import { AddVendorDrawer }  from "../components/VendorDrawer";
import { OrdersFilter } from "../components/OrdersFilter";
import { Timer } from "modules/Authorization/components/Timer";

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
      status: "to'lanmagan",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1", "kanal2"],
      last_activity: "12.12.2121 12:21",
      payment_type: "Naqd",
    },
    {
      id: "#123a1212",
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
            title: "No",
            dataKey: "no",
            render: (value) => "1",
          },
          {
            title: "ID (timer)",
            dataKey: "id",
            render: (value) => (
              <div
                style={{ width: "100px" }}
                className="d-flex justify-content-between flex-column"
              >
                <Typography
                  Type="p"
                  className="mb_10 "
                  style={{ marginBottom: "5px" }}
                  text={value}
                />
                <div className="timer d-flex align-items-center">
                  <TimeIcon className="mr_5" />
                  <Typography Type="p" text="2:02:00" />
                </div>
              </div>
            ),
          },
          {
            title: "Mijoz (FIO)",
            dataKey: "name",
            render: (value) => (
              <div style={{ width: "180px" }}>
                <AppLink
                  link={`/dashboard/order/${value}`}
                  className="d-flex table_user align-items-center justify-content-between"
                >
                  <div>
                    <Typography
                      Type="p"
                      className="table__heading mb_10"
                      style={{ marginBottom: "5px" }}
                      text={value}
                    />
                    <Typography
                      Type="p"
                      className="tel"
                      style={{ marginBottom: "5px" }}
                      text={"+998916469095"}
                    />
                  </div>
                </AppLink>
              </div>
            ),
          },
          {
            title: "To'lov turi/holati",
            dataKey: "status",
            className: "white-space_no-wrap",
            render: (value) => (
              <div>
                <Typography Type="p" className="mb_10" text="Naqd pul" />
                <Status type={"warning"} message={value} />
              </div>
            ),
          },
          {
            title: "Summasi",
            dataKey: "income",
            render: (value) => (
              <div style={{ width: "150px" }}>
                <p className="mb_10">{value}</p>
                <Badge text={`0% - ${value}`} design="primary" />
              </div>
            ),
          },
          {
            title: "Qabul qilingan",
            dataKey: "time",
            render: (value) => (
              <div style={{ width: "180px" }}>
                <Typography
                  Type="p"
                  className="mb_10"
                  text="05.03.2023 12:03"
                />
                <div className="timer d-flex align-items-center">
                  <TimeIcon className="mr_10" />
                  <Typography Type="p" text="2:02:00" />
                </div>
              </div>
            ),
          },
          {
            title: "Buyurtma turi/holati",
            dataKey: "type",
            render: (value) => (
              <div style={{ width: "180px" }}>
                <Typography text="Yetkazib berish" className="mb_10" Type="p" />
                <Badge text="Kuryerga biriktirildi" design="primary" />
              </div>
            ),
          },
          {
            title: "Qabul qiluvchi",
            dataKey: "id",
            render: (value) => (
              <div style={{ width: "180px" }}>
                <Typography text="Anvar Hoshimov" className="mb_10" Type="p" />
                <Badge text="Kuryer" design="primary" />
              </div>
            ),
          },
          {
            title: "Kanal/vaqti",
            dataKey: "channel",
            render: (value) => (
              <div style={{ width: "180px" }}>
                <Typography text="Telegram bot" className="mb_10" Type="p" />
                <Typography Type="p" text="2:02:00" />
              </div>
            ),
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
