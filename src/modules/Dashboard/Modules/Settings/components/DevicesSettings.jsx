import React from "react";
import { Table } from "components";

export const DevicesSettings = () => {

    const data = [
        {
            ip:"24.47.15.180",
            device:"Web , Chrome",
            connect_time:"31.10.2022 23:58",
        },
        {
            ip:"24.47.15.180",
            device:"Web , Chrome",
            connect_time:"31.10.2022 23:58",
        }
    ]

	return (
        <Table
        emptyUiText="Hozirgi vaqtda hech qanday Vendorlar yo'q"
        // isLoading={debtorList.isLoading}
        deleteAction={(device) => {
            console.log(device)
        }}
        columns={[
            {
                title: "IP address",
                dataKey: "ip",
                render: (value) => value,
            },
            {
                title: "Qurilma",
                className: "white-space_no-wrap",
                dataKey: "device",
                render: (value) => value
            },
            {
                title: "Ulanagan vaqti",
                dataKey: "connect_time",
                className: "white-space_no-wrap",
                render: (value) => value
            },
        ]}
        items={data}
    />
	);
};