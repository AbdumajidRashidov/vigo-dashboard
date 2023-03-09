import React, { useState } from "react";
import { get } from "lodash";

import { utils } from "services";
import { useOverlay } from "hooks";

import { Card, PageHeading, Status, Table } from "components";
import { AddFilialDrawer } from "../components/Drawers/FilialsDrawer";
import { IntegrationsCard } from "../components/IntegrationsCard";
import { AddSMSDrawer } from "../components/Drawers/AddSMSEskizDrawer";

const Integrations = () => {
  const [filter, setFilter] = useState({});
  const modal = useOverlay({
    uniqueName: "addSMSEskizModal",
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
      <AddSMSDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "Integratsiyalar" },
        ]}
        title="Integratsiyalar"
        btnText="+ Filial qo'shish"
        mainAction={modal.handleOverlayOpen}
      />

      <div className="row">
        <IntegrationsCard
          link={"/dashboard/integrations/payme"}
          icon={
            "https://synthesis.uz/wp-content/uploads/2022/01/payme-1920x1080-1.jpg"
          }
          title="Payme"
        />
        <IntegrationsCard
          link={"/dashboard/integrations/click"}
          title="Click"
          icon={"https://click.uz/click/images/clickog.png"}
        />
        <IntegrationsCard
          link={"/dashboard/integrations/uzum"}
          title={"Uzumbank"}
          icon={
            "https://media.licdn.com/dms/image/C4D0BAQElY6iWtSF32w/company-logo_200_200/0/1669979746017?e=2147483647&v=beta&t=-deWD3zPXg_Wp8nIPHqc3lbFBy5SqcRifAIxygj9cr4"
          }
        />
        <IntegrationsCard
          link={"/dashboard/integrations/jowi"}
          title={"JOWI"}
          icon={
            "data:image/png;base64,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"
          }
        />
        <IntegrationsCard
          link={"/dashboard/integrations/iiko"}
          title={"Iico"}
          icon={"https://retail.by/upload/images/iiko/iiko-logo.png"}
        />
        <IntegrationsCard
          link={"/dashboard/integrations/rkeepper"}
          title={"Rkeepper"}
          icon={
            "https://www.delavto.ru/wp-content/uploads/2021/03/logolight-1.png"
          }
        />
        <IntegrationsCard
          onClick={modal.handleOverlayOpen}
          title={"SMS eskiz.uz"}
          icon={
            "data:image/png;base64,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"
          }
        />
      </div>
    </>
  );
};

export default Integrations;
