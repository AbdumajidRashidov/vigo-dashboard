import React from "react";

import { useOverlay } from "hooks";

import { PageHeading, Status, Table } from "components";
import { AddVacancyDrawer } from "../components/Drawers/AddVacancyDrawer";

const Vacancies = () => {
  const modal = useOverlay({
    uniqueName: "addvacancyModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "1",
      name: "Kuryer",
      filial: "Buxoro",
      vaqti: "12.02.2022 | 13:20",
      status: "active",
    },
  ];

  return (
    <>
      <AddVacancyDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "Vakansiyalar" },
        ]}
        title="Vakansiyalar"
        btnText="+ Vakansiya qo'shish"
        mainAction={modal.handleOverlayOpen}
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday vakansiyalar yo'q"
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
            title: "Filial",
            dataKey: "filial",
            className: "white-space_no-wrap",
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

export default Vacancies;
