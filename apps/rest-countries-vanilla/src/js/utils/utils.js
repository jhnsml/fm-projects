import { clearResults, renderResults } from "../views/view";
import elements from "../base";
export const fetchAllCountries = async () => {
	try {
		const response = await fetch("https://restcountries.com/v3.1/all");
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("fetchAllCountries", error);
	}
};

export const createIsoMap = (data) =>
	data.reduce((acc, country) => {
		const { cca3: iso3, name } = country;
		const { common: commonName } = name;
		return { ...acc, [iso3]: commonName };
	}, {});

export const filterCountryName = (data, query) => {
	return data.find((el) => el?.name?.common === query);
};

export const filterByRegion = (data, query) =>
	data.filter((el) => el?.region === query);

export const match = (data, query) => {
	const countries = [...data];
	const q = query;
	const arr = countries.filter((country) => {
		const name = country.name?.common;
		if (name.startsWith(q)) {
			return country;
		}
	});
	return arr;
};

export const chunk = (arr, size, out) => {
	out = out || [];
	if (!arr.length) return out;
	out.push(arr.slice(0, size));
	return chunk(arr.slice(size), size, out);
};

export const paginationClickHandler = (e, arr) => {
	const pageBtns = document.querySelectorAll(".page-btn");
	const pageBtnsArray = [...pageBtns];
	pageBtnsArray.filter((el) => {
		if (el.classList.contains("current_page"))
			el.classList.remove("current_page");
	});
	const current = e.target;
	let currentPage = 0;
	const button = current.matches("button, button *");
	if (button) {
		current.classList.add("current_page");
		currentPage = parseInt(current.dataset.index);
		clearResults();
		let fragment = document.createDocumentFragment();
		const markup = arr[currentPage].map((country) =>
			renderResults(country, fragment)
		);
		elements.results.insertAdjacentHTML("beforeend", markup?.join(""));
	}
};
