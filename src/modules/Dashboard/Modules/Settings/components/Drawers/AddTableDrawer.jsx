import React from "react";
import { FastField } from "formik";
import { get } from "lodash";

import Containers from "containers";
import { DrawerDefault, Fields, Button, Typography } from "components";

export const AddTableDrawer = ({ isOpen, handleModalClose }) => {
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
              <Typography Type="h3" text="Stol qo'shish" />
            </div>
            <div className="col-12">
              <FastField
                name="hall"
                component={Fields.Select}
                placeholder="Zalni tanlang"
                label="Zalni tanlang"
                options={[
                  { label: "Zal1", value: "1" },
                  { label: "Zal2", value: "2" },
                ]}
              />
            </div>
            <div className="col-12">
              <FastField
                name="number"
                component={Fields.Select}
                placeholder="Tartib raqami"
                label="Tartib raqami"
                options={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                ]}
              />
            </div>
            <div className="col-12">
              <FastField
                name="chairs"
                component={Fields.Select}
                placeholder="Stullar soni"
                label="Stullar soni"
                options={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                ]}
              />
            </div>
            <div className="col-12">
              <FastField
                name="comment"
                component={Fields.Textarea}
                placeholder="Izoh"
                label="Izoh"
                size="textarea"
              />
            </div>

            <div className="col-6 mb_15">
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
