import React from "react";
import { ModalDefault, Typography } from "components";

export const CommentsModal = ({ isOpen, handleModalClose }) => {
  return (
    <ModalDefault
      innerClass="max-width_500"
      isOpen={isOpen}
      title="Izoh haqida"
      handleModalClose={handleModalClose}
    >
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Izoh id:" className="mr_10 mb_10" />
            <Typography Type="span" text="#1234573" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Mijoz nomi:" className="mr_10 mb_10" />
            <Typography Type="span" text="Nurullo Fayzulloyev" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Telefon:" className="mr_10 mb_10" />
            <Typography Type="span" text="+99987665443" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Filial:" className="mr_10 mb_10" />
            <Typography Type="span" text="Buxoro" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Turi:" className="mr_10 mb_10" />
            <Typography Type="span" text="Buyurtma" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Vaqti:" className="mr_10 mb_10" />
            <Typography Type="span" text="12.02.2020 | 12:02" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Baho:" className="mr_10 mb_10" />
            <Typography Type="span" text="5" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Izoh matni:" className="mr_10 mb_10" />
            <Typography Type="span" text="Lorem ipsum 12" />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <Typography Type="h3" text="Fayl:" className="mr_10 mb_10" />
            <Typography Type="span" text="Lorem ipsum 12" />
          </div>
        </div>
      </div>
    </ModalDefault>
  );
};
