import React, { useState } from "react";
import { FastField } from "formik";
import "../styles/settings.scss";

import Containers from "containers";
import { Fields, Button, Typography } from "components";

const Delevery = () => {
  const [deleveryType, setDeleveryType] = useState("constant");
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
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
                name: "constant",
                value:deleveryType,
                validations: [{ type: "required" }],
              },
              {
                name: "working_contact",
                validations: [{ type: "required" }],
              },
            ]}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <>
                <div className="col-12 mb_20">
                  <Typography Type="h3" text="Yetkazib berish sozlamalari" />
                </div>
                <div className="col-12">
                  <FastField
                    name="constant"
                    component={Fields.RadioButton}
                    label="O'zgarmas yetkazib berish narxi"
                    value="constant"
                    onChange={() => setDeleveryType("constant")}
                  />
                </div>
                <div className="col-12">
                  <FastField
                    name="constant"
                    component={Fields.RadioButton}
                    label="O'zgaruvchan yetkazib berish narxi"
                    value="variable"
                    onChange={() => setDeleveryType("variable")}
                  />
                </div>
                {deleveryType == "constant" ? (
                  <>
                    <div className="col-12">
                      <FastField
                        name="user_id"
                        component={Fields.InputText}
                        placeholder="Yetkazib berish narxi"
                      />
                    </div>
                    <div className="col-12">
                      <FastField
                        name="service_id"
                        component={Fields.InputText}
                        placeholder="Berilgan narxdan yuqoribuyurtmalar uchun bepul yetkazib berish"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-12">
                      <FastField
                        name="merchand_id"
                        component={Fields.InputText}
                        placeholder="Har bir kim uchun yetkazib berish narxi"
                      />
                    </div>
                    <div className="col-12">
                      <FastField
                        name="somessad"
                        component={Fields.InputText}
                        placeholder="Yetkazib berish minimal narxi"
                      />
                    </div>
                    <div className="col-12">
                      <FastField
                        name="kasdasey"
                        component={Fields.InputText}
                        placeholder="Berilgan narxdan yuqori buyurtmalar uchun bepul yetkzaib berish narxi"
                      />
                    </div>
                  </>
                )}

                <div className="col-3 mb_15">
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
        </div>
      </div>
    </div>
  );
};

export default Delevery;
