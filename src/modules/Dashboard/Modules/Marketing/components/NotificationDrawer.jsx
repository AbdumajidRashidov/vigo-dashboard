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

export const AddNotificationDrawer = ({
  isOpen,
  handleModalClose,
  onSuccess,
  values,
}) => {
  return (
    <DrawerDefault
      innerClass="max-width_500"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
    >
      <Containers.Form
        url={"/notifications"}
        method={"post"}
        onSuccess={onSuccess}
        fields={[
          {
            name: "whom",
            // validations: [{ type: "required" }],
            validationType: "object",
            value: (value) => value,
          },
        ]}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <>
            {console.log(values.whom?.label)}
            <div className="row g-4">
              <div className="col-12">
                <Typography Type="h2" text="Bildirishnoma qo'shish" />
              </div>
              <div className="col-12">
                <FastField
                  name="whom"
                  component={Fields.Select}
                  label="Kimga yuborish kerak"
                  placehorder="Kimga yuborish kerak"
                  options={[
                    { label: "Mijozlar", value: "1" },
                    { label: "Kuryerlar", value: "2" },
                  ]}
                />
              </div>
              <div className="col-12">
                <FastField
                  name="channels"
                  component={Fields.Select}
                  label="Kanallar"
                  options={
                    values.whom?.label == "Kuryerlar"
                      ? [{ label: "mobil ilova", value: "1" }]
                      : values.whom?.label == "Mijozlar"
                      ? [
                          { label: "sayt", value: "1" },
                          { label: "mobil ilova", value: "2" },
                          { label: "bot", value: "3" },
                        ]
                      : []
                  }
                  placehorder="Kanallar"
                  isMulti
                />
              </div>
              <div className="col-12">
                <FastField
                  name="name"
                  component={Fields.InputText}
                  label="Nomini kiriting"
                  placehorder="Nomini kiriting"
                />
              </div>
              <div className="col-12">
                <FastField
                  name="comment"
                  component={Fields.Textarea}
                  label="Matn kiriting"
                  placehorder="Matn kiriting"
                  size="textarea"
                />
              </div>
              <div className="col-12">
                <FastField
                  name="img"
                  component={FileUpload}
                  title="Rasm yuklang"
                />
              </div>
            </div>
            <Button
              design="primary"
              type="submit"
              className="modal-btn-sm fz_16 btn mt_40"
              text="Saqlash"
              isLoading={isSubmitting}
            />
          </>
        )}
      </Containers.Form>
    </DrawerDefault>
  );
};
