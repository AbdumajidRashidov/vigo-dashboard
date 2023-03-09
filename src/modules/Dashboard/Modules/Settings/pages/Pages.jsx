import React, { useState } from "react";
import { useOverlay } from "hooks";
import Containers from "containers";
import { FastField } from "formik";
import "../styles/settings.scss";

import {
  PageHeading,
  TabBase,
  Fields,
  Table,
  Status,
  FileUpload,
  Button,
} from "components";
import { AddFAQDrawer } from "../components/Drawers/AddFAQDrawer";

const Pages = () => {
  const [tabType, setTabType] = useState("Biz haqimizda");
  const modal = useOverlay({
    uniqueName: "addFAQModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "1",
      name: "Juda sekin yetkazib berish",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "active",
      address: "Buxoro shahar",
      manager: "John Doe",
      time: "12.02.2022 | 12:00",
    },
  ];

  return (
    <>
      <AddFAQDrawer
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { label: "Sahifalar" },
        ]}
        title="Sahifalar"
      />
      <div className="row">
        <div className="col-12">
          <div className="card mb_30">
            <TabBase
              labels={[
                "Biz haqimizda",
                "Yo'riqmona",
                "Foydalanish shartlari",
                "Ommaviy oferta",
                "FAQ(Ko'p so'raladigan savollar)",
              ]}
              currentLabel={tabType}
              onPaneChange={(active, event) => setTabType(active)}
            />
          </div>
        </div>
      </div>

      {tabType === "Biz haqimizda" ? (
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
              name: "text",
              validations: [{ type: "required" }],
            },
          ]}
        >
          {({ isSubmitting }) => (
            <>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-12 mb_30">
                        <FastField
                          name="name"
                          component={Fields.InputText}
                          placeholder="Sarlavha nomi"
                          label="Sarlavha nomi"
                        />
                      </div>
                      <div className="col-12 mb_30">
                        <FastField
                          name="text"
                          component={Fields.Textarea}
                          size="textarea"
                          placeholder="Matn"
                          label="Matn"
                        />
                      </div>
                      <div className="col-3 mb_15">
                        <Button
                          className="btn w_full"
                          design="primary"
                          type="submit"
                          text="Saqlash"
                          isLoading={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Containers.Form>
      ) : tabType === "Yo'riqmona" ? (
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
              name: "text",
              validations: [{ type: "required" }],
            },
          ]}
        >
          {({ isSubmitting }) => (
            <>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-12 mb_30">
                        <FastField
                          name="name"
                          component={Fields.InputText}
                          placeholder="Sarlavha nomi"
                          label="Sarlavha nomi"
                        />
                      </div>
                      <div className="col-12 mb_30">
                        <FastField
                          name="text"
                          component={Fields.Textarea}
                          size="textarea"
                          placeholder="Matn"
                          label="Matn"
                        />
                      </div>
                      <div className="col-3 mb_15">
                        <Button
                          className="btn w_full"
                          design="primary"
                          type="submit"
                          text="Saqlash"
                          isLoading={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Containers.Form>
      ) : tabType === "Foydalanish shartlari" ? (
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
              name: "text",
              validations: [{ type: "required" }],
            },
          ]}
        >
          {({ isSubmitting }) => (
            <>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-12 mb_30">
                        <FastField
                          name="name"
                          component={Fields.InputText}
                          placeholder="Sarlavha nomi"
                          label="Sarlavha nomi"
                        />
                      </div>
                      <div className="col-12 mb_30">
                        <FastField
                          name="text"
                          component={Fields.Textarea}
                          size="textarea"
                          placeholder="Matn"
                          label="Matn"
                        />
                      </div>
                      <div className="col-3 mb_15">
                        <Button
                          className="btn w_full"
                          design="primary"
                          type="submit"
                          text="Saqlash"
                          isLoading={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Containers.Form>
      ) : tabType === "Ommaviy oferta" ? (
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
              name: "text",
              validations: [{ type: "required" }],
            },
          ]}
        >
          {({ isSubmitting }) => (
            <>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-12 mb_30">
                        <FastField
                          name="name"
                          component={Fields.InputText}
                          placeholder="Sarlavha nomi"
                          label="Sarlavha nomi"
                        />
                      </div>
                      <div className="col-12 mb_30">
                        <FastField
                          name="text"
                          component={Fields.Textarea}
                          size="textarea"
                          placeholder="Matn"
                          label="Matn"
                        />
                      </div>
                      <div className="col-3 mb_15">
                        <Button
                          className="btn w_full"
                          design="primary"
                          type="submit"
                          text="Saqlash"
                          isLoading={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Containers.Form>
      ) : (
        <>
          <PageHeading
            links={[{ label: "Savollar" }]}
            mainAction={modal.handleOverlayOpen}
            title="FAQ"
            btnText={"+Qo'shish"}
          />
          <Table
            emptyUiText="Hozirgi vaqtda hech narsa yo'q"
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
                title: "Savol nomi",
                className: "white-space_no-wrap",
                dataKey: "name",
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
        </>
      )}

      {/* <Pagination
				currentPage={debtorList.page}
				pageCount={get(debtorList, "meta.pageCount")}
				onPageChange={(newPage) => debtorList.setPage(newPage + 1)}
			/> */}
    </>
  );
};

export default Pages;
