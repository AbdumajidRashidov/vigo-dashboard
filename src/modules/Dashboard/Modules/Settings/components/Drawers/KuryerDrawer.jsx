import React, { useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";
import "../../styles/settings.scss";

import Containers from "containers";
import {
  DrawerDefault,
  Fields,
  Button,
  FileUpload,
  Typography,
  InputPassword,
} from "components";

export const AddKuryerDrawer = ({
  isOpen,
  handleModalClose,
  values,
  isUpdate,
}) => {
  const [showDocs, setShowDocs] = useState(false);
  const [showTransport, setShowTransport] = useState(false);
  const handelShowDoc = () => {
    setShowDocs(!showDocs);
  };
  const handelShowTransport = () => {
    setShowTransport(!showTransport);
  };
  return (
    <DrawerDefault
      innerClass="max-width_500"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
    >
      <Containers.Form
        url={isUpdate ? `/food/${get(values, "id")}` : "/food"}
        method={isUpdate ? "put" : "post"}
        // params={{
        // 	include: "userDetail,userDetail.avatar,position",
        // }}
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
            name: "phone",
            validations: [{ type: "required" }],
          },
          {
            name: "email",
            validations: [{ type: "required" }],
          },
          {
            name: "role",
            validations: [{ type: "required" }],
          },
          {
            name: "status",
            validations: [{ type: "required" }],
          },
        ]}
      >
        {({ isSubmitting }) => (
          <>
            <div className="col-12">
              <Typography
                Type="h3"
                text={isUpdate ? "Kuryerni tahrirlash" : "Kuryer qo'shish"}
              />
            </div>
            <div className="col-12">
              <FastField
                name="filial"
                component={Fields.Select}
                placeholder="Filialni tanlang"
                label="Filial"
                isMulti={true}
                options={[
                  { label: "Buxoro", value: "1" },
                  { label: "Toshkent", value: "2" },
                ]}
              />
            </div>

            <div className="col-12">
              <FastField
                name="name"
                component={Fields.InputText}
                placeholder="Nomi"
                label="Nomi"
              />
            </div>
            <div className="col-12">
              <FastField
                name="phone"
                component={Fields.InputMask}
                placeholder="+998"
                prepend=""
                label="Telefon raqami"
              />
            </div>
            <div className="col-12">
              <FastField
                name="email"
                component={Fields.InputText}
                placeholder="Email"
                label="Email"
              />
            </div>
            <div className="col-12">
              <FastField
                name="password"
                component={InputPassword}
                placeholder="Parol"
                label="Parol"
              />
            </div>
            <div className="col-12">
              <FastField
                name="role"
                component={Fields.Select}
                placeholder="Ish turi"
                label="Ish turi"
              />
            </div>
            <div className="col-12">
              <FastField
                name="category"
                component={Fields.Select}
                placeholder="Kategoriyasi"
                label="Kategoriyasi"
              />
            </div>
            <div className="col-12 mb_20">
              <FastField
                name="status"
                component={Fields.Select}
                placeholder="Holati"
                label="Holati"
              />
            </div>
            <div className="col-12 mb_20">
              <FastField
                name="img"
                component={FileUpload}
                title="Rasm yuklang"
                label="Rasmi"
              />
            </div>
            <div className="col-12 d-flex justify-content-end">
              <Typography
                onClick={handelShowDoc}
                Type="span"
                className="color_brand-blue cursor-pointer product__btn"
                text={!showDocs ? `+ Hujjat qo'shish` : `- Hujjat qo'shish`}
              />
            </div>
            {showDocs && (
              <div className="col-12">
                <div className="row">
                  <div className="col-12 mb_10">
                    <FastField
                      name="doc_type"
                      component={Fields.Select}
                      placeholder="Hujjat turi"
                      label="Turi"
                    />
                  </div>
                  <div className="col-12 mb_10">
                    <FastField
                      name="doc_num"
                      component={Fields.InputText}
                      placeholder="Hujjat raqami"
                      label="Raqami"
                    />
                  </div>
                  <div className="col-12 mb_10">
                    <FastField
                      name="file"
                      component={Fields.Select}
                      placeholder="Fayli"
                      label="Fayli"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="col-12 d-flex justify-content-end">
              <Typography
                Type="span"
                onClick={handelShowTransport}
                className="color_brand-blue cursor-pointer product__btn"
                text={
                  !showTransport
                    ? ` + Transport qo'shish`
                    : " - Transport qo'shish"
                }
              />
            </div>
            {showTransport && (
              <div className="col-12">
                <div className="row">
                  <div className="col-12 mb_10">
                    <FastField
                      name="doc_type"
                      component={Fields.Select}
                      placeholder="Transport turi"
                      label="Turi"
                    />
                  </div>
                  <div className="col-12 mb_10">
                    <FastField
                      name="doc_num"
                      component={Fields.InputText}
                      placeholder="Modeli"
                      label="Modeli"
                    />
                  </div>
                  <div className="col-12 mb_10">
                    <FastField
                      name="doc_num"
                      component={Fields.InputText}
                      placeholder="Davlat raqami"
                      label="Raqami"
                    />
                  </div>
                  <div className="col-12 mb_10">
                    <FastField
                      name="file"
                      component={Fields.Select}
                      placeholder="Rasmlari"
                      label="Rasmlari"
                      isMulti={true}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="col-6 ">
              <Button
                className="btn w_full"
                design="primary"
                type="submit"
                text={isUpdate ? "Tahrirlash" : "Saqlash"}
                isLoading={isSubmitting}
              />
            </div>
          </>
        )}
      </Containers.Form>
    </DrawerDefault>
  );
};
