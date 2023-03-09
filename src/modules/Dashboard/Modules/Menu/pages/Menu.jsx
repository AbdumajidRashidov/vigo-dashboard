import React, { useState } from "react";

import Container from "containers";
import { useOverlay } from "hooks";
import { FastField } from "formik";

import {
  PageHeading,
  Table,
  Fields,
  Typography,
  AppLink,
  Badge,
} from "components";
import { AddMenuDrawer } from "../components/MenuDrawer";
import { FilialsModal } from "../components/FilialsModal";
import { MenuFilter } from "../components/MenuFilter";

const Menu = () => {
  const [filter, setFilter] = useState({});
  const modal = useOverlay({
    uniqueName: "addVendorModal",
    onClose: () => setIsUpdate(false),
  });
  const modalFilial = useOverlay({
    uniqueName: "filialModal",
    onClose: () => setIsUpdate(false),
  });


  const data = [
    {
      id: "#123a12",
      first_name: "Falonchi",
      last_name: "Falonchiyev",
      name: "Samarqand osh",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: "3/8",
      country: "Uzbekistan",
      status: "active",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1", "kanal2"],
      last_activity: "12.12.2121 12:21",
      payment_type: "Naqd",
      categoriya: "osh",
    },
    {
      id: "#123a12",
      payment_type: "Naqd",
      first_name: "Falonchi",
      last_name: "Falonchiyev",
      name: "Tandir somsa",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "inactive",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1", "kanal2"],
      last_activity: "12.12.2121 12:21",
      categoriya: "somsalar",
	  filial:"8/8"
    },
  ];

  return (
    <>
      <AddMenuDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />
	  <FilialsModal
        isOpen={modalFilial.isOverlayOpen}
        handleModalClose={modalFilial.handleOverlayClose}
        onSuccess={() => {
			modalFilial.handleOverlayClose();
        }}
      />
      <PageHeading
        links={[{ link: "/dashboard", label: "Asosiy" }, { label: "Menu" }]}
        title="Menu"
        btnText="+ Qo'shish"
        mainAction={modal.handleOverlayOpen}
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />

      <Table
        emptyUiText="Hozirgi vaqtda hech qanday ovqat yo'q"
        filterComponent={<MenuFilter setFilter={setFilter} />}
        // isLoading={debtorList.isLoading}
        // onRowClick={(client)=>navigate(`/client/${get(client, "name")}`)}
        editAction={() => {}}
        deleteAction={() => {}}
        columns={[
          {
            title: (
              <Container.Form
                url="/user/sign-up"
                fields={[
                  {
                    name: "terms",
                    validations: [{ type: "typeError" }, { type: "required" }],
                  },
                ]}
              >
                {({ isSubmitting, values, isValid, dirty }) => (
                  <FastField name="terms" component={Fields.CheckBox} />
                )}
              </Container.Form>
            ),
            dataKey: "id",
            render: (value) => (
              <Container.Form
                url="/user/sign-up"
                onSuccess={(response) => {}}
                fields={[
                  {
                    name: "terms",
                    validations: [{ type: "typeError" }, { type: "required" }],
                  },
                ]}
              >
                {({ isSubmitting, values, isValid, dirty }) => (
                  <FastField name="terms" component={Fields.CheckBox} />
                )}
              </Container.Form>
            ),
          },
          {
            title: "Nomi",
            dataKey: "name",
            render: (value) => (
              <div>
                <AppLink
                  link={`/orders/${value}`}
                  className="d-flex table_user align-items-center justify-content-between"
                >
                  <div>
                    <Typography
                      Type="p"
                      className="table__heading"
                      style={{ marginBottom: "5px" }}
                      text={value}
                    />
                  </div>
                </AppLink>
              </div>
            ),
          },
          {
            title: "Kategoriya",
            dataKey: "categoriya",
            className: "white-space_no-wrap",
            render: (value) => value,
          },
          {
            title: "Narx",
            dataKey: "payment_type",
            render: (value) => value,
          },
          {
            title: "Rasm",
            dataKey: "status",
            render: (value) => (
              <img
                src="data:image/jpeg;base64,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"
                width={40}
                alt=""
              />
            ),
          },
          {
            title: "Filiallar",
            dataKey: "filial",
            render: (value) => <Badge onClick={modalFilial.handleOverlayOpen} design="primary" text={value} />,
          },
          {
            title: "Holati",
            dataKey: "status",
            render: (value) => (
              <Container.Form url="/user/sign-up" onSuccess={(response) => {}}>
                {({ isSubmitting, values, isValid, dirty }) => (
                  <FastField
                    name={`terms-${value}`}
                    component={Fields.Switch}
                  />
                )}
              </Container.Form>
            ),
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

export default Menu;
