import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";

import { Typography } from "components";
import { Profile } from "./Profile";
import { Messages } from "./Messages";
import { Language } from "./Language";
import { formatters } from "services/utils";

export const Header = ({
	hasLogo,
	hasNotification,
	hasProfile,
	hasLanguage = true,
	children,
	style,
	containerClass = "",
}) => {
	const { pathname } = useLocation();
	const menuKey = pathname.split("/")[1];

	return (
		<header className="header" style={style}>
			<div className={cn("container", containerClass)}>
				<div className="header__inner">
					{hasLogo && (
						<div className="header__logo">
							<img
								className="brand-logo"
								src={require("assets/images/sidebar-logo.png")}
								alt=""
							/>
						</div>
					)}

					<Typography
						Type="h1"
						className="flex_max page-heading__title title_md"
						text={formatters.menuName(menuKey)}
					/>

					{hasLanguage && <Language />}

					{hasNotification && (
						<>
							<Messages />
							<Messages notification={true} />
						</>
					)}

					{hasProfile && <Profile />}

					{children}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	hasNotification: PropTypes.bool,
	hasProfile: PropTypes.bool,
	children: PropTypes.node,
};
