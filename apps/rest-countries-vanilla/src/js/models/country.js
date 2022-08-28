import elements from "../base";
import {
	clearResults,
	clearCountryPage,
	renderCountryPage,
	clearPagination,
} from "../views/view";
import home from "./home";
import { filterCountryName } from "../utils/utils";

const countryPage = (data, iso) => {
	const countries = [...data];
	elements.results.addEventListener("click", (e) => {
		const clickOnCard = e.target.matches(
			".results__container, .results__container *"
		);
		if (clickOnCard) {
			const countryName = e.target.closest(".results__container").dataset
				.country;
			const country = filterCountryName(countries, countryName);
			elements.searchDiv.style.display = "none";
			clearResults();
			clearPagination();
			renderCountryPage(country, iso);
		}
		e.preventDefault();
	});

	elements.main.addEventListener("click", (e) => {
		// Back btn
		if (e.target.matches(".back-btn", ".back-btn i")) {
			console.log(e.target.parentElement);
			clearCountryPage(e.target.parentElement);
			elements.searchDiv.style.display = "flex";
			home(data);
		}
		// Border button
		if (e.target.closest(".border-btn")) {
			const countryPageWrapper = document.querySelector(
				".country-page-wrapper"
			);
			elements.main.removeChild(countryPageWrapper);
			const query = e.target.dataset.border;
			const country = filterCountryName(countries, query);
			renderCountryPage(country, iso);
		}
		e.preventDefault();
	});
};

export default countryPage;
