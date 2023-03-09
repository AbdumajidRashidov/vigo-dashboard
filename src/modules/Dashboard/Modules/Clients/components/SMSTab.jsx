import React from "react";

import Container from "containers";
import { FastField } from "formik";

import { Table, Fields, Avatar, Typography } from "components";

const SMSTab = () => {

    const data = [
        {
            id:"#123a12",
            first_name:"Falonchi",
            last_name:"Falonchiyev",
            name:"Jonibek Negmurodov",
            phone:99895655443, 
            email:"birnima@gmail.com",
            tarif:"121",
            filial:3,
            country:"Uzbekistan",
            status:"active",
            order_count:"40",
            income:"$ 1600",
            channels:["kanal1","kanal2"],
            last_activity:"12.12.2121 12:21",
            date:"20.09.2032"
        },
        {
            id:"#123a12",
            first_name:"Falonchi",
            last_name:"Falonchiyev",
            name:"Jonibek Negmurodov",
            phone:99895655443, 
            email:"birnima@gmail.com",
            tarif:"121",
            filial:3,
            country:"Uzbekistan",
            status:"inactive",
            order_count:"40",
            income:"$ 1600",
            channels:["kanal1","kanal2"],
            date:"20.09.2032",
            type:"shablon",
            last_activity:"12.12.2121 12:21"
        }
    ]

	return (
		<>
            <Table
				emptyUiText="Hozirgi vaqtda hech qanday Vendorlar yo'q"
				// isLoading={debtorList.isLoading}
				columns={[
					{
						title:"Nomi",
						dataKey: "name",
						render: (value) =>value
					},
					{
						title: "turi",
						dataKey: "type",
						render: (value) => value
					},
					{
						title: "Vaqti",
						dataKey: "last_activity",
						className: "white-space_no-wrap",
						render: (value) => value,
					},
				]}
				items={data}
			/>

			{/* <Pagination
				currentPage={debtorList.page}
				pageCount={get(debtorList, "meta.pageCount")}
				onPageChange={(newPage) => debtorList.setPage(newPage + 1)}
			/> */}
		</>
	);
};

export default SMSTab;
