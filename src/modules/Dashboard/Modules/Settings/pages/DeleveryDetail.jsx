import React, { useState } from "react";
import { useOverlay } from "hooks";
import { useParams } from "react-router-dom";
import "../styles/settings.scss"

import { ActionButtons, PageHeading, Typography,TabBase, Avatar } from "components";
import { SMSDrawer } from "../components/Modals/SMSDrawer";
import { PhoneModal } from "../components/Modals/PhoneModal";

import OrdersTab from "../components/OrdersTab";
import DeleveryTransactions from "../components/DeleveryTransactions";
import MainTab from "../components/MainTab";

const DeleveryDetail = () => {
  const { name } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [tab, setTab] = useState("Asosiy");
  const SMSmodal = useOverlay({ uniqueName: "SMSModal", onClose: () => setIsUpdate(false) });
  const phoneModal = useOverlay({ uniqueName: "phoneModal", onClose: () => setIsUpdate(false) });

  return (
    <>

        <SMSDrawer
			isOpen={SMSmodal.isOverlayOpen}
			handleModalClose={SMSmodal.handleOverlayClose}
			onSuccess={() => {
				SMSmodal.handleOverlayClose();
		}}/>
        <PhoneModal
			isOpen={phoneModal.isOverlayOpen}
			handleModalClose={phoneModal.handleOverlayClose}
			onSuccess={() => {
				phoneModal.handleOverlayClose();
		}}/>
			

      <PageHeading
        links={[
          { link: "/dashboard", label: "Asosiy" },
          { link: "/dashboard/employees", label: "Xodimlar" },
          { label: `Kuryer - Falonchiyev Falonchi ` },
        ]}
        title="Kuryerlar"
      />

      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card__header">
                <Avatar size="sm" src="https://picsum.photos/100" />
              <Typography Type="h3" className="fw_500" text={`Kuryer Kuryer`} />
              <ActionButtons deleteAction={()=>{}} editAction={() => {}} />
            </div>
            <div className="card__body">
              <ul className="card__list">
              <li className="card__list-item">
                  <span className="version-date">ID</span>
                  <span className="version-name">12345</span>
                </li>
                <li className="card__list-item">
                  <span className="version-date">Telefon</span>
                  <span className="version-name">+998997025312</span>
                </li>
                <li className="card__list-item">
                  <span className="version-date">Email</span>
                  <span className="version-name">kuryer@gmail.com</span>
                </li>

                <li className="card__list-item">
                  <span className="version-date">Ish turi</span>
                  <span className="version-name">online</span>
                </li>
                <li className="card__list-item">
                  <span className="version-date">Kategoriyasi</span>
                  <span className="version-name">kategoriya1</span>
                </li>
              </ul>
              {!isVisible && (
                <ul className="card__list" onClick={() => setIsVisible(true)}>
                  <li className="card__list-item">
                    <span className="more">Ko'proq</span>
                  </li>
                </ul>
              )}

              {isVisible && (
                <>
                  <ul className="card__list ">
                    <li className="card__list-item">
                      <span className="version-date">Holati</span>
                      <span className="version-name">
                        <span className="selling-badge">Faol</span>
                      </span>
                    </li>
                    <li className="card__list-item">
                      <span className="version-date">Jinsi</span>
                      <span className="version-name">Erkak</span>
                    </li>
                    <li className="card__list-item">
                      <span className="version-date">Tug'ilgan sanasi</span>
                      <span className="version-name"> 27.05.2000</span>
                    </li>
                    <li className="card__list-item">
                      <span className="version-date">Telefon</span>
                      <span className="version-name">+998997025312</span>
                    </li>
                    <li className="card__list-item">
                      <span className="version-date">Teglar</span>
                      <span className="version-name">
                        {" "}
                        <div className="atbd-tag-wrap">
                          <div className="tag-box">
                            <span className="atbd-tag tag-light ">Tag 1</span>
                            <span className="atbd-tag tag-light">Tag 2</span>
                          </div>
                        </div>
                      </span>
                    </li>
                    <li className="card__list-item">
                      <span className="version-date">Izoh</span>
                      <span className="version-name">bla la .....</span>
                    </li>
                  </ul>
                  <ul
                    className="card__list border-bottom"
                    onClick={() => setIsVisible(false)}
                  >
                    <li className="card__list-item">
                      <span className="more">Kamroq</span>
                    </li>
                  </ul>
                </>
              )}

              <div className="row p-3">
                <ul className="card__list border-bottom">
                  <li className="card__list-item">
                    <span className="version-date fw_700">Cashback balans</span>
                    <span className="version-name">
                      <span className="selling-badge">100 000</span>
                    </span>
                  </li>
                  <li className="card__list-item">
                    <span className="version-date">Bazars.uz</span>
                    <span className="version-name">
                      <span className="selling-badge color-success">
                        120 000
                      </span>
                    </span>
                  </li>
                  <li className="card__list-item">
                    <span className="version-date">POS</span>
                    <span className="version-name">
                      <span class="selling-badge color-success">-100 000</span>
                    </span>
                  </li>
                  <li className="card__list-item">
                    <span className="version-date">Telegram bot</span>
                    <span className="version-name">
                      <span class="selling-badge color-success">-100 000</span>
                    </span>
                  </li>
                  <li className="card__list-item">
                    <span className="version-date">Domen.uz</span>
                    <span className="version-name">
                      <span className="selling-badge color-success">
                        100 000
                      </span>
                    </span>
                  </li>
                </ul>
                <ul className="card__list">
                  <li className="card__list-item">
                    <span className="version-date">Tezkor xizmatlar</span>
                  </li>

                  <li className="card__list-item">
                    <span className="action">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-clipboard"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      </svg>
                      <span className="atbd-menu__text">
                        Statusni o'zgartirish
                      </span>
                    </span>
                  </li>

                  <li className="card__list-item" onClick={SMSmodal.handleOverlayOpen}>
                    <span className="action">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-mail"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span
                        className="atbd-menu__text view drawer-trigger"
                        data-drawer="account"
                      >
                        SMS yuborish
                      </span>
                    </span>
                  </li>
                  <li className="card__list-item" onClick={phoneModal.handleOverlayOpen}>
                    <span className="action">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span
                        className="atbd-menu__text"
                        data-toggle="modal"
                        data-target="#modal-basic3"
                      >
                        Telefon qilish
                      </span>
                    </span>
                  </li>
                  <li className="card__list-item">
                    <span className="action">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-clipboard"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      </svg>
                      <span className="atbd-menu__text">
                        Parolni o'zgartirish
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
            <div className="card">
                <TabBase
					className="mb_30"
					labels={["Asosiy","Tranzaksiyalar","Buyurtmalar"]}
					currentLabel={tab}
					onPaneChange={(active, event) => setTab(active)}
				/>
                {
                    tab ==="Asosiy" ? <MainTab/> :
                    tab ==="Tranzaksiyalar" ? <DeleveryTransactions/> : 
                     <OrdersTab/>  
                }
            </div>
        </div>
      </div>
    </>
  );
};

export default DeleveryDetail;
