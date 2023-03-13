import React, { useState } from "react";
import { get } from "lodash";

import { useOverlay } from "hooks";

import { PageHeading, TabBase, Table, Status, Button } from "components";
import { AddTableDrawer } from "../components/Drawers/AddTableDrawer";
import { AddHallDrawer } from "../components/Drawers/AddHallDrawer";
import { StolFilter } from "../components/TablesFilter";

const HallAndTable = () => {
  const [tabType, setTabType] = useState("Stollar");
  const modalTable = useOverlay({
    uniqueName: "addTableModal",
    onClose: () => setIsUpdate(false),
  });
  const modalHall = useOverlay({
    uniqueName: "addHallModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "1",
      number: "24",
      chairs: "6",
      hall: "Banket",
      comment: "Izoh...",
      status: "active",
    },
  ];

  return (
    <>
      <AddHallDrawer
        isOpen={modalHall.isOverlayOpen}
        handleModalClose={modalHall.handleOverlayClose}
        title={tabType}
        onSuccess={() => {
          modalHall.handleOverlayClose();
        }}
      />
      <AddTableDrawer
        isOpen={modalTable.isOverlayOpen}
        handleModalClose={modalTable.handleOverlayClose}
        title={tabType}
        onSuccess={() => {
          modalTable.handleOverlayClose();
        }}
      />
      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: tabType == "Stollar" ? "Stollar" : "Zallar" },
        ]}
        title={tabType == "Stollar" ? "Stollar" : "Zallar"}
        mainAction={
          tabType == "Stollar"
            ? modalTable.handleOverlayOpen
            : modalHall.handleOverlayOpen
        }
        btnText="+ Qo'shish"
      />
      <div className="row">
        <div className="col-2">
          <TabBase
            className="mb_30"
            labels={["Stollar", "Zallar"]}
            currentLabel={tabType}
            onPaneChange={(active, event) => setTabType(active)}
          />
        </div>
      </div>

      {tabType == "Stollar" ? (
        <Table
          emptyUiText="Hozirgi vaqtda hech qanday stollar yo'q"
          editAction={() => {}}
          deleteAction={() => {}}
          columns={[
            {
              title: "ID",
              dataKey: "id",
              render: (value) => value,
            },
            {
              title: "Raqami",
              dataKey: "number",
              render: (value) => value,
            },

            {
              title: "Stullar",
              dataKey: "chairs",
              render: (value) => value,
            },
            {
              title: "Zal",
              dataKey: "hall",
              render: (value) => value,
            },
            {
              title: "Izoh",
              dataKey: "comment",
              render: (value) => value,
            },
            {
              title: "Status",
              dataKey: "status",
              render: (value) => <Status type="success" message={value} />,
            },
          ]}
          items={data}
          filterComponent={<StolFilter />}
        />
      ) : (
        <Table
          emptyUiText="Hozirgi vaqtda hech qanday zallar yo'q"
          editAction={() => {}}
          deleteAction={() => {}}
          columns={[
            {
              title: "ID",
              dataKey: "id",
              render: (value) => value,
            },
            {
              title: "Nomi",
              dataKey: "name",
              render: (value) => "Asosiy",
            },
            {
              title: "XK ulushi",
              dataKey: "hall",
              render: (value) => "10%",
            },
            {
              title: "Stollar soni",
              dataKey: "tables",
              render: (value) => 24,
            },
            {
              title: "Izoh",
              dataKey: "comment",
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
      )}

      {/* <Pagination
				currentPage={debtorList.page}
				pageCount={get(debtorList, "meta.pageCount")}
				onPageChange={(newPage) => debtorList.setPage(newPage + 1)}
			/> */}
    </>
  );
};

export default HallAndTable;
