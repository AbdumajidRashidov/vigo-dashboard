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

export const AddPromocodeDrawer = ({
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
            name: "type",
            validations: [{ type: "required" }],
            value: (value) => value,
          },
        ]}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <>
            <div className="row g-4">
              <div className="col-12">
                <Typography Type="h2" text="Promokod qo'shish" />
              </div>
              <div className="col-12">
                <FastField
                  name="promo_type"
                  component={Fields.Select}
                  label="Promokod turini tanlang"
                  placehorder="Promokod turini tanlang"
                  options={[
                    { label: "Bepul yetkazib berish", value: "1" },
                    { label: "Birinchi buyurtma", value: "2" },
                    { label: "Odatiy", value: "3" },
                  ]}
                />
              </div>
              <div className="col-12">
                <FastField
                  name="type"
                  component={Fields.Select}
                  label="Chegirma turini tanlang"
                  placehorder="Chegirma turini tanlang"
                  options={[
                    { label: "Qiymat bo'yicha", value: "1" },
                    { label: "Foizda", value: "2" },
                  ]}
                />
              </div>
                <div className="col-12">
                <FastField
                  name="persent"
                  component={Fields.InputNumber}
                  label="Chegirma qiymati"
                  placehorder="Chegirma qiymati"
                />
              </div>
              <div className="col-12">
                <FastField
                  name="maximun"
                  component={Fields.InputNumber}
                  label="Maksimal chegirma summasi"
                  placehorder="Maksimal chegirma summasi"
                />
              </div>
              <div className="col-12">
                <FastField
                  name="minimum"
                  component={Fields.InputNumber}
                  label="Minimal buyurtma summasi"
                  placehorder="Maksimal buyurtma summasi"
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
                  name="limit"
                  component={Fields.InputText}
                  label="Foydalanish soni"
                  placehorder="Foydalanish soni"
                />
              </div>
              <div className="col-12">
                <FastField
                  name="start_date"
                  component={Fields.DatePicker}
                  label="Foydalanish sanasi"
                  placehorder="Foydalanish sanasi"
                  prepend={""}
                />
              </div>
              <div className="col-12">
                <FastField
                  name="end_date"
                  component={Fields.DatePicker}
                  label="Amal qilish muddati"
                  prepend={""}
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
