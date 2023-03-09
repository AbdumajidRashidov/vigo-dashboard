import React, { useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import Containers from "containers";
import {
  DrawerDefault,
  Fields,
  Button,
  Typography,
  FileUpload,
} from "components";

export const AddCommentsDrawer = ({ isOpen, handleModalClose }) => {
  const [show, setShow] = useState(false);
  return (
    <DrawerDefault
      innerClass="max-width_500"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
    >
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
            name: "manager_name",
            validations: [{ type: "required" }],
          },
          {
            name: "working_contact",
            validations: [{ type: "required" }],
          },
        ]}
      >
        {({ isSubmitting }) => (
          <>
            <div className="col-12">
              <Typography Type="h3" text="Izoh(sharh) qo'shish" />
            </div>
            <div className="col-12">
              <FastField
                name="filial"
                component={Fields.Select}
                placeholder="Fillialni tanlang"
                label="Filialni tanlang"
                options={[
                  { label: "Buxoro", value: "1" },
                  { label: "Toshkent", value: "2" },
                ]}
              />
            </div>
            <div className="col-12">
              <FastField
                name="type"
                component={Fields.Select}
                placeholder="Turi"
                label="Turi"
                options={[
                  { label: "Buxoro", value: "1" },
                  { label: "Toshkent", value: "2" },
                ]}
              />
            </div>
            <div className="col-12">
              <FastField
                name="grade"
                component={Fields.Select}
                placeholder="Baho"
                label="Baho"
                options={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                ]}
              />
            </div>
            <div className="col-12">
              <FastField
                name="comment_text"
                component={Fields.Textarea}
                size="textarea"
                label="Izoh matni"
              />
            </div>
            <div className="col-12">
              <FastField
                name="file"
                component={FileUpload}
                title="Fayl yuklang"
              />
            </div>
            <div className="col-12 d-flex justify-content-end">
              <Typography
                Type="span"
                className="color_brand-blue product__btn cursor_pointer"
                text={`+ Mijoz biriktirish`}
                onClick={() => setShow(!show)}
              />
            </div>
            {show && (
              <div className="col-12 mb_30">
                <FastField
                  name="grade"
                  component={Fields.Select}
                  placeholder="Mijozlar"
                  label="Mijozlar"
                  isSearchable={true}
                  options={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                  ]}
                />
              </div>
            )}

            <div className="col-4 mb_15">
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
    </DrawerDefault>
  );
};
