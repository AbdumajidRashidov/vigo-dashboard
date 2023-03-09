import React from "react";

import { useOverlay } from "hooks";
import { ReactComponent as RemoveProduct } from "assets/icons/removeProduct.svg";

import {
  PageHeading,
  Table,
  Badge,
  Button
} from "components";
import { AddNotificationDrawer } from "../components/NotificationDrawer";

const Notifications = () => {
  const modal = useOverlay({
    uniqueName: "addNotificationModal",
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
      <AddNotificationDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />
	  
      <PageHeading
        links={[{ link: "/dashboard", label: "Asosiy" }, { label: "Bildirishnomalar" }]}
        title="Bildirishnomalar"
        btnText="+ Qo'shish"
        mainAction={modal.handleOverlayOpen}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday bildirishnoma yo'q"
        // isLoading={debtorList.isLoading}
        // editAction={() => {}}
        // deleteAction={() => {}}
        renderButtons={(roomProduct, handleMenuClose) => (
            <Button
                className="btn drop-down__btn table__actions-delete"
                prepend={<RemoveProduct />}
                text="Qayta yuborish"
                onClick={() => {
                    handleMenuClose();
                    modal.handleOverlayOpen();
                }}
            />
        )}
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
            title: "Turi",
            dataKey: "type",
            className: "white-space_no-wrap",
            render: (value) => (
                <img src="https://picsum.photos/30" alt="" />
            ),
          },
          {
            title: "Kimga",
            dataKey: "whom",
            render: (value) => value,
          },
          {
            title: "Kanallar",
            dataKey: "channels",
            render: (value) => value.map((val=>{
                return(
                    <Badge className="mr_10" design="secondary" text={val} />
                )
            }))
          },
          {
            title: "Vaqti",
            dataKey: "time",
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
			{/* <ListActions addAction={modal.handleOverlayOpen} addActionTooltip="Добавить бдюдо" /> */}
    </>
  );
};

export default Notifications;
