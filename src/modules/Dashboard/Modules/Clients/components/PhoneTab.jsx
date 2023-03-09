import React from "react";

import Container from "containers";
import { FastField } from "formik";

import { Table, Fields, Avatar, Typography } from "components";

const PhoneTab = () => {

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
						title: <Container.Form
								url="/user/sign-up"
								fields={[
									{
										name: "terms",
										validations: [{ type: "typeError" }, { type: "required" }],
									},
								]}
								>
								{({ isSubmitting, values, isValid, dirty }) => (
									<FastField
										name="terms"
										component={Fields.CheckBox}
									/>
								)}
							</Container.Form>,
						dataKey: "id",
						render: (value) => <Container.Form
											url="/user/sign-up"
											onSuccess={(response) => {
											}}
											fields={[
												{
													name: "terms",
													validations: [{ type: "typeError" }, { type: "required" }],
												},
											]}
										>
											{({ isSubmitting, values, isValid, dirty }) => (
												<FastField
													name="terms"
													component={Fields.CheckBox}
												/>
											)}
										</Container.Form>,
					},
					{
						title:"Telefon",
						dataKey: "phone",
						render: (value) =>value
					},
					{
						title: "Sana",
						dataKey: "date",
						render: (value) => value
					},
					{
						title: "Davomiyligi",
						dataKey: "order_count",
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

export default PhoneTab;
