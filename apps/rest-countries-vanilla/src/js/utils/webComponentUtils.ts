import CountryCard from "@components/countryCard";

export const addCustomElement = () => {
	if ("customElements" in window) {
		window.customElements.define("country-card", CountryCard);
	}
};
