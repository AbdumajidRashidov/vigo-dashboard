import React from "react";

import Container from "containers";
import { FastField } from "formik";

import { Table, Avatar, Typography } from "components";

const TasksTab = () => {
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
    },
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
      status: "inactive",
      order_count: "40",
      income: "$ 1600",
      channels: ["kanal1", "kanal2"],
      last_activity: "12.12.2121 12:21",
    },
  ];

  return (
    <>
    <div className="tasks">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between w-100 mb_20">
                    <h4 className="text-dark fs-14 "> Topshiriqlar - 2 | Bugun - 1</h4>
                </div>
                <div className="task__single mb_20">
                    <div className="card-default card-sm bg-normal card-bordered">
                    <div className="card-header">
                        <h6 className="font-size: 12px;">
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
                        Nomi: Telefon qilish &nbsp; &nbsp;&nbsp;
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
                            className="feather feather-clock"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Vaqti: 12.08.2022 14:08 &nbsp; &nbsp;&nbsp;
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
                            className="feather feather-calendar"
                        >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Muddati: 31.08.2022 12:00 &nbsp; &nbsp;&nbsp;
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
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        Kim: Burhon Baqoyev{" "}
                        </h6>
                    </div>
                    <div className="card-body" >
                        <div className="card-content">
                        <p>Card content</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="task__single mb_20">
                    <div className="card-default card-sm bg-normal card-bordered">
                    <div className="card-header">
                        <h6 className="font-size: 12px;">
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
                        Nomi: Telefon qilish &nbsp; &nbsp;&nbsp;
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
                            className="feather feather-clock"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Vaqti: 12.08.2022 14:08 &nbsp; &nbsp;&nbsp;
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
                            className="feather feather-calendar"
                        >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Muddati: 31.08.2022 12:00 &nbsp; &nbsp;&nbsp;
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
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        Kim: Burhon Baqoyev{" "}
                        </h6>
                    </div>
                    <div className="card-body" >
                        <div className="card-content">
                        <p>Card content</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default TasksTab;
