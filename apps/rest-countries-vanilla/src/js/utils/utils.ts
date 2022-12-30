import { generateCountryCardMarkup } from "@components/countryCard";

import { Country } from "@/index";

import { clearResults } from "@js/views/view";
import elements from "@js/base";

export const fetchAllCountries = async () => {
	try {
		const response = await fetch("https://restcountries.com/v3.1/all");
		const result: Country[] = await response.json();
		return result;
	} catch (error) {
		console.error("fetchAllCountries", error);
	}
};

export const createIsoMap = (data: Country[]) =>
	data.reduce((acc: Record<string, string>, country: Country) => {
		const { cca3: iso3, name } = country;
		const { common: commonName } = name;
		return { ...acc, [iso3]: commonName };
	}, {});

export const filterCountryName = (data: Country[], query: string) => {
	return data.find((el) => el?.name?.common === query);
};

export const filterByRegion = (data: Country[], query: string) =>
	data.filter((el) => el?.region === query);

export const match = (data: Country[], query: string) => {
	const countries = [...data];
	const arr = countries.filter((country) => {
		const name = country.name?.common;
		if (name.startsWith(query)) {
			return country;
		}
	});
	return arr;
};

export const chunk: any = (arr: any[], size: number, out: any[]) => {
	out = out || [];
	if (!arr.length) return out;
	out.push(arr.slice(0, size));
	return chunk(arr.slice(size), size, out);
};

export const paginationClickHandler = (e: Event, arr: any[]) => {
	const pageBtns = document.querySelectorAll(".page-btn");
	const pageBtnsArray = [...pageBtns];
	pageBtnsArray.filter((el) => {
		if (el.classList.contains("current_page"))
			el.classList.remove("current_page");
	});
	const current = e.target as HTMLButtonElement;
	let currentPage = 0;

	const button = current.matches("button, button *");
	if (button) {
		current.classList.add("current_page");
		if (current.dataset.index) {
			currentPage = parseInt(current.dataset.index);
		}
		clearResults();
		const markup = arr[currentPage].map((country: Country) =>
			generateCountryCardMarkup(country)
		);
		elements.results?.insertAdjacentHTML("beforeend", markup?.join(""));
	}
};
