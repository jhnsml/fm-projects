import elements from "./base";

const THEMES = {
	LIGHT: "light",
	DARK: "dark",
};

const ICON = {
	LIGHT: "/assets/moon-outline.svg",
	DARK: "/assets/moon-solid.svg",
};

const THEME_KEY = "theme";
export const initializeTheme = () => {
	const cachedTheme = localStorage.getItem(THEME_KEY);

	if (cachedTheme !== null) {
		document.documentElement.setAttribute("data-theme", cachedTheme);
		elements.currentTheme.textContent = `${cachedTheme} Mode`;
		elements.themeIcon.setAttribute("src", ICON[cachedTheme.toUpperCase()]);
	} else {
		const isDarkTheme = window.matchMedia(
			`(prefers-color-scheme:${THEMES.DARK})`
		).matches;
		const theme = isDarkTheme ? THEMES.DARK : THEMES.LIGHT;
		const themeText = isDarkTheme ? THEMES.LIGHT : THEMES.DARK;

		localStorage.setItem(THEME_KEY, theme);
		document.documentElement.setAttribute("data-theme", theme);
		elements.currentTheme.textContent = `${themeText} Mode`;
		elements.themeIcon.setAttribute("src", ICON[theme.toUpperCase()]);
	}
};

export const switchTheme = (currentTheme) => {
	document.documentElement.removeAttribute("data-theme");

	if (currentTheme !== THEMES.DARK) {
		document.documentElement.setAttribute("data-theme", THEMES.DARK);
		elements.currentTheme.textContent = `${THEMES.DARK} Mode`;
		elements.themeIcon.setAttribute("src", ICON[THEMES.DARK.toUpperCase()]);
		localStorage.setItem(THEME_KEY, THEMES.DARK);
	} else {
		document.documentElement.setAttribute("data-theme", THEMES.LIGHT);
		elements.currentTheme.textContent = `${THEMES.LIGHT} Mode`;
		elements.themeIcon.setAttribute("src", ICON[THEMES.LIGHT.toUpperCase()]);
		localStorage.setItem(THEME_KEY, THEMES.LIGHT);
	}
};
