import React from "react";
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

export const AddFAQDrawer = ({ isOpen, handleModalClose }) => {
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
              <Typography Type="h3" text="Savol qo'shish" />
            </div>
            <div className="col-12">
              <FastField
                name="name"
                component={Fields.InputText}
                placeholder="Savol nomi"
                label="Savol nomi"
              />
            </div>
            <div className="col-12">
              <FastField
                name="answer"
                component={Fields.Textarea}
                placeholder="Javob matni"
                label="Javob matni"
                size="textarea"
              />
            </div>
            <div className="col-12">
              <FastField name="file" component={FileUpload} title="Fayl" />
            </div>

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
