import React, { useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";
import config from "config";

import Containers from "containers";
import { ModalDefault, Fields, Button, Typography } from "components";

export const AddressModal = ({ isOpen, handleModalClose }) => {
  return (
    <ModalDefault
      innerClass="max-width_700"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
    >
      <Containers.Form
        url="/user/sign-in"
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
            name: "comment_uz",
            validations: [{ type: "required" }],
          },
        ]}
      >
        {({ isSubmitting }) => (
          <>
            <div className="col-12">
              <Typography Type="h3" text="Yangi manzil qo'shish" />
            </div>

            <div className="col-12">
              <FastField
                name="name"
                component={Fields.InputText}
                placeholder="Manzil nomi"
                label="Manzil nomi"
              />
            </div>
            <div className="col-6">
              <FastField
                name="viloyat"
                component={Fields.Select}
                label="Viloyat"
                placehorder="Viloyat"
                options={[
                  { label: "Viloyat2", value: "1" },
                  { label: "Viloyat1", value: "2" },
                ]}
              />
            </div>
            <div className="col-6">
              <FastField
                name="shaxar"
                component={Fields.Select}
                label="Shahar/Tuman"
                placehorder="Shahar/Tuman"
                options={[
                  { label: "Viloyat2", value: "1" },
                  { label: "Viloyat1", value: "2" },
                ]}
              />
            </div>
            <div className="col-12">
              <FastField
                name="ko'cha"
                component={Fields.InputText}
                placeholder="Ko'cha nomi"
                label="Ko'cha nomi"
              />
            </div>
            <div className="col-12">
              <FastField
                name="kv"
                component={Fields.InputText}
                placeholder="KV, uy raqami"
                label="KV, uy raqami"
              />
            </div>
            <div className="col-12">
              <FastField
                name="additional"
                component={Fields.Textarea}
                placeholder="Mo'ljalni aniqroq kiriting"
                label="Mo'ljal"
                size="textarea"
              />
            </div>

            <div className="col-6 ">
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
    </ModalDefault>
  );
};
