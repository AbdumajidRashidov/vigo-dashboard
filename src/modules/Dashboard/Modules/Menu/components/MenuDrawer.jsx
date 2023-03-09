import React from "react";
import { FastField } from "formik";

import { ReactComponent as AddIcon } from "assets/icons/add-item.svg";

import Containers from "containers";
import {
  DrawerDefault,
  Fields,
  Button,
  FileUpload,
  Typography,
} from "components";

export const AddMenuDrawer = ({
  isOpen,
  handleModalClose,
  isUpdate,
  values,
}) => {
  
  const handleRemoveFoodType = (selectedIndex, foodTypes, setFieldValue) => {
    const newTypes = foodTypes.filter((item, index) => {
      return index !== selectedIndex;
    });
    setFieldValue("types", newTypes);
  };

  const handleAddFoodType = (types, setFieldValue) => {
    const newTypes = {
      type_name: "",
      products: [
        {
          product_name: "",
          prise: "",
        },
      ],
    };
    setFieldValue("types", [...types, newTypes]);
  };

  const handleRemoveFoodAttribute = (selectedIndex, foodAttibutes, setFieldValue) => {
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
    <DrawerDefault
      innerClass="max-width_500"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
    >
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
            name: "types",
            validationType: "array",
            value:[],
            onSubmitValue: (value) =>
              value.map((item) => ({
                // type_name: get(item, "product_name.product_name"),
                // quantity: utils.formatters.formatCurrencyApi(item.quantity),
              })),
          },
          {
            name: "attributes",
            validationType: "array",
            value:[],
            onSubmitValue: (value) =>
              value.map((item) => ({
                // type_name: get(item, "product_name.product_name"),
                // quantity: utils.formatters.formatCurrencyApi(item.quantity),
              })),
          },
        ]}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <>
            <div className="col-12">
              <Typography Type="h3" text="Taom qo'shish" />
            </div>
            <div className="col-12">
              <FastField
                name="name_uz"
                component={Fields.InputText}
                placeholder="Nomi"
                label="Nomi"
              />
            </div>
            <div className="col-12">
              <FastField
                name="phone"
                component={Fields.Select}
                placeholder="Kategoriya"
                prepend=""
                label="Kategoriya"
              />
            </div>
            <div className="col-12">
              <FastField
                name="price"
                component={Fields.InputText}
                placeholder="Narxi"
                label="Narxi"
              />
            </div>
            <div className="col-12">
              <FastField
                name="comment_uz"
                component={Fields.Textarea}
                placeholder="Tavsif"
                label="Tavsif"
                size="textarea"
              />
            </div>
            <div className="col-12 mb_20">
              <FastField
                name="images"
                component={FileUpload}
                placeholder="Rasmlar"
                label="Rasmlar"
                title="Rasmlar"
                subtitle="Rasm joylash ixtiyoriy"
              />
            </div>
            <div className="col-12 mb_20">
                <Types
                    foodTypes={values?.types}
                    onRemoveType={(selectedIndex) => {
                        handleRemoveFoodType(
                            selectedIndex,
                            values.types,
                            setFieldValue
                        );
                        }}
                    
                    setFieldValue={setFieldValue}
                />
                <Button
                    className="add-item mt_20"
                    prepend={<AddIcon />}
                    text="Yangi to'plam qo'shish"
                    onClick={(event) =>
                    handleAddFoodType(values?.types, setFieldValue)
                    }
                />
            </div>
            <div className="col-12 mb_20">
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
                    className="add-item mt_20"
                    prepend={<AddIcon />}
                    text="Yangi Atribut qo'shish"
                    onClick={(event) =>
                    handleAddFoodAttribute(values?.attributes, setFieldValue)
                    }
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
    </DrawerDefault>
  );
};

const Types = ({ foodTypes, onRemoveType, onRemoveProduct,setFieldValue }) => {

    const handleAddFoodProduct = (index, products, setFieldValue) => {
        const newProduct = {
            product_name: "",
            prise: "",
        };
        setFieldValue(`types[${index}].products`, [...products, newProduct]);
    };
    const handleRemoveFoodProduct = (
        typeIndex,
        selectedIndex,
        foodProducts,
        setFieldValue
      ) => {
        const newProducts = foodProducts.filter((item, index) => {
          return index !== selectedIndex;
        });
        setFieldValue(`types[${typeIndex}].products`, newProducts);
      };

      return foodTypes?.map((foodType, index) => (
      <div key={index} className="mt_40">
        <div className="d-flex row align-items-center justify-content-between mb_20">
        <div className="col-10 mb_20">
             <Typography
					Type="span"
					className="color_brand-blue product__btn "
					text={`${index + 1}-Tur`}
				/>
            <FastField
              name={`types.${index}.type_name`}
              component={Fields.InputText}
              label="Tur nomi"
              placeholder="Tur nomi"
            />
            
          </div>
          <div className="col-2">
            <Button
              className="color_primary-red product__btn"
              text="O'chirish"
              onClick={(event) => onRemoveType(index, event)}
            />
          </div>
          <Ingredients foodProducts={foodType.products} setFieldValue={setFieldValue} typeIndex = {index} onRemove={handleRemoveFoodProduct}/> 
          <div className="col-12">
                <Button
                    className="add-item"
                    prepend={<AddIcon />}
                    text="Tur qo'shish"
                    onClick={(event) => {
                            handleAddFoodProduct(index ,foodType?.products, setFieldValue)
                        }
                    }
                />
          </div>
        </div>
      </div>
    ));
};

const Ingredients = ({ foodProducts,onRemove, setFieldValue, typeIndex }) => {
	return foodProducts.map((foodProduct, index) => (
		<div key={index}>
			<div key={index} className="row g-4 mb_10">
				<div className="col-5">
					<FastField
						name={`products.${index}.product_name`}
						component={Fields.InputText}
						label="Nomi"
						placeholder="Nomi"
					/>
				</div>

				<div className="col-5">
					<FastField
						name={`products.${index}.prise`}
						component={Fields.InputNumber}
						label="Narxi"
						placeholder="Narxi"
					/>
				</div>
                <div className="col-2">
                        <Button
                        className="color_primary-red product__btn"
                        text="O'chirish"
                        onClick={(event) => onRemove(typeIndex,index,foodProducts,setFieldValue)}
                        />
                </div>
			</div>
		</div>
	));
};

const Attributes = ({ foodTypes, onRemoveType, onRemoveProduct,setFieldValue }) => {

    const handleAddFoodProduct = (index, products, setFieldValue) => {
        const newProduct = {
            product_name: "",
            prise: "",
        };
        setFieldValue(`attributes[${index}].products`, [...products, newProduct]);
    };
    const handleRemoveFoodProduct = (
        typeIndex,
        selectedIndex,
        foodProducts,
        setFieldValue
      ) => {
        const newProducts = foodProducts.filter((item, index) => {
          return index !== selectedIndex;
        });
        setFieldValue(`attributes[${typeIndex}].products`, newProducts);
      };

      return foodTypes?.map((foodType, index) => (
      <div key={index} className="mt_40">
        <div className="d-flex row align-items-center justify-content-between mb_20">
        <div className="col-10 mb_20">
             <Typography
					Type="span"
					className="color_brand-blue product__btn "
					text={`${index + 1} - Atribut`}
				/>
            <FastField
              name={`attributes.${index}.attribute_name`}
              component={Fields.InputText}
              label="Atribut nomi"
              placeholder="Atribut nomi"
            />
            
          </div>
          <div className="col-2">
            <Button
              className="color_primary-red product__btn"
              text="O'chirish"
              onClick={(event) => onRemoveType(index, event)}
            />
          </div>
          <Ingredients foodProducts={foodType.products} setFieldValue={setFieldValue} typeIndex = {index} onRemove={handleRemoveFoodProduct}/> 
          <div className="col-12">
                <Button
                    className="add-item"
                    prepend={<AddIcon />}
                    text="Tur qo'shish"
                    onClick={(event) => {
                            handleAddFoodProduct(index ,foodType?.products, setFieldValue)
                        }
                    }
                />
          </div>
        </div>
      </div>
    ));
};