import React from "react";

import { useOverlay } from "hooks";
import { ReactComponent as RemoveProduct } from "assets/icons/removeProduct.svg";

import {
  PageHeading,
  Table,
  Badge,
  Button,
  Status
} from "components";
import { AddBannerDrawer } from "../components/BannerDrawer";

const Banners = () => {
  const modal = useOverlay({
    uniqueName: "addBannerModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "123a12",
      first_name: "Falonchi",
      last_name: "Falonchiyev",
      name: "Lorem...",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: "3/8",
      country: "Uzbekistan",
      status: "active",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1 - 0", "kanal2 - 123"],
      last_activity: "12.12.2121 12:21",
      payment_type: "Naqd",
      categoriya: "osh",
      time:"18.02.2023 | 13:00"
    },
    {
      id: "2123a12",
      payment_type: "Naqd",
      first_name: "Falonchi",
      last_name: "Falonchiyev",
      name: "Lorem...",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "inactive",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1 - 234", "kanal2 - 12"],
      last_activity: "12.12.2121 12:21",
      categoriya: "somsalar",
	  filial:"8/8",
      whom:"Mijoz",
      time:"18.02.2023 | 12:20"
    },
  ];

  return (
    <>
      <AddBannerDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />
	  
      <PageHeading
        links={[{ link: "/dashboard", label: "Asosiy" }, { label: "Bannerlar" }]}
        title="Bannerlar"
        btnText="+ Qo'shish"
        mainAction={modal.handleOverlayOpen}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday Banner yo'q"
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
            render: (value) => value,
          },
          {
            title: "Rasm",
            dataKey: "image",
            className: "white-space_no-wrap",
            render: (value) => (
                <img src="https://picsum.photos/30" alt="" />
            ),
          },
          {
            title: "Vaqti",
            dataKey: "time",
            render: (value) => value,
          },
          {
            title: "Status",
            dataKey: "status",
            render: (value) => <Status message={value} type="success"  />,
          },
        ]}
        items={data}
      />

      {/* <Pagination
				currentPage={debtorList.page}
				pageCount={get(debtorList, "meta.pageCount")}
				onPageChange={(newPage) => debtorList.setPage(newPage + 1)}
			/> */}
			{/* <ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Добавить бдюдо" /> */}
    </>
  );
};

export default Banners;
