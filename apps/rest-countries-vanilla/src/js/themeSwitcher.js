import elements from "./base";

const ICON_CLASS = {
	dark: "fa-sun",
	light: "fa-moon",
};

const THEMES = {
	LIGHT: "light",
	DARK: "dark",
};

const THEME_KEY = "theme";
export const initializeTheme = () => {
	const cachedTheme = localStorage.getItem(THEME_KEY);

	if (cachedTheme !== null) {
		document.documentElement.setAttribute("data-theme", cachedTheme);
		elements.currentTheme.textContent = `${cachedTheme} Mode`;
		elements.themeIcon.classList.add(`${ICON_CLASS[cachedTheme]}`);
	} else {
		const isDarkTheme = window.matchMedia(
			`(prefers-color-scheme:${THEMES.DARK})`
		).matches;
		const theme = isDarkTheme ? THEMES.DARK : THEMES.LIGHT;

		localStorage.setItem(THEME_KEY, theme);
		document.documentElement.setAttribute("data-theme", theme);
		elements.currentTheme.textContent = `${theme} Mode`;
		elements.themeIcon.classList.add(`${ICON_CLASS[theme]}`);
	}
};

export const switchTheme = (currentTheme) => {
	const prevIconClass = ICON_CLASS[currentTheme];
	document.documentElement.removeAttribute("data-theme");

	if (currentTheme !== THEMES.DARK) {
		document.documentElement.setAttribute("data-theme", THEMES.DARK);
		elements.currentTheme.textContent = `${THEMES.DARK} Mode`;
		elements.themeIcon.classList.replace(
			prevIconClass,
			ICON_CLASS[THEMES.DARK]
		);
		localStorage.setItem(THEME_KEY, THEMES.DARK);
	} else {
		document.documentElement.setAttribute("data-theme", THEMES.LIGHT);
		elements.currentTheme.textContent = `${THEMES.LIGHT} Mode`;
		elements.themeIcon.classList.replace(
			prevIconClass,
			ICON_CLASS[THEMES.LIGHT]
		);
		localStorage.setItem(THEME_KEY, THEMES.LIGHT);
	}
};
