import React, { useState } from "react";
import "../styles/settings.scss";
import { useOverlay } from "hooks";

import { Badge, PageHeading, Status, Table } from "components";
import { AddCommentsDrawer } from "../components/Drawers/AddCommentsDrawer";
import { CommentsModal } from "../components/Modals/CommentsModal";

const Comments = () => {
  const [filter, setFilter] = useState({});
  const modal = useOverlay({
    uniqueName: "addCommentModal",
    onClose: () => setIsUpdate(false),
  });
  const modalComment = useOverlay({
    uniqueName: "showCommentModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "#213321",
      name: "Faxriddin Nizomov",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "active",
      address: "Buxoro",
      manager: "John Doe",
      type: [
        "Umumiy",
        "Buyurtma yetkazib berish",
        "Buyurtma olib kelish",
        "Buyurtma stol",
        "Kuryer",
        "Umumiy sayt",
        "Umumiy bot",
        "Umumiy QR",
        "Xodim",
      ],
      grade: "5",
      time: "12.02.2022 | 12:00",
    },
  ];

  return (
    <>
      <AddCommentsDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />
      <CommentsModal
        isOpen={modalComment.isOverlayOpen}
        handleModalClose={modalComment.handleOverlayClose}
        onSuccess={() => {
          modalComment.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "Izohlar (Sharhlar)" },
        ]}
        title="Izohlar"
        btnText="+ Izoh qo'shish"
        mainAction={modal.handleOverlayOpen}
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday Izoh yo'q"
        // isLoading={debtorList.isLoading}
        columns={[
          {
            title: "ID",
            dataKey: "id",
            render: (value) => (
              <p
                className="comment_id cursor_pointer"
                onClick={modalComment.handleOverlayOpen}
              >
                {value}
              </p>
            ),
          },
          {
            title: "Mijoz Nomi",
            className: "white-space_no-wrap",
            dataKey: "name",
            render: (value) => value,
          },
          {
            title: "Telefoni",
            dataKey: "phone",
            className: "white-space_no-wrap",
            render: (value) => value,
          },
          {
            title: "Filial",
            dataKey: "address",
            render: (value) => value,
          },
          {
            title: "Turi",
            dataKey: "type",
            render: (values) =>
              values.map((value) => {
                return (
                  <p className="mb_20">
                    <Badge text={value} design="primary" />
                  </p>
                );
              }),
          },
          {
            title: "Baho",
            dataKey: "grade",
            render: (value) => value,
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
    </>
  );
};

export default Comments;
