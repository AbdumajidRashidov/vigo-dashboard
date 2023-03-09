import React, { useState } from "react";
import "../styles/orders.scss";
import { useOverlay } from "hooks";

import { PageHeading, TabBase, Typography, Button } from "components";
import { OrdersAddFilter } from "../components/OrdersAddFilter";
import { AddOrderModal } from "../components/modals/AddOrderModal";
import { AddNewClientModal } from "../components/modals/AddNewClientModal";
import { ClientsSearchInput } from "../components/ClientSearchInput";
import { AddCommentModal } from "../components/modals/AddCommentModal";
import OrderItem from "../components/OrderItem";
import OrderCheckout from "../components/OrderCheckout";

const AddOrders = () => {
  const [tab, setTab] = useState("Barchasi");
  const modal = useOverlay({
    uniqueName: "addOrderModal",
    onClose: () => setIsUpdate(false),
  });
  const modalClient = useOverlay({
    uniqueName: "addNewClientModal",
    onClose: () => setIsUpdate(false),
  });
  const modalComment = useOverlay({
    uniqueName: "addNewCommentModal",
    onClose: () => setIsUpdate(false),
  });

  const data = [
    {
      id: "#123a12",
      first_name: "Falonchi",
      last_name: "Falonchiyev",
      name: "Jonibek Negmurodov",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "active",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1", "kanal2"],
      last_activity: "12.12.2121 12:21",
      payment_type: "Naqd",
    },
    {
      id: "#123a12",
      payment_type: "Naqd",
      first_name: "Falonchi",
      last_name: "Falonchiyev",
      name: "Jonibek Negmurodov",
      phone: 99895655443,
      email: "birnima@gmail.com",
      tarif: "121",
      filial: 3,
      country: "Uzbekistan",
      status: "inactive",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1", "kanal2"],
      last_activity: "12.12.2121 12:21",
    },
  ];

  return (
    <>
      <AddOrderModal
        isOpen={modal.isOverlayOpen}
        handleModalClose={modal.handleOverlayClose}
        onSuccess={() => {
          modal.handleOverlayClose();
        }}
      />
      <AddNewClientModal
        isOpen={modalClient.isOverlayOpen}
        handleModalClose={modalClient.handleOverlayClose}
        onSuccess={() => {
          modalClient.handleOverlayClose();
        }}
      />
      <AddCommentModal
        isOpen={modalComment.isOverlayOpen}
        handleModalClose={modalComment.handleOverlayClose}
        onSuccess={() => {
          modalComment.handleOverlayClose();
        }}
      />
      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { link: "/dashboard/orders", label: "Buyurtmalar" },
          { label: "Buyurtma qo'shish" },
        ]}
        title="Buyurtma qo'shish"
      />
      <div className="row">
        <div className="col-8">
          <OrdersAddFilter />
          <div className="row">
            <div className="col-12">
              <TabBase
                className="mb_20 mt_20"
                labels={[
                  "Barchasi",
                  "Somsalar",
                  "Ichimliklar",
                  "Gazaklar",
                  "Desertlar",
                  "Shirinliklar",
                ]}
                currentLabel={tab}
                onPaneChange={(active, event) => setTab(active)}
              />
              <div className="cards">
                {tab === "Barchasi" ? (
                  <div className="row all">
                    <div className="col-3">
                      <div
                        className="order-card mr-2"
                        onClick={modal.handleOverlayOpen}
                      >
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Pizza" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div
                        className="order-card mr-2"
                        onClick={modal.handleOverlayOpen}
                      >
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Pizza" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Pizza" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Pizza" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Pizza" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Pizza" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : tab === "Somsalar" ? (
                  <div className="row somsalar">
                    <div className="col-3">
                      <div
                        className="order-card mr-2"
                        onClick={modal.handleOverlayOpen}
                      >
                        <img
                          width="100%"
                          src="https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Somsa" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Somsa" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Somsa" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Somsa" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Somsa" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Somsa" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Somsa" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="order-card mr-2">
                        <img
                          width="100%"
                          src="https://media.istockphoto.com/id/1455489567/photo/homemade-asian-pastry-samosa-on-white-wooden-side-view.jpg?b=1&s=170667a&w=0&k=20&c=3DnxV4SrX_6X5Ze9a1bYV3TEBFa9lbl0Ji3oJVesC5c="
                          alt=""
                        />
                        <div className="order-card_body">
                          <Typography Type="h4" text="Somsa" />
                          <Typography Type="p" text="25 000 so'm" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <ClientsSearchInput />
            <Button
              onClick={modalClient.handleOverlayOpen}
              design="primary"
              className="btn mb_20"
              style={{ margin: "o auto" }}
              text={"+ Yangi mijoz qo'shish"}
            />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <Button
              onClick={modalComment.handleOverlayOpen}
              design="primary"
              className="btn mt_20"
              style={{ margin: "o auto" }}
              text={"+ Buyurtmaga izoh qo'shish"}
            />
            <OrderCheckout />
            <div className="btns d-flex">
              <Button
                onClick={modalComment.handleOverlayOpen}
                design="primary"
                className="btn mr_20"
                text={"X"}
              />
              <Button
                onClick={modalComment.handleOverlayOpen}
                design="primary"
                className="btn w_full"
                style={{ margin: "o auto" }}
                text={"Tasdiqlash"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOrders;
