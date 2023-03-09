import React, { useState } from "react";
import { get } from "lodash";

import { utils } from "services";
import { useOverlay } from "hooks";

import { PageHeading, Status, Table } from "components";
import { AddUzumDrawer } from "../components/Drawers/AddUzumDrawer";

const UzumIntenration = () => {
  const modal = useOverlay({
    uniqueName: "addUzumModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "1",
      name: "Buxoro",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "active",
      address: "Buxoro shahar",
      manager: "John Doe",
    },
  ];

  return (
    <>
      <AddUzumDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { link: "/dashboard/integrations", label: "Integratsiyalar" },
          { label: "Uzumbank (apelsin) integratsiya" },
        ]}
        title="payme"
        btnText="+ Qo'shish"
        mainAction={modal.handleOverlayOpen}
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday integtarsiya yo'q"
        // isLoading={debtorList.isLoading}
        columns={[
          {
            title: "ID",
            dataKey: "id",
            render: (value) => value,
          },
          {
            title: "Cash id",
            dataKey: "merchand_id",
            className: "white-space_no-wrap",
            render: (value) => "123456789",
          },
          {
            title: "Ulangan vaqti",
            dataKey: "connect_date",
            render: (value) => "12.02.2023 | 23:00",
          },

          {
            title: "Statusi",
            dataKey: "status",
            render: (value) => <Status message={value} type="success" />,
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

export default UzumIntenration;
