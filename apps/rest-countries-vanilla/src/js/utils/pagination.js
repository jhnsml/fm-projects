import { chunk, paginationClickHandler } from "./utils";
import elements from "../base";
import { paginationNumbers } from "../views/view";

const generateCountryList = (data) => {
	const width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	const numberPerPage = width > 768 ? 12 : 6;
	const countryData = [...data];
	const countryList = chunk(countryData, numberPerPage);
	return countryList;
};

const pagination = (data) => {
	const countries = generateCountryList(data);
	paginationNumbers(countries.length);
	elements.pagination.addEventListener(
		"click",
		(e) => {
			paginationClickHandler(e, countries);
		},
		false
	);
	document.querySelector('.page-btn[data-index="0"]').click();
};

export default pagination;
