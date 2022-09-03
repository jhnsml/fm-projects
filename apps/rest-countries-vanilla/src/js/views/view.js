import elements from "../base";

// Rendering Results
export const renderResults = (country) => {
	const { name, flags, population, region, capital } = country || {};
	const { common: countryName } = name;

	return `
		<div class="results__container" data-country="${countryName}">
			<a class="results__link" href="#">
				<figure class="country__fig">
						<img src="${flags?.svg}" alt="${countryName}">
				</figure>
				<div class="country__data">
					<div class="country__data--top">
							<h2 class="country__name">${countryName}</h2>
					</div>
					<div class="country__data--bottom">
							<p class="country__population">Population: ${population.toLocaleString(
								"en-US"
							)}</p>
							<p class="country__region">Region: ${region}</p>
							<p class="country__capital">Capital: ${capital}</p>
					</div>
				</div>
			</a>
		</div>
	`;
};

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
	elements.results.insertAdjacentHTML("afterbegin", markup);
};

/* Render Country details page */

export const renderCountryPage = (country, isoMap) => {
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
	const convertIsoToName = (ISO3) => isoMap[ISO3];
	const generateBorderMarkup = () =>
		borders?.map((country) => {
			const countryName = convertIsoToName(country);
			return `<button class="btn border-btn" data-border="${countryName}">${countryName.replace(
				/\([^]*\)/g,
				""
			)}</button>`;
		});
	const borderMarkup = generateBorderMarkup()?.join("") || [];

	const markup = `
	  <div class="country-page-wrapper">
	      <button class="btn back-btn"><i class="fas fa-arrow-left" href="#"></i>Back </button>
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
										<p><span class="bold">Currencies: </span>${
											Object.values(currencies)?.[0]?.name
										}</p>
	                      <p><span class="bold">Languages: </span>${Object.values(
													languages
												)?.join(", ")}</p>
												<p><span class="bold">Timezones: </span>${timezones?.join(", ")}</p>
													<p><span class="bold">Top Level Domain: </span>${tld?.join(", ")}</p>
	                  </div>
	              </div>
										${
											borders?.length > 0
												? `
											<div class="country__details-bottom">
												<h3 class="bold">Border Countries:</h3>
												<div class="country__border-details" id="countryBorders">
													${borderMarkup}
												</div>
											</div>`
												: ""
										}
	          </div>
	      </div>
	  </div> `;
	elements.main.insertAdjacentHTML("beforeend", markup);
};

export const clearCountryPage = (el) => {
	el.remove();
};

const generatePageNumbers = (num) => {
	let markup = "";
	let i = 1;
	while (i <= num) {
		markup += `<button class="page-btn" data-index="${i - 1}">${i}</button>`;
		i++;
	}
	return markup;
};
export const paginationNumbers = (num) => {
	const markup = generatePageNumbers(num);
	elements.pagination.insertAdjacentHTML("beforeend", markup);
};

export const clearPagination = () => {
	const paginationNode = elements.pagination;
	if (paginationNode) {
		paginationNode.replaceChildren();
	}
};
