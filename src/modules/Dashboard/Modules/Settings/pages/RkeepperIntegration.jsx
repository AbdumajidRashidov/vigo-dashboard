import React, { useState } from "react";
import { get } from "lodash";

import { useOverlay } from "hooks";

import { PageHeading, Status, Table, TabBase, Button } from "components";
import { AddRkeepperFilialsDrawer } from "../components/Drawers/RkeepperFilialsDrawer";
import { AddJowiMenuDrawer } from "../components/Drawers/JowiMenuDrawer";
import { AddRkeepperPOSModal } from "../components/Modals/RkepperPOSModal";

const RkeepperIntenration = () => {
  const [tab, setTab] = useState("Filiallar");
  const [isUpdate, setIsUpdate] = useState(false);

  const modalFilials = useOverlay({
    uniqueName: "addJowiFilialsModal",
    onClose: () => setIsUpdate(false),
  });
  const modalMenu = useOverlay({
    uniqueName: "addJowiMenuModal",
    onClose: () => setIsUpdate(false),
  });
  const modalJowiPOS = useOverlay({
    uniqueName: "addJowiPOSModal",
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
      <AddRkeepperPOSModal
        isOpen={modalJowiPOS.isOverlayOpen}
        handleModalClose={modalJowiPOS.handleOverlayClose}
        onSuccess={() => {
          modalJowiPOS.handleOverlayClose();
        }}
      />
      <AddRkeepperFilialsDrawer
        isOpen={modalFilials.isOverlayOpen}
        handleModalClose={modalFilials.handleOverlayClose}
        isUpdate={isUpdate}
        onSuccess={() => {
          modalFilials.handleOverlayClose();
        }}
      />
      <AddJowiMenuDrawer
        isOpen={modalMenu.isOverlayOpen}
        handleModalClose={modalMenu.handleOverlayClose}
        onSuccess={() => {
          modalMenu.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { link: "/dashboard/integrations", label: "Integratsiyalar" },
          { label: "Rkepper integratsiya" },
        ]}
        title="rekeeppr"
        btnText="+ Qo'shish"
        actions={
          tab == "Filiallar" ? (
            <Button
              design="primary"
              className="btn"
              onClick={modalJowiPOS.handleOverlayOpen}
              text=" + O'rnatish"
            />
          ) : (
            ""
          )
        }
        mainAction={
          tab == "Filiallar"
            ? modalFilials.handleOverlayOpen
            : modalMenu.handleOverlayOpen
        }
      />

      <div className="row">
        <div className="col-2">
          <TabBase
            className="mb_30"
            labels={["Filiallar", "Menyu"]}
            currentLabel={tab}
            onPaneChange={(active, event) => setTab(active)}
          />
        </div>
      </div>
      {tab == "Filiallar" ? (
        <Table
          emptyUiText="Hozirgi vaqtda hech qanday integtarsiya yo'q"
          onRowClick={() => {
            modalFilials.handleOverlayOpen();
            setIsUpdate(true);
          }}
          // isLoading={debtorList.isLoading}
          columns={[
            {
              title: "ID",
              dataKey: "id",
              render: (value) => value,
            },
            {
              title: "Filial",
              className: "white-space_no-wrap",
              dataKey: "filial",
              render: (value) => "Buxoro",
            },
            {
              title: "Manzil",
              dataKey: "address",
              className: "white-space_no-wrap",
              render: (value) => "O'zbekiston, Buxoro",
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
      ) : (
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
              title: "Nomi",
              className: "white-space_no-wrap",
              dataKey: "filial",
              render: (value) => "Burger",
            },
            {
              title: "Kategoriya",
              dataKey: "category",
              className: "white-space_no-wrap",
              render: (value) => "Fast food",
            },
            {
              title: "Narxi",
              dataKey: "price",
              render: (value) => "25 000 000 so'm",
            },

            {
              title: "Statusi",
              dataKey: "status",
              render: (value) => <Status message={value} type="success" />,
            },
          ]}
          items={data}
        />
      )}

      {/* <Pagination
				currentPage={debtorList.page}
				pageCount={get(debtorList, "meta.pageCount")}
				onPageChange={(newPage) => debtorList.setPage(newPage + 1)}
			/> */}
    </>
  );
};

export default RkeepperIntenration;
