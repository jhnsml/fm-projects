import { Country } from "@/index";

export default class CountryCard extends HTMLDivElement {
	constructor() {
		super();
		const template = document.getElementById("country-card-template");
		const shadowRoot = this.attachShadow({ mode: "closed" });
		if (template) {
			shadowRoot.appendChild(template.cloneNode(true));
		}
	}
}

export const generateCountryCardMarkup = (country: Country) => {
	const { name, flags, population, region, capital } = country || {};
	const { common: countryName } = name;

	return `
		<country-card class="results__container" data-country="${countryName}">
		<div>
			<figure slot="country-image">
					<img src="${flags?.svg}" alt="${countryName}" width="264" height="160">
			</figure>
			<h2 slot="country-name">${countryName}</h2>
			<span slot="country-population">${population.toLocaleString("en-US")}</span>
			<span slot="country-region">${region}</span>
			<span slot="country-capital">${capital}</span>
			</div>
		</country-card>
	`;
};
