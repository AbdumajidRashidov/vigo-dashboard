import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/settings.scss"

import { ActionButtons, Button, Typography } from "components";

export const IntegrationsCard = ({ title, icon, link, onClick, item }) => {
	const navigate = useNavigate();

	return (
        <div className="col-3">
            <div className="integration-card w_100 cursor_pointer" onClick={(event) => navigate(link)}>
                <img src={icon} width="100%" alt="" />
                <div className="integration-card__body">
                    <Typography Type="span" text={title} className="integration-card__title ml_10" />
                    <Button design="primary" onClick={onClick} className="btn" style={{padding:"10px"}} text={" + O'rnatish"}/>
                </div>
		    </div>
        </div>
		
	);
};
