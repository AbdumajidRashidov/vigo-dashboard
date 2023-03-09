import React, { useState } from "react";
import "../styles/settings.scss";
import { useNavigate } from "react-router-dom";

import { get } from "lodash";
import { useOverlay } from "hooks";
import Container from "containers";
import { FastField } from "formik";

import {
  Avatar,
  PageHeading,
  Status,
  Table,
  Typography,
  Fields,
  Button,
  TabBase,
} from "components";

import { AddEmployeeDrawer } from "../components/Drawers/EmployeesDrawer";
import { AddKuryerDrawer } from "../components/Drawers/KuryerDrawer";
import { SMSDrawer } from "../components/Drawers/SMSDrawer";
import { EmployeesFilter } from "../components/EmployeesFilter";
import { KuryerFilter } from "../components/KuryerFilter";

import { ReactComponent as OrderIcon } from "assets/icons/sidebar-stock-orders.svg";

const Employees = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState({});
  const [tabType, setTabType] = useState("Asosiy");
  const [isUpdate, setIsUpdate] = useState(false);
  const modal = useOverlay({
    uniqueName: "addEmployeeModal",
    onClose: () => setIsUpdate(false),
  });
  const kuryerModal = useOverlay({
    uniqueName: "addKuryerModal",
    onClose: () => setIsUpdate(false),
  });
  const SMSmodal = useOverlay({
    uniqueName: "SMSModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "1",
      name: "Falonchiyev Falonchi",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "active",
      address: "Buxoro shahar",
      manager: "John Doe",
      roll: "Meneger",
    },
  ];

  return (
    <>
      <SMSDrawer
        isOpen={SMSmodal.isOverlayOpen}
        handleModalClose={SMSmodal.handleOverlayClose}
        onSuccess={() => {
          SMSmodal.handleOverlayClose();
        }}
      />
      <AddEmployeeDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        isUpdate={isUpdate}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />
      <AddKuryerDrawer
        isOpen={kuryerModal.isOverlayOpen}
        handleModalClose={kuryerModal.handleOverlayClose}
        isUpdate={isUpdate}
        onSuccess={() => {
          kuryerModal.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[{ link: "/dashboard", label: "Asosiy" }, { label: "Xodimlar" }]}
        title="Xodimlar"
        btnText="+ Xodim qo'shish"
        mainAction={modal.handleOverlayOpen}
        actions={
          <>
            <Button
              text={"SMS jo'natish"}
              onClick={SMSmodal.handleOverlayOpen}
              design="primary"
              className="btn"
            />
            <Button
              text={"+ Kuryer qo'shish"}
              onClick={kuryerModal.handleOverlayOpen}
              design="primary"
              className="btn ml_20"
            />
          </>
        }
        // statistics={adapters.debtorAdapter(debtorStatistics.data)}
      />

      <div className="row">
        <div className="col-2 mb_30">
          <TabBase
            className=""
            labels={["Asosiy", "Kuryerlar"]}
            currentLabel={tabType}
            onPaneChange={(active, event) => setTabType(active)}
          />
        </div>
      </div>
      {tabType == "Asosiy" ? (
        <Table
          emptyUiText="Hozirgi vaqtda hech qanday xodimlar yo'q"
          filterComponent={<EmployeesFilter setFilter={setFilter} />}
          // isLoading={debtorList.isLoading}
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
                      validations: [
                        { type: "typeError" },
                        { type: "required" },
                      ],
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
                      validations: [
                        { type: "typeError" },
                        { type: "required" },
                      ],
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
              title: "FIO & Telefon",
              dataKey: "name",
              render: (value) => (
                <div
                  onClick={(evt) => {
                    console.log(evt);
                    setIsUpdate(true);
                    modal.handleOverlayOpen();
                  }}
                  style={{ cursor: "pointer" }}
                  className="d-flex align-items-center"
                >
                  <Avatar
                    style={{ marginRight: "10px" }}
                    src="data:image/png;base64,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"
                  />
                  <div>
                    <Typography
                      Type="p"
                      className="fw_600"
                      style={{ marginBottom: "5px" }}
                      text={value}
                    />
                    <Typography
                      Type="span"
                      className="fz_16"
                      text={"+9987654321"}
                    />
                  </div>
                </div>
              ),
            },
            {
              title: "Filial",
              dataKey: "filia",
              className: "white-space_no-wrap",
              render: (value) => "Buxoro",
            },
            {
              title: "Rollar",
              dataKey: "rols",
              render: (value) => "Menejer",
            },
            {
              title: "Status",
              dataKey: "status",
              render: (value) => <Status type={"success"} message={value} />,
            },
          ]}
          items={data}
        />
      ) : (
        <Table
          emptyUiText="Hozirgi vaqtda hech qanday kuryerlar yo'q"
          filterComponent={<KuryerFilter setFilter={setFilter} />}
          // isLoading={debtorList.isLoading}
          editAction={() => {}}
          onRowClick={(kuryer) =>
            navigate(`/dashboard/employees/${get(kuryer, "id")}`)
          }
          deleteAction={() => {}}
          columns={[
            {
              title: (
                <Container.Form
                  url="/user/sign-up"
                  fields={[
                    {
                      name: "terms",
                      validations: [
                        { type: "typeError" },
                        { type: "required" },
                      ],
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
                      validations: [
                        { type: "typeError" },
                        { type: "required" },
                      ],
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
              title: "FIO & Telefon",
              dataKey: "name",
              render: (value) => (
                <div
                  style={{ cursor: "pointer" }}
                  className="d-flex align-items-center"
                >
                  <Avatar
                    style={{ marginRight: "10px" }}
                    src="data:image/png;base64,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"
                  />
                  <div>
                    <Typography
                      Type="p"
                      className="fw_600"
                      style={{ marginBottom: "5px" }}
                      text={value}
                    />
                    <Typography
                      Type="span"
                      className="fz_16"
                      text={"+9987654321"}
                    />
                  </div>
                </div>
              ),
            },
            {
              title: "Filial",
              dataKey: "filia",
              className: "white-space_no-wrap",
              render: (value) => "Buxoro",
            },
            {
              title: "Ish turi",
              dataKey: "job_type",
              render: (value) => "oylik",
            },
            {
              title: "Kategoriyasi",
              dataKey: "category",
              render: (value) => "Velokuryer",
            },
            {
              title: "Status",
              dataKey: "status",
              render: (value) => <Status type={"success"} message={value} />,
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

export default Employees;
