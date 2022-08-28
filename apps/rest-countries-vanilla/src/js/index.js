import "../css/style.css";
import "../css/page-style.css";
import elements from "./base";
import { fetchAllCountries, createIsoMap } from "./utils/utils";
import home from "./models/home";
import filterByRegion from "./models/filter";
import search from "./models/search";
import countryPage from "./models/country";
import { clearCountryPage, switchTheme } from "./views/view";
import { countryCard } from "./customElements/countryCard";

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
	// Theme Switcher
	elements.themeBtn.addEventListener("click", switchTheme);
	countryCard();
	initController();
});
