import React, { useState } from "react";
import { get } from "lodash";

import { useOverlay } from "hooks";

import { PageHeading, TabBase, Table,Status } from "components";
import { AddOrdersReasonModal } from "../components/Modals/AddOrderReason";

const OrdersReasons = () => {
  const [tabType, setTabType] = useState("Buyurtmani bekor qilish");
  const modal = useOverlay({
    uniqueName: "addVendorModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "1",
      name: "Juda sekin yetkazib berish",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "active",
      address: "Buxoro shahar",
      manager: "John Doe",
      time:"12.02.2022 | 12:00"
    },
  ];

  return (
    <>
      <AddOrdersReasonModal
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "Buyurtma sabablari" },
        ]}
        title="Buyurtma sabablari"
        btnText="+ Qo'shish"
        mainAction={modal.handleOverlayOpen}
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />
      <div className="row">
        <div className="col-5">
          <TabBase
            className="mb_30"
            labels={["Buyurtmani bekor qilish", "Buyurtmani yakunlash"]}
            currentLabel={tabType}
            onPaneChange={(active, event) => setTabType(active)}
          />
        </div>
      </div>

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday buyurtmalar yo'q"
        // isLoading={debtorList.isLoading}
        editAction={()=>{}}
        deleteAction={()=>{}}
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
            title: "Vaqti",
            dataKey: "time",
            render: (value) => value,
          },
        
          {
            title: "Status",
            dataKey: "status",
            render: (value) => <Status type="success" message={value} />,
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

export default OrdersReasons;
