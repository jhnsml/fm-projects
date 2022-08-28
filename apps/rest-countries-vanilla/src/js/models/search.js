import elements from "../base";
import { match } from "../utils/utils";
import { clearResults, showError, clearPagination } from "../views/view";
import home from "./home";
import pagination from "../utils/pagination";
/* Search Controller */
const search = (data) => {
	const countries = [...data];
	const search = elements.search;

	search.addEventListener("input", (event) => {
		const searchQuery = event.target.value;
		if (searchQuery) {
			const query = searchQuery.replace(/^./, searchQuery[0].toUpperCase());
			const countryData = match(countries, query);
			if (countryData.length) {
				clearResults();
				clearPagination();
				pagination(countryData);
			} else {
				clearResults();
				clearPagination();
				showError();
			}
		} else {
			clearResults();
			home(data);
		}
	});
};

export default search;
