import React,{useState} from "react";
import { get } from "lodash";

import { time, utils, adapters } from "services";
import { useFetchList, useFetchOne, useGetLanguage, useOverlay } from "hooks";

import { PageHeading, Status, Table } from "components";
import { AddVendorDrawer }  from "../components/VendorDrawer";
import { VendorsFilter } from "../components/VendorsFilter";

const Vendors = () => {
    const [filter, setFilter] = useState({});
    const modal = useOverlay({ uniqueName: "addVendorModal", onClose: () => setIsUpdate(false) });

    const data = [
        {
            id:"1",
            first_name:"Falonchi",
            last_name:"Falonchiyev",
            phone:99895655443, 
            email:"birnima@gmail.com",
            tarif:"121",
            filial:3,
            country:"Uzbekistan",
            status:"active"
        }
    ]

	return (
		<>
			<AddVendorDrawer
			isOpen={modal.isOverlayOpen}
			handleModalClose={modal.handleOverlayClose}
			onSuccess={() => {
				modal.handleOverlayClose();
			}}/>

			<PageHeading
				links={[
					{ link: "/dashboard", label: "Asosiy" },
					{ label: "Vendorlar" },
				]}
				title="Vendorlar"
				btnText="+ Vendor qo'shish"
				mainAction={modal.handleOverlayOpen}
				// statistics={adapters.debtorAdapter(debtorStatistics.data)}
			/>

			<Table
                filterComponent={<VendorsFilter setFilter={setFilter} />}
				emptyUiText="Hozirgi vaqtda hech qanday Vendorlar yo'q"
				// isLoading={debtorList.isLoading}
				columns={[
					{
						title: "ID",
						dataKey: "id",
						render: (value) => value,
					},
					{
						title: "Nomi",
						className: "white-space_no-wrap",
						dataKey: "name",
						render: (value) =>
							`${get(value, "first_name", "")} ${get(value, "last_name", "")}`,
					},
					{
						title: "Telefon",
						dataKey: "phone",
						className: "white-space_no-wrap",
						render: (value) => utils.formatters.formatPhoneView(get(value, "phone")),
					},
					{
						title: "Email",
						dataKey: "email",
						render: (value) => value,
					},
					{
						title: "Tarif",
						dataKey: "tarif",
						render: (value) => value,
					},
					{
						title: "Filiallar",
						dataKey: "filial",
						render: (value) => utils.formatters.showDegree(value),
					},
                    {
						title: "Mamlakat",
						dataKey: "country",
						render: (value) => value,
					},
                    {
						title: "Holati",
						dataKey: "status",
						render: (value) => <Status message={value} type="success" />,
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

export default Vendors;
