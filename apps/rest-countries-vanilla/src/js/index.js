import "@css/style.css";
import "@css/country-page.css";
import elements from "@js/base";
import { fetchAllCountries, createIsoMap } from "@js/utils/utils";
import home from "@js/models/home";
import filterByRegion from "@js/models/filter";
import search from "@js/models/search";
import countryPage from "@js/models/country";
import { clearCountryPage } from "@js/views/view";
import { initializeTheme, switchTheme } from "@js/themeSwitcher";
import { addCustomElement } from "@js/utils/webComponentUtils";

/* Controller */
const initController = async () => {
	const unsortedData = await fetchAllCountries();
	const data = unsortedData?.sort((a, b) =>
		a?.name?.common.localeCompare(b?.name?.common)
	);
	if (unsortedData !== undefined) {
		const isoMap = createIsoMap(data);
		home(data);
		filterByRegion(data);
		search(data);
		countryPage(data, isoMap);
	}

	// Click on the logo
	elements.logo.addEventListener("click", (e) => {
		e.preventDefault();
		clearCountryPage(
			e.target.parentElement.parentElement.parentElement.querySelector(
				".country-page-wrapper"
			)
		);
		home(data);
	});
};

document.addEventListener("DOMContentLoaded", () => {
	initializeTheme();
	// Theme Switcher
	elements.themeBtn.addEventListener("click", (e) => {
		const currentTheme = document.documentElement.getAttribute("data-theme");

		switchTheme(currentTheme);
	});
	addCustomElement();

	initController();
});
