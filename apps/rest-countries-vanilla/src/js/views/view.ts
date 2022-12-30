import elements from "@js/base";
import { Country } from "@/index";

// Search View clear results
export const clearResults = () => {
	const resultsNode = elements.results;
	if (resultsNode) {
		resultsNode.replaceChildren();
	}
};
// Show 404 error page
export const showError = () => {
	const markup = `<h2 style="width: 90vh">No results found. Please check the spelling</h2>`;
	elements.results?.insertAdjacentHTML("afterbegin", markup);
};

/* Render Country details page */

export const renderCountryPage = (
	country: Country,
	isoMap: Record<string, string>
) => {
	const {
		borders,
		name,
		flags,
		population,
		region,
		subregion,
		capital,
		currencies,
		languages,
		tld,
		timezones,
	} = country;
	const { common: countryName, official: officialCountryName } = name;
	const convertIsoToName = (ISO3: string) => isoMap[ISO3];
	const generateBorderMarkup = () =>
		borders?.map((country) => {
			const countryName = convertIsoToName(country);
			return `<button class="btn border-btn" data-border="${countryName}">${countryName.replace(
				/\([^]*\)/g,
				""
			)}</button>`;
		});
	const borderMarkup = generateBorderMarkup()?.join("") || [];

	const currencyName = currencies ? Object.values(currencies)?.[0]?.name : "";
	const allLanguages = languages ? Object.values(languages)?.join(", ") : "";

	const markup = `
	  <div class="country-page-wrapper">
	      <button class="btn back-btn">
				<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z" fill="var(--text-color)"/>
				</svg>
				Back
				</button>
	      <div class="country__detailed__data">
	          <figure class="country__flag">
	              <img src="${flags?.svg}" alt="${countryName}">
	          </figure>
	          <div class="country__details">
	              <div class="country__details-top">
	                  <h2>${countryName}</h2>
	              </div>
	              <div class="country__details-main">
	                  <div class="country__details-main-left">
	                      <p><span class="bold">Official Name: </span>${officialCountryName}</p>
	                      <p><span class="bold">Capital: </span>${capital}</p>
	                      <p><span class="bold">Sub Region: </span>${subregion}</p>
	                      <p><span class="bold">Region: </span>${region}</p>
												<p><span class="bold">Population: </span>${population.toLocaleString(
													"en-US"
												)}</p>
	                  </div>
	                  <div class="country__details-main-right">
										<p><span class="bold">Currencies: </span>${currencyName}</p>
	                      <p><span class="bold">Languages: </span>${allLanguages}</p>
												<p><span class="bold">Timezones: </span>${timezones?.join(", ")}</p>
													<p><span class="bold">Top Level Domain: </span>${tld?.join(", ")}</p>
	                  </div>
	              </div>
										${
											borders && borders?.length > 0
												? `
											<div class="country-border-wrapper">
												<h3 class="bold">Border Countries:</h3>
												<div class="country-borders" id="countryBorders">
													${borderMarkup}
												</div>
											</div>`
												: ""
										}
	          </div>
	      </div>
	  </div> `;
	elements.main?.insertAdjacentHTML("beforeend", markup);
};

export const clearCountryPage = (el: Element) => {
	el.remove();
};

const generatePageNumbers = (num: number) => {
	let markup = "";
	let i = 1;
	while (i <= num) {
		markup += `<button class="page-btn" data-index="${i - 1}">${i}</button>`;
		i++;
	}
	return markup;
};
export const paginationNumbers = (num: number) => {
	const markup = generatePageNumbers(num);
	elements.pagination?.insertAdjacentHTML("beforeend", markup);
};

export const clearPagination = () => {
	const paginationNode = elements.pagination;
	if (paginationNode) {
		paginationNode.replaceChildren();
	}
};
