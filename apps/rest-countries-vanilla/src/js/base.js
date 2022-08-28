const elements = {
	logo: document.querySelector(".logo-text"),
	html: document.querySelector("#html"),
	icon: document.querySelector("i"),
	mode: document.querySelector(".mode"),
	main: document.querySelector("main"),
	themeBtn: document.querySelector(".theme-btn"),
	search: document.querySelector("#search"),
	searchDiv: document.querySelector(".search"),
	filter: document.querySelector(".filter"),
	filterList: document.querySelectorAll(".filter--list li"),
	results: document.querySelector(".results"),
	pagination: document.querySelector(".pagination"),
};

export const elementAttrMap = {
	logo: ".logo-text",
	html: "#html",
	icon: "i",
	mode: ".mode",
	main: "main",
	themeBtn: ".theme-btn",
	search: "#search",
	searchDiv: ".search",
	filter: ".filter",
	filterList: ".filter--list li",
	results: ".results",
	pagination: ".pagination",
};

export default elements;
