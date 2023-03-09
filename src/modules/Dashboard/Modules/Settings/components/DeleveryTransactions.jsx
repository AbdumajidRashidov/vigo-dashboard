import React from "react";

import { Table, Status } from "components";

const DeleveryTransactions = () => {

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
            income:"160 000 so'm",
            channels:["kanal1","kanal2"],
            last_activity:"12.12.2121 12:21",
            payment_type:"naqd"
        },
        {
            payment_type:"plastik",
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
            income:"16 000 so'm",
            channels:["kanal1","kanal2"],
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
						title:"Id",
						dataKey: "id",
						render: (value) =>value
					},
					{
						title: "Vaqti",
						dataKey: "last_activity",
						render: (value) => value
					},
					{
						title: "Summa",
						dataKey: "income",
						render: (value) => value,
					},
                    {
						title: "To'lov turi",
						dataKey: "payment_type",
						render: (value) => value
					},
                    {
						title: "Status",
						dataKey: "status",
						render: (value) => <Status type={"success"} message={value}/>
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

export default DeleveryTransactions;
