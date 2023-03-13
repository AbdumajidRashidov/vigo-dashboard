import React from "react";
import { FastField } from "formik";
import "../styles/settings.scss";

import Containers from "containers";

import { PageHeading, Typography, Table, Fields, Button } from "components";

const Billing = () => {
  const data = [
    {
      id: "1",
      name: "Standard(3oy)",
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
      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "To'lovlar tarixi" },
        ]}
        title="To'lovlar tarixi"
        btnText="+ qo'shish"
      />

      <div className="row">
        <div className="col-8">
          <Table
            emptyUiText="Hozirgi vaqtda hech qanday Vendorlar yo'q"
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
                title: "Summa",
                dataKey: "summa",
                className: "white-space_no-wrap",
                render: (value) => "300 000 so'm",
              },
              {
                title: "To'lov turi",
                dataKey: "payment_type",
                render: (value) => "Click",
              },
              {
                title: "Izoh",
                dataKey: "comment",
                render: (value) => "Lorem....",
              },
              {
                title: "Sana",
                dataKey: "date",
                render: (value) => "06.01.2023 | 16:50",
              },
            ]}
            items={data}
          />
        </div>
        <div className="col-4">
          <div className="card mb_20 bg-success">
            <Typography Type="h3" text="Balans : 300 000 so'm" />
            <Typography Type="p" text="Amal qilish muddati : 30 kun" />
          </div>
          <div className="card">
            <Containers.Form
              url="/user/sign-in"
              params={{
                include: "userDetail,userDetail.avatar,position",
              }}
              className="row g-3"
              onSuccess={(user) => {
                // dispatch(auth.success("token"));
                // storage.set("token","token");
                // navigate("/");
              }}
              fields={[
                {
                  name: "name",
                  validations: [{ type: "required" }],
                },
                {
                  name: "constant",
                  validations: [{ type: "required" }],
                },
                {
                  name: "working_contact",
                  validations: [{ type: "required" }],
                },
              ]}
            >
              {({ isSubmitting, values, setFieldValue }) => (
                <>
                  <div className="col-12 mb_20">
                    <Typography Type="h3" text="To'lov qilish" />
                  </div>

                  <div className="col-12">
                    <FastField
                      name="user_id"
                      component={Fields.Select}
                      placeholder="Tarifni tanlang"
                    />
                  </div>
                  <div className="col-12">
                    <FastField
                      name="user_id"
                      component={Fields.Select}
                      placeholder="Davrni tanlang"
                    />
                  </div>
                  <div className="col-12">
                    <FastField
                      name="merchand_id"
                      component={Fields.Textarea}
                      size={"textarea"}
                      placeholder="Izoh..."
                    />
                  </div>
                  <div className="col-4">
                    <FastField
                      name="kasdasey"
                      component={Fields.RadioButton}
                      label="Click"
                    />
                  </div>
                  <div className="col-4">
                    <FastField
                      name="kasdasey"
                      component={Fields.RadioButton}
                      label="Payme"
                    />
                  </div>
                  <div className="col-4">
                    <FastField
                      name="kasdasey"
                      component={Fields.RadioButton}
                      label="Payze"
                    />
                  </div>
                  <div className="col-12 mb_15">
                    <Button
                      className="btn w_full"
                      design="primary"
                      type="submit"
                      text="Saqlash"
                      isLoading={isSubmitting}
                    />
                  </div>
                </>
              )}
            </Containers.Form>
          </div>
        </div>
      </div>

      {/* <Pagination
				currentPage={debtorList.page}
				pageCount={get(debtorList, "meta.pageCount")}
				onPageChange={(newPage) => debtorList.setPage(newPage + 1)}
			/> */}
    </>
  );
};

export default Billing;
