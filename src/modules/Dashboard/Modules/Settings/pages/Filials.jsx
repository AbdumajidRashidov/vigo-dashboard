import React, { useState } from "react";
import { get } from "lodash";

import { utils } from "services";
import { useOverlay } from "hooks";

import { PageHeading, Status, Table } from "components";
import { AddFilialDrawer } from "../components/Drawers/FilialsDrawer";

const Filials = () => {
  const [filter, setFilter] = useState({});
  const modal = useOverlay({
    uniqueName: "addVendorModal",
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
      <AddFilialDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "Filiallar" },
        ]}
        title="Filiallar"
        btnText="+ Filial qo'shish"
        mainAction={modal.handleOverlayOpen}
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday Vendorlar yo'q"
        // isLoading={debtorList.isLoading}
        columns={[
          {
            title: "ID",
            dataKey: "id",
            render: (value) => value,
          },
          {
            title: "Nomi",
            className: "white-space_no-wrap",
            dataKey: "name",
            render: (value) => value,
          },
          {
            title: "Filial telefoni",
            dataKey: "phone",
            className: "white-space_no-wrap",
            render: (value) => value,
          },
          {
            title: "Manzili",
            dataKey: "address",
            render: (value) => value,
          },
          {
            title: "Filial direktori/menejeri",
            dataKey: "manager",
            render: (value) => value,
          },
          {
            title: "Telefon",
            dataKey: "phone",
            render: (value) => value,
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

export default Filials;
