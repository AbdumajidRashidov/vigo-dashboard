import React, { useEffect, useState } from "react";
import { FastField } from "formik";
import { get } from "lodash";

import { utils, adapters } from "services";

import { ModalDefault, Fields, Button, Typography } from "components";
import Containers from "containers";

// import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
// import { ReactComponent as HeartRedIcon } from "assets/icons/heart-red.svg";
// import { ReactComponent as ShareIcon } from "assets/icons/share.svg";

export const AddOrderModal = ({
  isOpen,
  handleModalClose,
  onSuccess,
  isUpdate,
  values,
}) => {
  const [count, setCount] = useState(1);
  const handleMinusBtn = () => {
    if (count == 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  const handlePlusBtn = () => {
    setCount(count + 1);
  };
  const [saved, setSaved] = useState(false);

  return (
    <ModalDefault
      innerClass="max-width_500"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      //   title={isUpdate ? "Обновить блюдо" : "Создать блюдо"}
    >
      <Containers.Form
        url={isUpdate ? `/food/${get(values, "id")}` : "/food"}
        method={isUpdate ? "put" : "post"}
        onSuccess={onSuccess}
        fields={[
          {
            name: "title",
            validationType: "object",
            isLanguageSchema: true,
            value: get(values, "title"),
          },
          {
            name: "description",
            validationType: "object",
            isLanguageSchema: true,
            value: get(values, "description"),
          },
          {
            name: "products",
            validationType: "array",
            value: isUpdate
              ? adapters.productAdapter(get(values, "products"))
              : [
                  {
                    product_id: "",
                    quantity: "",
                  },
                ],
            lazy: (validator, yup) =>
              validator.of(
                yup.object().shape({
                  quantity: yup.string(),
                  product_id: yup.object(),
                })
              ),
            onSubmitValue: (value) =>
              value.map((item) => ({
                product_id: get(item, "product_id.id"),
                quantity: utils.formatters.formatCurrencyApi(item.quantity),
              })),
          },
          {
            name: "category_id",
            validationType: "object",
            validations: [{ type: "typeError" }, { type: "required" }],
            value: get(values, "category"),
            onSubmitValue: (value) => get(value, "id"),
          },
          {
            name: "status",
            value: 1,
          },
        ]}
      >
        {({ isSubmitting, values, setFieldValue, errors }) => (
          <>
            <div className="row g-4">
              <div className="food-modal">
                <div className="food-modal__header">
                  <img
                    className="food-modal__img"
                    src={"https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="}
                    alt=""
                  />
                  <div className="icons">
                    <Button
                    //   append={saved ? <HeartRedIcon /> : <HeartIcon />}
                      onClick={() => setSaved(!saved)}
                    />
                    {/* <Button append={<ShareIcon />} /> */}
                  </div>
                </div>

                <Typography
                  Type="h4"
                  text="Hamburger"
                  className="food-modal__title"
                />
                <Typography
                  Type="p"
                  text="Oshirma xamirdan bulochka, maxsus sous, aysberg, tuzlangan bodring, mol go'shtidan kotlet, pomidor, pishloq, shirin piyoz halqalari «Brunsvik»"
                  className="food-modal__desc"
                />
                <div className="food-modal__type">
                  <Typography Type="h4" text="Turi" />
                  <div className="col-12">
                    <FastField
                      component={Fields.RadioButton}
                      label="Qo'shimchalar"
                      name="type"
                    />
                    <Typography Type="span" text="10 000 so’m" />
                  </div>
                </div>
                <div className="food-modal__ingridients">
                  <Typography Type="h4" text="Ingredientlar" />
                  <div className="col-12">
                    <FastField
                      component={Fields.CheckBox}
                      label="Pishloqli"
                      name="ingredients"
                    />
                    <Typography Type="span" text="10 000 so’m" />
                  </div>
                  <div className="col-12">
                    <FastField
                      component={Fields.CheckBox}
                      label="Chili"
                      name="ingredients"
                    />
                    <Typography Type="span" text="7 000 so’m" />
                  </div>
                </div>
                <div className="food-modal__btns">
                  <div className="add-favourite">
                    <Button
                      onClick={handleMinusBtn}
                      className="btn"
                      design="secondary"
                      text={"-"}
                    />
                    <span>{count}</span>
                    <Button
                      onClick={handlePlusBtn}
                      className="btn"
                      design="primary"
                      text={"+"}
                    />
                  </div>
                  <Button
                    design="primary"
                    type="submit"
                    className="btn submit_btn"
                    text="26 000 so’m qo’shish"
                    isLoading={isSubmitting}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </Containers.Form>
    </ModalDefault>
  );
};
