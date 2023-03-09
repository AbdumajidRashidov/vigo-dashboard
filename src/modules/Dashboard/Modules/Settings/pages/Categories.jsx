import React from "react";

import { useOverlay } from "hooks";

import { PageHeading, Table, Typography } from "components";
import { AddCategoryDrawer } from "../components/Drawers/CategoriesDrawer";

const Categories = () => {
  const modal = useOverlay({
    uniqueName: "addVendorModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "1",
      name: "Milliy taomlar",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "active",
      address: "Buxoro shahar",
      manager: "John Doe",
      roll: "Meneger",
      main_category: "Mavjud emas",
    },
  ];

  return (
    <>
      <AddCategoryDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "Kategoriyalar" },
        ]}
        title="Kategoriyalar"
        btnText="+ Kategoriya qo'shish"
        mainAction={modal.handleOverlayOpen}
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday Vendorlar yo'q"
        // isLoading={debtorList.isLoading}
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
            render: (value) => (
              <div className="d-flex align-items-center">
                <img
                  width={30}
                  className="mr_10"
                  src="https://cdn-icons-png.flaticon.com/512/4192/4192361.png"
                  alt=""
                />
                <Typography Type="p" text={value} />
              </div>
            ),
          },
          {
            title: "Asosiy kategoriya",
            dataKey: "main_category",
            className: "white-space_no-wrap",
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

export default Categories;
