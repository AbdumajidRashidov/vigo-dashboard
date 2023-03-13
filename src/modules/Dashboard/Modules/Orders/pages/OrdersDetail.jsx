import React from "react";
import { FastField, Field } from "formik";
import "../styles/orders.scss";

import { ReactComponent as AddIcon } from "assets/icons/add-item.svg";

import Containers from "containers";
import {
  DrawerDefault,
  Fields,
  Button,
  FileUpload,
  Typography,
  Badge,
  Avatar,
} from "components";

export const OrdersDetail = ({
  isOpen,
  handleModalClose,
  isUpdate,
  values,
}) => {
  const handleRemoveFoodAttribute = (
    selectedIndex,
    foodAttibutes,
    setFieldValue
  ) => {
    const newAttributes = foodAttibutes.filter((item, index) => {
      return index !== selectedIndex;
    });
    setFieldValue("attributes", newAttributes);
  };

  const handleAddFoodAttribute = (types, setFieldValue) => {
    const newAttributes = {
      attribute_name: "",
      products: [
        {
          product_name: "",
          prise: "",
        },
      ],
    };
    setFieldValue("attributes", [...types, newAttributes]);
  };

  return (
    <Containers.Form
      url="/user/sign-in"
      className="row g-3"
      onSuccess={(user) => {
        // dispatch(auth.success("token"));
        // storage.set("token","token");
        // navigate("/");
      }}
      fields={[
        {
          name: "name_uz",
          validations: [{ type: "required" }],
        },
        {
          name: "main_category",
          validations: [{ type: "required" }],
        },
        {
          name: "price",
          validations: [{ type: "required" }],
        },
        {
          name: "comment_uz",
        },
        {
          name: "images",
          validations: [{ type: "required" }],
        },
        {
          name: "attributes",
          validationType: "array",
          value: [],
          onSubmitValue: (value) =>
            value.map((item) => ({
              type_name: get(item, "product_name.product_name"),
              quantity: utils.formatters.formatCurrencyApi(item.quantity),
            })),
        },
      ]}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <>
          <div className="card">
            <div className="row">
              <div className="col-8 mb_30">
                <Typography Type="h3" className="mb_20" text="Buyurtmalar" />
                <div className="d-flex row align-items-center justify-content-between mb_20">
                  <div className="col-12 mb_20">
                    <Typography
                      Type="span"
                      className="color_brand-blue product__btn"
                      text={`1 - Buyurtma`}
                    />
                    <div className="row d-flex">
                      <div className="col-3">
                        <FastField
                          name={`current_order_name`}
                          component={Fields.InputText}
                          label="Nomi"
                          defaultValue="Oddiy Lavash"
                          isDisabled
                        />
                      </div>
                      <div className="col-3">
                        <FastField
                          name={`current_order_name`}
                          component={Fields.InputNumber}
                          label="Miqdori"
                          defaultValue="4"
                          isDisabled
                        />
                      </div>
                      <div className="col-3">
                        <FastField
                          name={`current_order_name`}
                          component={Fields.InputText}
                          label="Narxi"
                          defaultValue="25 000 so'm"
                          isDisabled
                        />
                      </div>
                      <div className="col-3">
                        <FastField
                          name={`current_order_name`}
                          component={Fields.InputText}
                          label="Umumiy"
                          defaultValue="100 000 so'm"
                          isDisabled
                        />
                      </div>
                    </div>
                    <div className="col-12 mt_10">
                      <FastField
                        name={`current_order_name`}
                        component={Fields.Textarea}
                        label="Izohi"
                        size={"textarea"}
                        defaultValue="- sousli. mayonezi solinmasin iltimos."
                        isDisabled
                      />
                    </div>
                  </div>
                </div>
                <Attributes
                  foodTypes={values?.attributes}
                  onRemoveType={(selectedIndex) => {
                    handleRemoveFoodAttribute(
                      selectedIndex,
                      values.attributes,
                      setFieldValue
                    );
                  }}
                  setFieldValue={setFieldValue}
                />
                <Button
                  className="btn"
                  text="Yangi qo'shish"
                  design="primary"
                  onClick={(event) =>
                    handleAddFoodAttribute(values?.attributes, setFieldValue)
                  }
                />
                <div className="row">
                  <div className="col-6">
                    <div className="payment d-flex align-items-center justify-content-between">
                      <ul>
                        <li>
                          <Typography Type="p" text="To'lov" />
                          <Badge design="primary" text="10%" />
                        </li>
                        <li>
                          <Typography Type="p" text="Buyurtma miqdori" />
                          <Typography Type="p" text="200 000 so'm" />
                        </li>
                        <li>
                          <Typography Type="p" text="Yetkazib berish" />
                          <Typography Type="p" text="15 000 so'm" />
                        </li>
                        <li>
                          <Typography Type="p" text="Xizmat haqi" />
                          <Typography Type="p" text="0 so'm" />
                        </li>
                        <li>
                          <Typography Type="p" text="Umumiy summa" />
                          <Typography Type="p" text="215 000 so'm" />
                        </li>
                        <li>
                          <Typography Type="p" text="Chegirma" />
                          <Typography Type="p" text="0 so'm" />
                        </li>
                        <li>
                          <Typography Type="p" text="Promokod" />
                          <Typography Type="p" text="0 so'm" />
                        </li>
                        <li>
                          <Typography Type="p" text="Soliq" />
                          <Typography Type="p" text="0 so'm" />
                        </li>
                        <li>
                          <Typography Type="p" text="To'langan" />
                          <Typography Type="p" text="215 000 so'm" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="payment d-flex align-items-center justify-content-between">
                      <ul className="w_full">
                        <li>
                          <Typography Type="p" text="Buyurtma turi:" />
                          <Field
                            name="currency_id"
                            component={Fields.AsyncSelect}
                            loadOptionsUrl="/currency"
                            placeholder="Buyurtma turi"
                            size="xsm"
                            getOptionLabel={(option) =>
                              "label" in option ? option.label : ""
                            }
                            // initialValue={[constants.selectAll]}
                            className="min-width_150"
                            onValueChange={(option) =>
                              setFilter((prev) => ({
                                ...prev,
                                currency_id: get(option, "id"),
                              }))
                            }
                          />
                        </li>
                        <li>
                          <Typography
                            Type="p"
                            text="Oldindan buyurtma sanasi va vaqti:"
                          />
                        </li>
                        <li>
                          <Field
                            name="currency_id"
                            component={Fields.DatePicker}
                            loadOptionsUrl="/currency"
                            placeholder="Buyurtma sanasi"
                            size="xsm"
                            prepend=""
                            className="min-width_150 mr_10"
                          />
                          <Field
                            name="currency_id"
                            component={Fields.CustomTimePicker}
                            loadOptionsUrl="/currency"
                            placeholder="Buyurtma vaqti"
                            size="xsm"
                            className="min-width_150"
                            style={{ marginLeft: "10px" }}
                          />
                        </li>
                        <li>
                          <Typography Type="p" text="Kuryer/ofitsiant" />
                          <Typography Type="p" text="Abdullayev Feruzjon" />
                        </li>
                        <li>
                          <Typography
                            Type="p"
                            text="+998916469095/ zal banket"
                          />
                          <Typography
                            Type="p"
                            text="cobalt(80X796BA)/stol 12"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <Typography
                      Type="h4"
                      className="mt_20"
                      text="Yetkzaib berish manzili"
                    />
                  </div>
                  <div className="col-6 mt_40">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d95913.77323086653!2d69.17859299407553!3d41.3022190733888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38ae8a26816981df%3A0x3962646e37a9a13c!2z0JMu0KLQsNGI0LrQtdC90YIsINCn0LjQu9C-0L3Qt9Cw0YDRgdC60LjQuSDRgNCw0LnQvtC9LCAxNzMg0YLRg9C_0LjQuiDQpNGD0YDQutCw0YLQsCwgVGFzaGtlbnQgMTAwMTIz!3m2!1d41.3022403!2d69.24863289999999!5e0!3m2!1sru!2s!4v1678364291906!5m2!1sru!2s"
                      width="100%"
                      height="100%"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <Typography Type="h3" text="Mijoz malumotlari" />
                <div className="card border-bottom">
                  <FastField
                    name={"FIO"}
                    component={Fields.InputText}
                    label="FIO"
                    outerClass="mb_10"
                    defaultValue={"Abdullayev Abdulla"}
                    append={
                      <Typography
                        text="edit"
                        Type="h5"
                        className="cursor_pointer"
                      />
                    }
                  />
                  <FastField
                    name={"phone"}
                    component={Fields.InputMask}
                    prepend={""}
                    outerClass="mb_10"
                    defaultValue={"914649095"}
                    readOnly
                    append={
                      <Typography
                        text="copy"
                        Type="h5"
                        className="cursor_pointer"
                        onClick={console.log("copy")}
                      />
                    }
                  />
                  <FastField
                    name={"new_phone"}
                    outerClass="mb_20"
                    component={Fields.InputMask}
                    prepend={""}
                    append={
                      <Typography
                        text="save"
                        Type="h5"
                        className="cursor_pointer"
                      />
                    }
                  />
                </div>
                <div className="card order-history">
                  <Typography
                    Type="h4"
                    className="mb_20"
                    text="Harakatlar tarixi:"
                  />
                  <ul>
                    <li className="d-flex align-items-center mb_20">
                      <Avatar
                        borderColor={"blue"}
                        size="md"
                        className="mr_20"
                        src="data:image/png;base64,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"
                      />
                      <Typography
                        className="fz_18"
                        text="Yangi buyurtma kelib tushdi"
                        Type="p"
                      >
                        <Typography text="21.21.2021 12:20" Type="p" />
                      </Typography>
                    </li>
                    <li className="d-flex align-items-center mb_20">
                      <Avatar
                        borderColor={"blue"}
                        size="md"
                        className="mr_20"
                        src="data:image/png;base64,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"
                      />
                      <Typography
                        className="fz_18"
                        text="Yangi buyurtma kelib tushdi"
                        Type="p"
                      >
                        <Typography text="21.21.2021 12:20" Type="p" />
                      </Typography>
                    </li>
                    <li className="d-flex align-items-center mb_20">
                      <Avatar
                        borderColor={"blue"}
                        size="md"
                        className="mr_20"
                        src="data:image/png;base64,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"
                      />
                      <Typography
                        className="fz_18"
                        text="Yangi buyurtma kelib tushdi"
                        Type="p"
                      >
                        <Typography text="21.21.2021 12:20" Type="p" />
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Containers.Form>
  );
};

const Attributes = ({ foodTypes, onRemoveType }) => {
  return foodTypes?.map((foodType, index) => (
    <div key={index} className="mt_40">
      <div className="d-flex row align-items-center mb_20">
        <div className="col-11 mb_20">
          <Typography
            Type="span"
            className="color_brand-blue product__btn"
            text={`${index + 2} - Buyurtma`}
          />
          <div className="row">
            <div className="col-3">
              <FastField
                name={`attributes.${index}.attribute_name`}
                component={Fields.InputText}
                label="Nomi"
              />
            </div>
            <div className="col-3">
              <FastField
                name={`attributes.${index}.attribute_name`}
                component={Fields.InputText}
                label="Miqdori"
              />
            </div>
            <div className="col-3">
              <FastField
                name={`attributes.${index}.attribute_name`}
                component={Fields.InputText}
                label="Narxi"
              />
            </div>
            <div className="col-3">
              <FastField
                name={`attributes.${index}.attribute_name`}
                component={Fields.InputText}
                label="Umumiy"
              />
            </div>
          </div>
          <div className="col-12 mt_10">
            <FastField
              name={`attributes.${index}.attribute_name`}
              component={Fields.Textarea}
              label="Izohi"
              size={"textarea"}
            />
          </div>
        </div>
        <div className="col-1">
          <Button
            className="color_primary-red product__btn"
            text="O'chirish"
            onClick={(event) => onRemoveType(index, event)}
          />
        </div>
      </div>
    </div>
  ));
};

export default OrdersDetail;
