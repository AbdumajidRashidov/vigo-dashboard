import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import config from "config";
import { storage } from "services/storage";

const fallbackLng = "ru";
const supportedLngs = ["uz", "ru", "en"];

const options = {
	fallbackLng,
	supportedLngs,
	keySeparator: false,
	interpolation: {
		escapeValue: false,
		formatSeparator: ",",
	},

	saveMissing: false,
	react: {
		useSuspense: false,
		waiting: false,
	},

	backend: {
		addPath: `${config.baseUrl}/translation`,
		loadPath: `${config.baseUrl}/translation?_l={{lng}}`,
		parse(data) {
			const response = JSON.parse(data);
			return response.data;
		},
		allowMultiLoading: false,
		reloadInterval: false,
		customHeaders: {
			Authorization: `Bearer ${storage.get("token")}`,
		},
	},
};

i18n.use(Backend).use(initReactI18next).init(options);

export default i18n;
