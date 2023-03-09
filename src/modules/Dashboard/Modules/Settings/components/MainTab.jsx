import React from "react";

import Container from "containers";
import { FastField } from "formik";

import { Table, Fields, Avatar, Typography, Status } from "components";
import { DeleveryStatistics } from "./DeleveryStatistics";

const MainTab = () => {

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
			payment_type:"naqd"
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
            last_activity:"12.12.2121 12:21",
			payment_type:"naqd"
        }
    ]

	return (
		<>

            <div className="row">
                <div className="col-4 mb_10">
                    <div className="card bg-primary">
                        <Typography Type="h4" text="12" />
                        <Typography Type="p" text="Buyurtmalar soni"/>
                    </div>
                </div>
                <div className="col-4 mb_10">
                    <div className="card bg-success">
                        <Typography Type="h4" text="300 000 so'm" />
                        <Typography Type="p" text="Umumiy summa"/>
                    </div>
                </div>
                <div className="col-4 mb_10">
                    <div className="card bg-yellow">
                        <Typography Type="h4" text="230 000 so'm" />
                        <Typography Type="p" text="Naqd olgan"/>
                    </div>
                </div>
                <div className="col-4 mb_10">
                    <div className="card bg-red">
                        <Typography Type="h4" text="50 000 so'm" />
                        <Typography Type="p" text="Kartadan olgan"/>
                    </div>
                </div>
                <div className="col-4 mb_10">
                    <div className="card bg-info">
                        <Typography Type="h4" text="20 000 so'm" />
                        <Typography Type="p" text="Joriy balans"/>
                    </div>
                </div>
                <div className="col-4 mb_10">
                    <div className="card bg-danger">
                        <Typography Type="h4" text="12 000 so'm" />
                        <Typography Type="p" text="Cachback"/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <DeleveryStatistics/>
                </div>
            </div>

            <Typography Type="h3" className="mt_30 mb_30" text="Kelgan izohlar"/>
            <Table
				emptyUiText="Hozirgi vaqtda hech qanday izoh yo'q"
				// isLoading={debtorList.isLoading}
                className="mb_30"
				columns={[
					{
						title:"Id",
						dataKey: "id",
						render: (value) =>value
					},
					{
						title: "Mijoz nomi",
						dataKey: "custumer",
						render: (value) => <p style={{width:"120px"}}>Kellie Marquote</p>
					},
					{
						title: "Buyurtma Id",
						dataKey: "order_id",
						className: "white-space_no-wrap",
						render: (value) => "#12343",
					},
					{
						title: "Baho",
						dataKey: "rate",
						render: (value) => "5",
					},
                    {
						title: "Izoh",
						dataKey: "comment",
						render: (value) =>"yaxshi",
					},
                    {
						title: "Vaqti",
						dataKey: "last_activity",
						render: (value) => <p style={{width:"130px"}} >{value}</p>,
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

export default MainTab;
