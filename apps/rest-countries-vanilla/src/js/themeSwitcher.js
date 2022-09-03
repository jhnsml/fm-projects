import elements from "./base";

const ICON_CLASS = {
	dark: "fa-sun",
	light: "fa-moon",
};
export const initializeTheme = () => {
	const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const themeText = isDarkTheme ? "Dark" : "Light";
	document.documentElement.setAttribute("data-theme", themeText.toLowerCase());

	elements.currentTheme.textContent = `${themeText} Mode`;
	elements.themeIcon.classList.add(`${ICON_CLASS[themeText.toLowerCase()]}`);
};

export const switchTheme = (currentTheme) => {
	const prevIconClass = ICON_CLASS[currentTheme];
	document.documentElement.removeAttribute("data-theme");
	if (currentTheme !== "dark") {
		document.documentElement.setAttribute("data-theme", "dark");
		elements.currentTheme.textContent = `Dark Mode`;
		elements.themeIcon.classList.replace(prevIconClass, ICON_CLASS["dark"]);
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		elements.currentTheme.textContent = `Light Mode`;
		elements.themeIcon.classList.replace(prevIconClass, ICON_CLASS["light"]);
	}
};
