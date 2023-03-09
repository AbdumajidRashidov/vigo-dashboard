import React,{useState} from "react";

import { PageHeading, TabBase } from "components";
import { MainSettings } from "../components/MainSettings"
import { DevicesSettings } from "../components/DevicesSettings";

import "../styles/settings.scss";
import { PasswordSettings } from "../components/PasswordSettings";

const Settings = () => {

	const [tabSettings, setTabSettings] = useState("Asosiy")



	return (
		<>
			<PageHeading
				links={[
					{ link: "/dashboard", label: "Asosiy" },
					{ label: "Umumiy sozlamalar" },
				]}
				title="Umumiy sozlamalar"
			/>
			<div className="row">
				<div className="col-4">
					<div className="card">
						<TabBase
							className="mb_30"
							labels={["Asosiy","Qurilmalar","Parolni o'zgartirish"]}
							currentLabel={tabSettings}
							vertical={true}
							onPaneChange={(active, event) => setTabSettings(active)}
						/>
					</div>
				</div>
				<div className="col-8">
					<div className="card">
						{tabSettings == "Asosiy" ? <MainSettings/> : tabSettings == "Qurilmalar" ?  <DevicesSettings/> : <PasswordSettings/> }
					</div>
				</div>
			</div>
		</>
	);
};

export default Settings;
