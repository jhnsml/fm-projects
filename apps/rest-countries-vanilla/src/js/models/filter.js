import elements from "../base";
import { filterByRegion } from "../utils/utils";
import { clearResults, clearPagination } from "../views/view";
import pagination from "../utils/pagination";

/* Filter Controller */
const filter = (data) => {
	const allCountries = [...data];
	const countries = [...data];
	elements.filter.addEventListener("click", (e) => {
		if (e.target.matches(".filter--list li, .filter--list li *")) {
			const query = e.target.innerText;
			if (query !== "All") {
				const countriesByRegion = filterByRegion(countries, query);
				clearResults();
				clearPagination();
				pagination(countriesByRegion);
			} else {
				clearResults();
				clearPagination();
				pagination(allCountries);
			}
		}
		e.preventDefault();
	});
};

export default filter;
